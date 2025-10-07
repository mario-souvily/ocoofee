"use server";

import { ICoffeegrain } from "@/@types";
import { getCoffeeGrain } from "@/app/action/product";
import { formatPrice } from "@/lib/utils";
import ImageComponent from "./image";


export default async function CoffeeFilter() {
  const coffee = await getCoffeeGrain();
  if (!coffee) {
    return <div>No coffee found</div>;
  }
  return (
    <>
      <div className="bg-white border-b" >
        <div className="max-w-6xl mx-auto px-4 py-4">
          <div className="flex flex-wrap gap-4 justify-center">
            <a
              href="/coffee/all"
              className="px-6 py-2 rounded-full bg-amber-600 text-white font-semibold hover:bg-amber-700 transition-colors"
            >
              Tous
            </a>
            <a
              href="/cafes/moulu"
              className="px-6 py-2 rounded-full bg-gray-200 text-gray-700 font-semibold hover:bg-gray-300 transition-colors"
            >
              Moulus
            </a>
          </div>
        </div>
      </div >
      <div className="max-w-6xl mx-auto px-4 py-12">
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">

          {coffee.map((coffee: ICoffeegrain) => (
            <div
              key={coffee.id}
              className="bg-white rounded-lg shadow-lg overflow-hidden hover:shadow-xl transition-shadow" >

              <div className="h-64 bg-gradient-to-br from-amber-200 flex items-center justify-center relative overflow-hidden">
                <ImageComponent
                  src={coffee.image}
                  alt={coffee.nom}
                  width={400}
                  height={400} />

                <div className="absolute top-4 right-4 bg-white/90 text-amber-800 px-2 py-1 rounded-full text-xs font-semibold">
                  {coffee.origine}
                </div>
              </div>

              {/* Contenu */}
              < div className="p-6" >
                <div className="mb-3">
                  <span className="text-amber-600 font-semibold text-sm uppercase tracking-wide">
                    {coffee.type}
                  </span>
                </div>

                <h3 className="text-xl font-semibold mb-3 text-amber-800 line-clamp-2">
                  {coffee.nom}
                </h3>

                <p className="text-gray-600 mb-4 text-sm line-clamp-3">
                  {coffee.description}
                </p>

                <div className="flex items-center justify-between mb-4">
                  <span className="text-amber-600 font-semibold text-sm">
                    {coffee.quantite}
                  </span>
                  <span className="text-2xl font-bold text-amber-600">
                    {formatPrice(coffee.prix)} €
                  </span>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </>


  );
}
