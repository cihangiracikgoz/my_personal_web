import { NextResponse } from "next/server";
import { Resend } from "resend";
import { ZodError } from "zod";
import EmailTemplate from "@/components/EmailTemplate";
import { ipRateLimit, emailRateLimit } from "@/lib/ratelimit";
import { validateTurnstile } from "@/lib/turnstile";
import { contactFormSchema } from "@/lib/validations";
import { env } from "@/lib/env";

const resend = new Resend(env.RESEND_API_KEY);

const allowedOrigin = new URL(env.NEXT_PUBLIC_BASE_URL).origin;

export async function POST(request: Request) {
    try {
        // CORS check
        const origin = request.headers.get("origin");
        if (!origin || origin !== allowedOrigin) {
            return NextResponse.json({ error: "Origin not allowed" }, { status: 403 });
        }

        // Rate limiting
        const ip = request.headers.get("x-real-ip")?.trim()
            || request.headers.get("x-forwarded-for")?.split(",")[0]?.trim()
            || "unknown";
        const { success } = await ipRateLimit.limit(ip);
        if (!success) {
            return NextResponse.json({ error: "Too many requests" }, { status: 429 });
        }
        
        // Honeypot check
        const body = await request.json().catch(() => null);
        if (!body || typeof body !== "object" || Array.isArray(body)) {
            return NextResponse.json({ error: "Invalid request body" }, { status: 400 });
        }
        if (body.website) {
            return NextResponse.json({ success: true });
        }

        // Turnstile verification
        const turnstile = await validateTurnstile(body.turnstileToken ?? "", ip);
        if (!turnstile.success) {
            return NextResponse.json({ error: "Verification failed" }, { status: 403 });
        }

        // Validate form data
        const { firstName, lastName, email, message } = contactFormSchema.parse(body);

        const normalizedEmail = email.trim().toLowerCase();
        const { success: emailAllowed } = await emailRateLimit.limit(normalizedEmail);
        if (!emailAllowed) {
            return NextResponse.json({ error: "Too many requests" }, { status: 429 });
        }

        // Send email using Resend
        const { error } = await resend.emails.send({
            from: "Cihangir Acikgoz <noreply@cihangiracikgoz.dev>",
            to: env.CONTACT_EMAIL,
            replyTo: email,
            subject: `New message from ${firstName} ${lastName}`,
            react: EmailTemplate({ firstName, lastName, email, message }),
        });
        
        if (error) {
            return NextResponse.json({ error: "Failed to send email" }, { status: 500 });
        }

        return NextResponse.json({ success: true }, { status: 200 });
        
    } catch (error) {
        if (error instanceof ZodError) {
            return NextResponse.json(
                { error: "Validation failed" },
                { status: 400 }
            );
        }
        return NextResponse.json({ error: "Internal server error" }, { status: 500 });
    }
}