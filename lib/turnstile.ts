import { env } from "@/lib/env";

interface TurnstileResult {
    success: boolean;
    "error-codes": string[];
}

export async function validateTurnstile(token: string, remoteIp: string): Promise<TurnstileResult> {
    try {
        const response = await fetch("https://challenges.cloudflare.com/turnstile/v0/siteverify", {
            method: "POST",
            headers: { "Content-Type": "application/x-www-form-urlencoded" },
            body: new URLSearchParams({
                secret: env.TURNSTILE_SECRET_KEY,
                response: token,
                remoteip: remoteIp,
                idempotency_key: crypto.randomUUID(),
            }),
        });

        const data = await response.json();

        if (data.success && data.hostname) {
            const allowed = new URL(env.NEXT_PUBLIC_BASE_URL).hostname;
            if (data.hostname !== allowed) {
                return { success: false, "error-codes": ["hostname-mismatch"] };
            }
        }

        return { success: data.success, "error-codes": data["error-codes"] ?? [] };
    } catch {
        return { success: false, "error-codes": ["internal-error"] };
    }
}
