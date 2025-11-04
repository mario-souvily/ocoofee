"use client";

import { useProduct } from "@/app/Context/CarteContext";
import { formatPrice } from "@/lib/utils";
import { MdClose } from "react-icons/md";
import ImageComponent from "./ui/image";

interface Props {
  cardModalOpen: boolean;
  handleCardOpen: () => void;
}

const CarteModal = ({ cardModalOpen, handleCardOpen }: Props) => {
  const { products, incrementquantity, decrementquantity, removeitem } = useProduct();

  const totalItems = products.reduce((sum, product) => sum + (product.quantityInCart || 0), 0);
  const totalPrice = products.reduce((sum, product) =>
    sum + (product.prix * (product.quantityInCart || 0)), 0
  );

  return (
    <div>
      {cardModalOpen && (
        <div className='w-[400px] h-[100vh] overflow-y-auto fixed top-0 right-0 bg-white border-l border-gray-300 p-4 z-50'>
          <div className="flex items-center justify-between mb-4">
            <h2 className="text-xl font-bold text-amber-900">
              Panier ({totalItems} articles)
            </h2>
            <button onClick={handleCardOpen} className='text-amber-900 hover:bg-gray-100 p-2 rounded-full'>
              <MdClose size={24} />
            </button>
          </div>

          {products.length === 0 ? (
            <p className="text-gray-500 text-center py-8">Votre panier est vide</p>
          ) : (
            <div className="space-y-4">
              {products.map((product) => (
                <div key={product.id} className="flex items-center space-x-4 p-3 bg-gray-50 rounded-lg">
                  <div className="flex-1">
                    <h3 className="font-semibold text-amber-800">{product.nom}</h3>
                    <ImageComponent src={product.image} width={100} height={100} alt={product.nom} />
                    <p className="text-sm text-gray-600">{product.quantite} - {formatPrice(product.prix)}€ </p>
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
              {/* ajouter un formulaire pour la commande  et valider la commande*/}

              <button className="w-full bg-amber-600 hover:bg-amber-700 text-white py-3 rounded-lg font-semibold">
                Valider la commande

              </button>
            </div>
          )}
        </div>
      )}
    </div>
  )
}

export default CarteModal;
