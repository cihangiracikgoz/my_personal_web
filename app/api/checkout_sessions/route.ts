import { NextResponse, NextRequest } from "next/server";
import { headers } from "next/headers";
import Stripe from "stripe";
import { stripe } from "../../../lib/stripe";

export async function POST(request: NextRequest) {
    try {
        const headersList = headers()
        const origin = headersList.get("origin")
        const { amount } = await request.json()

        const allowedAmounts = [5, 10, 20, 50];
        if (!allowedAmounts.includes(amount)) {
            return NextResponse.json(
                { error: "Invalid amount" },
                { status: 400 }
            );
        }
        
        const session = await stripe.checkout.sessions.create({
            payment_method_types: ["card"],
            mode: "payment",
            line_items: [
                {
                    price_data: {
                        currency: "gbp",
                        product_data: { name: "Donation" },
                        unit_amount: amount * 100,
                    },
                    quantity: 1,
                },
            ],
            success_url: `${origin}/?donation=success`,
            cancel_url: `${origin}/?donation=cancelled`,
        });
        return NextResponse.json({ url: session.url })
    } catch (err) {
        if (err instanceof Stripe.errors.StripeError) {
            console.error("Stripe error:", err.message);
            return NextResponse.json(
                { error: err.message },
                { status: err.statusCode || 500 }
            );
        }
        console.error("Unexpected error:", err);
        return NextResponse.json(
            { error: "An unexpected error occurred" },
            { status: 500 }
        );
    }
}