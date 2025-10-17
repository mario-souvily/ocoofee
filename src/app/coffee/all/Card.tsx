"use client";

import { ICoffee, ICoffeegrain, ICoffeemoulu } from "@/@types";
import { useProduct } from "@/app/Context/CarteContext";
import ImageComponent from "@/components/ui/image";
import { formatPrice } from "@/lib/utils";
import { SignedIn } from "@clerk/nextjs";
import { BiSolidCoffeeBean } from "react-icons/bi";

export default function Card({ product }: { product: ICoffee | ICoffeegrain | ICoffeemoulu }) {
  const { addToCart, products } = useProduct();

  const handleAddToCart = () => {
    addToCart(product);
    alert(`${product.nom} a été ajouté au panier`); // Simple alert en attendant une librairie toast
  };

  // Trouver le produit dans le panier pour afficher sa quantité
  const productInCart = products.find(p => p.id === product.id);
  const quantityInCart = productInCart?.quantityInCart || 0;

  return (
    <div className="bg-white rounded-lg shadow-lg overflow-hidden hover:shadow-xl transition-shadow">
      {/* Image */}
      <div className="h-64 bg-gradient-to-br from-amber-200 flex items-center justify-center relative overflow-hidden">
        <ImageComponent
          src={product.image}
          alt={product.nom}
          width={400}
          height={400}
        />
        <div className="absolute top-4 left-4 bg-amber-600 text-white px-3 py-1 rounded-full text-sm font-semibold flex items-center gap-1">
          <BiSolidCoffeeBean />
          {product.type === 'grain' ? 'Grain' : 'Moulu'}
        </div>
        <div className="absolute top-4 right-4 bg-white/90 text-amber-800 px-2 py-1 rounded-full text-xs font-semibold">
          {product.origine}
        </div>
      </div>

      {/* Contenu */}
      <div className="p-6">
        <div className="mb-3">
          <span className="text-amber-600 font-semibold text-sm uppercase tracking-wide">
            {product.type}
          </span>
        </div>

        <h3 className="text-xl font-semibold mb-3 text-amber-800 line-clamp-2">
          {product.nom}
        </h3>

        <p className="text-gray-600 mb-4 text-sm line-clamp-3">
          {product.description}
        </p>

        <div className="flex items-center justify-between mb-4">
          <div className="flex flex-col">
            <span className="text-amber-600 font-semibold text-sm">
              {product.quantite}g
            </span>
            {quantityInCart > 0 && (
              <span className="text-green-600 font-bold text-xs">
                Dans le panier: {quantityInCart}
              </span>
            )}
          </div>
          <span className="text-2xl font-bold text-amber-600">
            {formatPrice(product.prix)} €
          </span>
        </div>

        <div className="flex space-x-3">
          <button className="flex-1 bg-amber-600 hover:bg-amber-700 text-white py-2 px-4 rounded-full text-sm font-semibold transition-colors">
            Voir le produit
          </button>
          <SignedIn>
            <button
              onClick={handleAddToCart}
              className="flex-1 bg-amber-800 hover:bg-amber-900 text-white py-2 px-4 rounded-full text-sm font-semibold transition-colors"
            >
              Ajouter au panier
            </button>
          </SignedIn>
        </div>
      </div>
    </div>
  );
}
