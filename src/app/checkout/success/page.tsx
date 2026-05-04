import { stripe } from "@/lib/stripe";
import { formatPrice } from "@/lib/utils";
import Link from "next/link";

interface PageProps {
  searchParams: Promise<{
    payment_intent?: string;
    commande_id?: string;
    redirect_status?: string;
  }>;
}

export default async function CheckoutSuccessPage({ searchParams }: PageProps) {
  const params = await searchParams;
  const paymentIntentId = params.payment_intent;
  const commandeId = params.commande_id;

  let status: "succeeded" | "processing" | "requires_payment_method" | "unknown" =
    "unknown";
  let amountEuros: number | null = null;

  if (paymentIntentId) {
    try {
      const intent = await stripe.paymentIntents.retrieve(paymentIntentId);
      if (
        intent.status === "succeeded" ||
        intent.status === "processing" ||
        intent.status === "requires_payment_method"
      ) {
        status = intent.status;
      }
      amountEuros = intent.amount / 100;
    } catch {
      status = "unknown";
    }
  }

  return (
    <div className="max-w-xl mx-auto px-4 py-16 text-center">
      {status === "succeeded" && (
        <>
          <h1 className="text-3xl font-bold text-amber-900 mb-4">
            Merci pour votre commande
          </h1>
          <p className="text-gray-700 mb-2">
            Votre paiement a bien été reçu.
          </p>
          {amountEuros !== null && (
            <p className="text-gray-700 mb-2">
              Montant débité :{" "}
              <span className="font-semibold">{formatPrice(amountEuros)}€</span>
            </p>
          )}
          {commandeId && (
            <p className="text-gray-500 text-sm mb-8">
              Référence commande : #{commandeId}
            </p>
          )}
        </>
      )}

      {status === "processing" && (
        <>
          <h1 className="text-3xl font-bold text-amber-900 mb-4">
            Paiement en cours
          </h1>
          <p className="text-gray-700 mb-8">
            Votre paiement est en cours de traitement. Vous recevrez un email de
            confirmation dès qu&apos;il sera validé.
          </p>
        </>
      )}

      {status === "requires_payment_method" && (
        <>
          <h1 className="text-3xl font-bold text-red-700 mb-4">
            Paiement échoué
          </h1>
          <p className="text-gray-700 mb-8">
            Votre paiement n&apos;a pas pu être validé. Veuillez réessayer.
          </p>
        </>
      )}

      {status === "unknown" && (
        <>
          <h1 className="text-3xl font-bold text-amber-900 mb-4">
            Statut inconnu
          </h1>
          <p className="text-gray-700 mb-8">
            Nous n&apos;avons pas pu vérifier le statut de votre paiement.
          </p>
        </>
      )}

      <Link
        href="/coffee/all"
        className="inline-block bg-amber-600 hover:bg-amber-700 text-white px-6 py-3 rounded-lg font-semibold"
      >
        Retour à la boutique
      </Link>
    </div>
  );
}
