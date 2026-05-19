import { NextResponse } from "next/server";
import { Resend } from "resend";
import EmailTemplate from "@/components/EmailTemplate";
import { rateLimit } from "@/lib/ratelimit";
import { validateTurnstile } from "@/lib/turnstile";
import { contactFormSchema } from "@/lib/validations";

const resend = new Resend(process.env.RESEND_API_KEY);

const allowedOrigins = new Set([
    process.env.NEXT_PUBLIC_BASE_URL,
    "http://localhost:3000",
]);

export async function POST(request: Request) {
    try {
        const origin = request.headers.get("origin");
        if (!origin || !allowedOrigins.has(origin)) {
            return NextResponse.json({ error: "Origin not allowed" }, { status: 403 });
        }

        const ip = request.headers.get("x-forwarded-for") ?? request.headers.get("CF-Connecting-IP") ?? "unknown";
        const { success } = await rateLimit.limit(ip);
        if (!success) {
            return NextResponse.json({ error: "Too many requests" }, { status: 429 });
        }
        
        const body = await request.json();
        if (body.website) {
            return NextResponse.json({ success: true });
        }

        const turnstile = await validateTurnstile(body.turnstileToken ?? "", ip);
        if (!turnstile.success) {
            return NextResponse.json({ error: "Verification failed" }, { status: 403 });
        }

        const { firstName, lastName, email, message } = contactFormSchema.parse(body);

        const { error } = await resend.emails.send({
            from: "onboarding@resend.dev",
            to: process.env.CONTACT_EMAIL!,
            replyTo: email,
            subject: `New message from ${firstName} ${lastName}`,
            react: EmailTemplate({ firstName, lastName, email, message }),
        });
        
        if (error) {
            return NextResponse.json({ error: "Failed to send email" }, { status: 500 });
        }

        return NextResponse.json({ success: true }, { status: 200 });
        
    } catch {
        return NextResponse.json({ error: "Invalid request" }, { status: 400 });
    }
}