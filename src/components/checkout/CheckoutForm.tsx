"use client";

import {
  PaymentElement,
  useElements,
  useStripe,
} from "@stripe/react-stripe-js";
import { useState } from "react";

interface Props {
  commandeId: number;
}

export default function CheckoutForm({ commandeId }: Props) {
  const stripe = useStripe();
  const elements = useElements();
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [errorMessage, setErrorMessage] = useState<string | null>(null);

  const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    if (!stripe || !elements) return;

    setIsSubmitting(true);
    setErrorMessage(null);

    const { error } = await stripe.confirmPayment({
      elements,
      confirmParams: {
        return_url: `${window.location.origin}/checkout/success?commande_id=${commandeId}`,
      },
    });

    if (error) {
      setErrorMessage(error.message ?? "Le paiement a échoué");
      setIsSubmitting(false);
    }
  };

  return (
    <form onSubmit={handleSubmit} className="space-y-4">
      <PaymentElement />
      {errorMessage && (
        <p className="text-sm text-red-600" role="alert">
          {errorMessage}
        </p>
      )}
      <button
        type="submit"
        disabled={!stripe || isSubmitting}
        className="w-full bg-amber-600 hover:bg-amber-700 disabled:bg-amber-400 text-white py-3 rounded-lg font-semibold"
      >
        {isSubmitting ? "Paiement en cours..." : "Payer"}
      </button>
    </form>
  );
}
