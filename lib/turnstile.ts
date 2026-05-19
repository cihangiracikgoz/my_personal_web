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
                secret: process.env.TURNSTILE_SECRET_KEY!,
                response: token,
                remoteip: remoteIp,
            }),
        });

        const data = await response.json();
        return { success: data.success, "error-codes": data["error-codes"] ?? [] };
    } catch {
        return { success: false, "error-codes": ["internal-error"] };
    }
}