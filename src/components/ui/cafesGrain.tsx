"use server";

import { ICoffeegrain } from "@/@types";
import { getCoffeeGrain } from "@/app/action/product";
import Card from "@/app/coffee/all/Card";


export default async function CoffeeFilter() {
  const coffee = await getCoffeeGrain();
  if (!coffee) {
    return <div>No coffee found</div>;
  }
  return (
    <>
      <div className="min-h-screen bg-gradient-to-br from-amber-50 to-orange-100">
        {/* Header */}
        <div className="bg-white shadow-sm">
          <div className="max-w-6xl mx-auto px-4 py-8">
            <h1 className="text-4xl font-bold text-amber-900 text-center">
              Tous nos Cafés en Grains
            </h1>
            <p className="text-lg text-gray-600 text-center mt-4">
              Découvrez notre collection complète de cafés en grains du monde entier avec une qualité exceptionnelle. Tous nos cafés sont soigneusement sélectionnés pour vous offrir des saveurs uniques et des expériences inoubliables.
            </p>
          </div>
        </div>
        {/* Filtres */}
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
            {coffee.map((c: ICoffeegrain) => (
              <Card key={c.id} product={c} />
            ))}
          </div>
        </div>
      </div>
    </>


  );
}
