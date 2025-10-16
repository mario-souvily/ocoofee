import { getAllCoffee } from "@/app/action/product";
import Card from "@/app/coffee/all/Card";

export default async function AllCoffeePage() {
  const allCoffee = await getAllCoffee();
  return (
    <div className="min-h-screen bg-gradient-to-br from-amber-50 to-orange-100">
      {/* Header */}
      <div className="bg-white shadow-sm">
        <div className="max-w-6xl mx-auto px-4 py-8">
          <h1 className="text-4xl font-bold text-amber-900 text-center">
            Tous nos Cafés d&apos;Exception
          </h1>
          <p className="text-lg text-gray-600 text-center mt-4">
            Découvrez notre collection complète de cafés du monde entier
          </p>
        </div>
      </div>

      {/* Filtres */}
      <div className="bg-white border-b">
        <div className="max-w-6xl mx-auto px-4 py-4">
          <div className="flex flex-wrap gap-4 justify-center">
            <a href="/coffee/all" className="px-6 py-2 rounded-full bg-amber-600 text-white font-semibold hover:bg-amber-700 transition-colors">
              Tous
            </a>
            <a href="/cafes/moulu" className="px-6 py-2 rounded-full bg-gray-200 text-gray-700 font-semibold hover:bg-gray-300 transition-colors">
              Moulus
            </a>
            <a href="/cafes/grain" className="px-6 py-2 rounded-full bg-gray-200 text-gray-700 font-semibold hover:bg-gray-300 transition-colors">
              Grains
            </a>
          </div>
        </div>
      </div>

      {/* Liste des cafés */}
      <div className="max-w-6xl mx-auto px-4 py-12">
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {allCoffee.map((coffee) => (
            <Card key={coffee.id} product={coffee} />
          ))}
        </div>

        {/* Statistiques */}
        <div className="mt-16 text-center">
          <div className="bg-white rounded-lg shadow-lg p-8">
            <h2 className="text-2xl font-bold text-amber-900 mb-6">
              Notre Collection
            </h2>
            <div className="grid md:grid-cols-3 gap-8">
              <div>
                <div className="text-3xl font-bold text-amber-600">{allCoffee.length}</div>
                <div className="text-gray-600">Cafés disponibles</div>
              </div>
              <div>
                <div className="text-3xl font-bold text-amber-600">
                  {allCoffee.filter(c => c.categorie === 'grain').length}
                </div>
                <div className="text-gray-600">Cafés en grains</div>
              </div>
              <div>
                <div className="text-3xl font-bold text-amber-600">
                  {allCoffee.filter(c => c.categorie === 'moulu').length}
                </div>
                <div className="text-gray-600">Cafés moulus</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
