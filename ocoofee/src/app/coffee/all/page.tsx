import { prisma } from "@/lib/prisma";
import ImageComponent from "@/ui/image";

interface ICoffee {
  id: number;
  nom: string;
  type: string;
  origine: string;
  quantite: string;
  description: string;
  prix: number;
  image: string;
  categorie: string;
}

export default async function AllCoffeePage() {
  const allCoffee = await prisma.cafe.findMany({
    orderBy: {
      prix: "asc",
    },
  });

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
            <button className="px-6 py-2 rounded-full bg-amber-600 text-white font-semibold hover:bg-amber-700 transition-colors">
              Tous
            </button>
            <button className="px-6 py-2 rounded-full bg-gray-200 text-gray-700 font-semibold hover:bg-gray-300 transition-colors">
              {/* onclick={() => router.push("/coffee/all?categorie=grain")} */}
              🌱 Grains
            </button>
            <button className="px-6 py-2 rounded-full bg-gray-200 text-gray-700 font-semibold hover:bg-gray-300 transition-colors">
              {/* onclick={() => router.push("/coffee/all?categorie=moulu")} */}
              ☕ Moulus
            </button>
          </div>
        </div>
      </div>

      {/* Liste des cafés */}
      <div className="max-w-6xl mx-auto px-4 py-12">
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {allCoffee.map((coffee) => (
            <div
              key={coffee.id}
              className="bg-white rounded-lg shadow-lg overflow-hidden hover:shadow-xl transition-shadow"
            >
              {/* Image */}
              <div className="h-64 bg-gradient-to-br from-amber-200  flex items-center justify-center relative overflow-hidden">
                <ImageComponent
                  src={coffee.image}
                  alt={coffee.nom}
                  width={400}
                  height={400}
                />
                <div className="absolute top-4 left-4 bg-amber-600 text-white px-3 py-1 rounded-full text-sm font-semibold">
                  {coffee.categorie === 'grain' ? '🌱 Grain' : '☕ Moulu'}
                </div>
                <div className="absolute top-4 right-4 bg-white/90 text-amber-800 px-2 py-1 rounded-full text-xs font-semibold">
                  {coffee.origine}
                </div>
              </div>

              {/* Contenu */}
              <div className="p-6">
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
                    {coffee.prix} €
                  </span>
                </div>

                <div className="flex space-x-3">
                  <button className="flex-1 bg-amber-600 hover:bg-amber-700 text-white py-2 px-4 rounded-full text-sm font-semibold transition-colors">
                    Voir le produit
                  </button>
                  <button className="flex-1 bg-amber-800 hover:bg-amber-900 text-white py-2 px-4 rounded-full text-sm font-semibold transition-colors">
                    Ajouter au panier
                  </button>
                </div>
              </div>
            </div>
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
