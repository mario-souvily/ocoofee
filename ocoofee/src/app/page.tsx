

export default async function Home() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-amber-50 to-orange-100">
      {/* Hero Section */}
      <section className="relative h-screen flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0 bg-black/20 z-10"></div>
        <div className="relative z-20 text-center text-white px-4">
          <h1 className="text-6xl md:text-8xl font-bold mb-6 font-serif">
            Ocoofee
          </h1>
          <p className="text-xl md:text-2xl mb-8 max-w-2xl mx-auto">
            Découvrez l&apos;art du café d&apos;exception. Des grains sélectionnés avec soin
            pour des saveurs uniques et des moments inoubliables.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button className="bg-amber-600 hover:bg-amber-700 text-white px-8 py-3 rounded-full text-lg font-semibold transition-colors">
              Découvrir nos cafés
            </button>
            <button className="border-2 border-white text-white hover:bg-white hover:text-amber-800 px-8 py-3 rounded-full text-lg font-semibold transition-colors">
              En savoir plus
            </button>
          </div>
        </div>
        {/* Background coffee beans pattern */}
        <div className="absolute inset-0 bg-gradient-to-br from-amber-800/20 to-orange-900/20 opacity-30"></div>
      </section>

      {/* Features Section */}
      <section className="py-20 px-4 bg-white">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-4xl font-bold text-center mb-16 text-amber-900">
            Pourquoi choisir Ocoofee ?
          </h2>
          <div className="grid md:grid-cols-3 gap-8">
            <div className="text-center p-6">
              <div className="w-16 h-16 bg-amber-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl">🌱</span>
              </div>
              <h3 className="text-xl font-semibold mb-3 text-amber-800">Qualité Premium</h3>
              <p className="text-gray-600">
                Des grains sélectionnés avec soin, torréfiés artisanalement pour
                des saveurs exceptionnelles.
              </p>
            </div>
            <div className="text-center p-6">
              <div className="w-16 h-16 bg-amber-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl">🌍</span>
              </div>
              <h3 className="text-xl font-semibold mb-3 text-amber-800">Origines Uniques</h3>
              <p className="text-gray-600">
                Découvrez des cafés du monde entier : Éthiopie, Colombie,
                Brésil, Kenya et bien d&apos;autres.
              </p>
            </div>
            <div className="text-center p-6">
              <div className="w-16 h-16 bg-amber-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl">🚚</span>
              </div>
              <h3 className="text-xl font-semibold mb-3 text-amber-800">Livraison Rapide</h3>
              <p className="text-gray-600">
                Recevez vos cafés préférés directement chez vous,
                fraîchement torréfiés.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Coffee Showcase */}
      <section className="py-20 px-4 bg-amber-50">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-4xl font-bold text-center mb-16 text-amber-900">
            Nos Cafés d&apos;Exception
          </h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {/* Coffee Card 1 */}
            <div className="bg-white rounded-lg shadow-lg overflow-hidden hover:shadow-xl transition-shadow">
              <div className="h-48 bg-gradient-to-br from-amber-200 to-orange-300 flex items-center justify-center">
                <span className="text-6xl">☕</span>
              </div>
              <div className="p-6">
                <h3 className="text-xl font-semibold mb-2 text-amber-800">
                  Éthiopie Moka
                </h3>
                <p className="text-gray-600 mb-4">
                  Un café floral et fruité aux notes de jasmin et bergamote.
                </p>
                <div className="flex justify-between items-center">
                  <span className="text-2xl font-bold text-amber-600">8,90 €</span>
                  <button className="bg-amber-600 hover:bg-amber-700 text-white px-4 py-2 rounded-full transition-colors">
                    Ajouter
                  </button>
                </div>
              </div>
            </div>

            {/* Coffee Card 2 */}
            <div className="bg-white rounded-lg shadow-lg overflow-hidden hover:shadow-xl transition-shadow">
              <div className="h-48 bg-gradient-to-br from-amber-200 to-orange-300 flex items-center justify-center">
                <span className="text-6xl">☕</span>
              </div>
              <div className="p-6">
                <h3 className="text-xl font-semibold mb-2 text-amber-800">
                  Colombie Supremo
                </h3>
                <p className="text-gray-600 mb-4">
                  Café doux avec des notes de noisette et chocolat.
                </p>
                <div className="flex justify-between items-center">
                  <span className="text-2xl font-bold text-amber-600">12,50 €</span>
                  <button className="bg-amber-600 hover:bg-amber-700 text-white px-4 py-2 rounded-full transition-colors">
                    Ajouter
                  </button>
                </div>
              </div>
            </div>


            {/* Coffee Card 3 */}
            <div className="bg-white rounded-lg shadow-lg overflow-hidden hover:shadow-xl transition-shadow">
              <div className="h-48 bg-gradient-to-br from-amber-200 to-orange-300 flex items-center justify-center">
                <span className="text-4xl">☕</span>
              </div>
              <div className="p-6">
                <h3 className="text-xl font-semibold mb-2 text-amber-800">
                  Brésil Santos
                </h3>
                <p className="text-gray-600 mb-4">
                  Café équilibré, rond et légèrement chocolaté.
                </p>
                <div className="flex justify-between items-center">
                  <span className="text-2xl font-bold text-amber-600">7,90 €</span>
                  <button className="bg-amber-600 hover:bg-amber-700 text-white px-4 py-2 rounded-full transition-colors">
                    Ajouter
                  </button>
                </div>
              </div>
            </div>
          </div>
          <div className="text-center mt-12">
            <button className="bg-amber-600 hover:bg-amber-700 text-white px-8 py-3 rounded-full text-lg font-semibold transition-colors">
              Voir tous nos cafés
            </button>
          </div>
        </div>
      </section>

      {/* Newsletter Section */}
      <section className="py-20 px-4 bg-amber-900 text-white">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl font-bold mb-4">
            Restez informé de nos nouveautés
          </h2>
          <p className="text-amber-100 mb-8">
            Recevez en avant-première nos nouvelles variétés et offres exclusives.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 max-w-md mx-auto">
            <input
              type="email"
              placeholder="Votre adresse email"
              className="flex-1 px-4 py-3 rounded-full text-gray-900 focus:outline-none focus:ring-2 focus:ring-amber-400"
            />
            <button className="bg-amber-500 hover:bg-amber-600 text-white px-6 py-3 rounded-full font-semibold transition-colors">
              S&apos;abonner
            </button>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-900 text-white py-12 px-4">
        <div className="max-w-6xl mx-auto text-center">
          <h3 className="text-2xl font-bold mb-4">Ocoofee</h3>
          <p className="text-gray-400 mb-6">
            L&apos;art du café d&apos;exception, livré chez vous.
          </p>
          <div className="flex justify-center space-x-6 mb-6">
            <a href="#" className="text-gray-400 hover:text-amber-400 transition-colors">
              À propos
            </a>
            <a href="#" className="text-gray-400 hover:text-amber-400 transition-colors">
              Nos cafés
            </a>
            <a href="#" className="text-gray-400 hover:text-amber-400 transition-colors">
              Contact
            </a>
          </div>
          <p className="text-gray-500 text-sm">
            © 2025 Mario Souvily - Tous droits réservés
          </p>
        </div>
      </footer>
    </div>
  );
}
