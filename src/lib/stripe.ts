import Stripe from "stripe";

const stripeSecretKey = process.env.STRIPE_SECRET_KEY;

if (!stripeSecretKey) {
  throw new Error("STRIPE_SECRET_KEY is not set");
}

export const stripe = new Stripe(stripeSecretKey, {
  apiVersion: "2026-04-22.dahlia",
  typescript: true,
});

export function toStripeAmount(euros: number): number {
  return Math.round(euros * 100);
}
