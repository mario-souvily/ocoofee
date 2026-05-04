"use client";

import { useProduct } from "@/app/Context/CarteContext";
import CheckoutForm from "@/components/checkout/CheckoutForm";
import { formatPrice } from "@/lib/utils";
import { Elements } from "@stripe/react-stripe-js";
import { loadStripe, type Stripe } from "@stripe/stripe-js";
import { useState } from "react";
import { MdArrowBack, MdClose } from "react-icons/md";
import ImageComponent from "./ui/image";

interface Props {
  cardModalOpen: boolean;
  handleCardOpen: () => void;
}

type Step = "cart" | "shipping" | "payment";

interface ShippingForm {
  adresse: string;
  ville: string;
  codePostal: string;
  telephone: string;
}

const stripePublishableKey = process.env.NEXT_PUBLIC_STRIPE_PUBLISHABLE_KEY;
const stripePromise: Promise<Stripe | null> = stripePublishableKey
  ? loadStripe(stripePublishableKey)
  : Promise.resolve(null);

const CarteModal = ({ cardModalOpen, handleCardOpen }: Props) => {
  const { products, incrementquantity, decrementquantity, removeitem } =
    useProduct();

  const [step, setStep] = useState<Step>("cart");
  const [shipping, setShipping] = useState<ShippingForm>({
    adresse: "",
    ville: "",
    codePostal: "",
    telephone: "",
  });
  const [clientSecret, setClientSecret] = useState<string | null>(null);
  const [commandeId, setCommandeId] = useState<number | null>(null);
  const [isCreatingIntent, setIsCreatingIntent] = useState(false);
  const [intentError, setIntentError] = useState<string | null>(null);

  const totalItems = products.reduce(
    (sum, product) => sum + (product.quantityInCart || 0),
    0
  );
  const totalPrice = products.reduce(
    (sum, product) => sum + product.prix * (product.quantityInCart || 0),
    0
  );

  const resetCheckout = () => {
    setStep("cart");
    setClientSecret(null);
    setCommandeId(null);
    setIntentError(null);
  };

  const closeModal = () => {
    handleCardOpen();
    resetCheckout();
  };

  const handleShippingSubmit = async (
    event: React.FormEvent<HTMLFormElement>
  ) => {
    event.preventDefault();
    setIntentError(null);
    setIsCreatingIntent(true);

    try {
      const response = await fetch("/api/stripe/create-payment-intent", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          adresse: shipping.adresse,
          ville: shipping.ville,
          codePostal: shipping.codePostal,
          telephone: shipping.telephone || undefined,
        }),
      });

      const data = await response.json();
      if (!response.ok) {
        setIntentError(data.error ?? "Erreur lors de la création du paiement");
        return;
      }

      setClientSecret(data.clientSecret);
      setCommandeId(data.commandeId);
      setStep("payment");
    } catch {
      setIntentError("Erreur réseau, veuillez réessayer");
    } finally {
      setIsCreatingIntent(false);
    }
  };

  if (!cardModalOpen) return null;

  return (
    <div className="w-[400px] h-[100vh] overflow-y-auto fixed top-0 right-0 bg-white border-l border-gray-300 p-4 z-50">
      <div className="flex items-center justify-between mb-4">
        <div className="flex items-center gap-2">
          {step !== "cart" && (
            <button
              onClick={() =>
                setStep(step === "payment" ? "shipping" : "cart")
              }
              className="text-amber-900 hover:bg-gray-100 p-2 rounded-full"
              aria-label="Retour"
            >
              <MdArrowBack size={20} />
            </button>
          )}
          <h2 className="text-xl font-bold text-amber-900">
            {step === "cart" && `Panier (${totalItems} articles)`}
            {step === "shipping" && "Livraison"}
            {step === "payment" && "Paiement"}
          </h2>
        </div>
        <button
          onClick={closeModal}
          className="text-amber-900 hover:bg-gray-100 p-2 rounded-full"
          aria-label="Fermer"
        >
          <MdClose size={24} />
        </button>
      </div>

      {step === "cart" && (
        <>
          {products.length === 0 ? (
            <p className="text-gray-500 text-center py-8">
              Votre panier est vide
            </p>
          ) : (
            <div className="space-y-4">
              {products.map((product) => (
                <div
                  key={product.id}
                  className="flex items-center space-x-4 p-3 bg-gray-50 rounded-lg"
                >
                  <div className="flex-1">
                    <h3 className="font-semibold text-amber-800">
                      {product.nom}
                    </h3>
                    <ImageComponent
                      src={product.image}
                      width={100}
                      height={100}
                      alt={product.nom}
                    />
                    <p className="text-sm text-gray-600">
                      {product.quantite} - {formatPrice(product.prix)}€
                    </p>
                    <p className="text-xs text-amber-700 font-medium mt-1">
                      Quantité: {product.quantityInCart || 0} total prix :{" "}
                      {formatPrice(
                        (product.quantityInCart || 0) * product.prix
                      )}
                      €
                    </p>
                  </div>
                  <div className="flex items-center space-x-2">
                    <button
                      onClick={() => decrementquantity(product.id)}
                      className="w-8 h-8 bg-amber-600 text-white rounded-full hover:bg-amber-700"
                    >
                      -
                    </button>
                    <span className="w-8 text-center font-semibold">
                      {product.quantityInCart || 0}
                    </span>
                    <button
                      onClick={() => incrementquantity(product.id)}
                      className="w-8 h-8 bg-amber-600 text-white rounded-full hover:bg-amber-700"
                    >
                      +
                    </button>
                    <button
                      onClick={() => removeitem(product.id)}
                      className="ml-2 text-red-500 hover:text-red-700"
                    >
                      <MdClose size={16} />
                    </button>
                  </div>
                </div>
              ))}
            </div>
          )}

          {products.length > 0 && (
            <div className="mt-6 p-4 bg-amber-50 rounded-lg">
              <div className="flex justify-between items-center mb-4">
                <span className="text-lg font-bold">Total:</span>
                <span className="text-xl font-bold text-amber-600">
                  {formatPrice(totalPrice)}€
                </span>
              </div>
              <button
                onClick={() => setStep("shipping")}
                className="w-full bg-amber-600 hover:bg-amber-700 text-white py-3 rounded-lg font-semibold"
              >
                Valider la commande
              </button>
            </div>
          )}
        </>
      )}

      {step === "shipping" && (
        <form onSubmit={handleShippingSubmit} className="space-y-4">
          <div>
            <label
              htmlFor="adresse"
              className="block text-sm font-medium text-gray-700 mb-1"
            >
              Adresse
            </label>
            <input
              id="adresse"
              type="text"
              required
              value={shipping.adresse}
              onChange={(e) =>
                setShipping({ ...shipping, adresse: e.target.value })
              }
              className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-amber-500"
              placeholder="12 rue du Café"
            />
          </div>
          <div className="grid grid-cols-2 gap-3">
            <div>
              <label
                htmlFor="codePostal"
                className="block text-sm font-medium text-gray-700 mb-1"
              >
                Code postal
              </label>
              <input
                id="codePostal"
                type="text"
                required
                value={shipping.codePostal}
                onChange={(e) =>
                  setShipping({ ...shipping, codePostal: e.target.value })
                }
                className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-amber-500"
                placeholder="75001"
              />
            </div>
            <div>
              <label
                htmlFor="ville"
                className="block text-sm font-medium text-gray-700 mb-1"
              >
                Ville
              </label>
              <input
                id="ville"
                type="text"
                required
                value={shipping.ville}
                onChange={(e) =>
                  setShipping({ ...shipping, ville: e.target.value })
                }
                className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-amber-500"
                placeholder="Paris"
              />
            </div>
          </div>
          <div>
            <label
              htmlFor="telephone"
              className="block text-sm font-medium text-gray-700 mb-1"
            >
              Téléphone (optionnel)
            </label>
            <input
              id="telephone"
              type="tel"
              value={shipping.telephone}
              onChange={(e) =>
                setShipping({ ...shipping, telephone: e.target.value })
              }
              className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-amber-500"
              placeholder="06 12 34 56 78"
            />
          </div>

          <div className="p-3 bg-amber-50 rounded-lg flex justify-between text-sm">
            <span>Total à payer</span>
            <span className="font-bold text-amber-700">
              {formatPrice(totalPrice)}€
            </span>
          </div>

          {intentError && (
            <p className="text-sm text-red-600" role="alert">
              {intentError}
            </p>
          )}

          <button
            type="submit"
            disabled={isCreatingIntent}
            className="w-full bg-amber-600 hover:bg-amber-700 disabled:bg-amber-400 text-white py-3 rounded-lg font-semibold"
          >
            {isCreatingIntent ? "Préparation..." : "Procéder au paiement"}
          </button>
        </form>
      )}

      {step === "payment" && clientSecret && commandeId !== null && (
        <Elements
          stripe={stripePromise}
          options={{ clientSecret, appearance: { theme: "stripe" } }}
        >
          <CheckoutForm commandeId={commandeId} />
        </Elements>
      )}
    </div>
  );
};

export default CarteModal;
