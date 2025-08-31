import { useRouter } from "next/navigation";
import { useEffect, useState } from "react";
import CarouselSkeleton from "./carousel-skeleton";
import ImageComponent from "./image";

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

export function CarouselSize() {
  const [coffee, setCoffee] = useState<ICoffee[]>([]);
  const router = useRouter();
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const fetchCoffee = async () => {
      try {
        const res = await fetch("/api/coffee");
        const data = await res.json();

        // parseInt au cas où prix est string
        const parsed = data.map((c: ICoffee) => ({
          ...c,
          prix: c.prix,
        }));

        setCoffee(parsed);
      } catch (error) {
        console.error("Erreur lors du fetch des cafés :", error);
      }
    };

    fetchCoffee();
  }, []);

  const nextSlide = () => {
    setCurrentIndex(prev => {
      const maxIndex = Math.max(0, coffee.length - 3); // Afficher 3 cartes à la fois
      return prev >= maxIndex ? 0 : prev + 1;
    });
  };

  const prevSlide = () => {
    setCurrentIndex(prev => {
      const maxIndex = Math.max(0, coffee.length - 3);
      return prev <= 0 ? maxIndex : prev - 1;
    });
  };

  if (coffee.length === 0) {
    return <CarouselSkeleton />;
  }

  return (
    <div className="relative w-full max-w-6xl mx-auto">
      {/* Boutons de navigation */}
      <button
        onClick={prevSlide}
        className="absolute left-4 top-1/2 transform -translate-y-1/2 z-10 bg-white/80 hover:bg-white text-amber-800 p-3 rounded-full shadow-lg transition-all duration-300 hover:scale-110"
      >
        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
        </svg>
      </button>

      <button
        onClick={nextSlide}
        className="absolute right-4 top-1/2 transform -translate-y-1/2 z-10 bg-white/80 hover:bg-white text-amber-800 p-3 rounded-full shadow-lg transition-all duration-300 hover:scale-110"
      >
        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
        </svg>
      </button>

      {/* Container du carousel */}
      <div className="overflow-hidden">
        <div
          className="flex transition-transform duration-500 ease-in-out"
          style={{ transform: `translateX(-${currentIndex * (100 / 3)}%)` }}
        >
          {coffee.map((coffeeItem, index) => (
            <div
              key={coffeeItem.id}
              className="w-1/3 flex-shrink-0 px-4"
            >
              <div className="bg-white rounded-lg shadow-lg overflow-hidden hover:shadow-xl transition-shadow h-full">
                {/* Image */}
                <div className="h-48 bg-gradient-to-br flex items-center justify-center relative overflow-hidden">
                  <ImageComponent
                    src={coffeeItem.image}
                    alt={coffeeItem.nom}
                    width={300}
                    height={300}
                  />

                </div>

                {/* Contenu de la carte */}
                <div className="p-2">
                  <div className="mb-2">
                    <span className="text-amber-600 font-semibold text-xs uppercase tracking-wide">
                      {coffeeItem.origine}
                    </span>
                  </div>
                  <h3 className="text-lg font-semibold mb-2 text-amber-800 line-clamp-2">
                    {coffeeItem.nom}
                  </h3>
                  <p className="text-gray-600 mb-3 text-sm line-clamp-2">
                    {coffeeItem.description}
                  </p>

                  <div className="flex justify-between items-center">
                    <span className="text-xl font-bold text-amber-600">
                      {coffeeItem.prix} €
                    </span>
                    <div className="flex space-x-2 ">
                      <button className="  bg-amber-600 hover:bg-amber-700 text-white px-3 py-1 rounded-full text-sm transition-colors">
                        Voir produit
                      </button>
                      <button className=" bg-amber-800 hover:bg-amber-900 text-white px-3 py-1 rounded-full text-sm transition-colors">
                        Ajouter au panier
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Indicateurs de position */}
      <div className="flex justify-center mt-8 space-x-2">
        {Array.from({ length: Math.ceil(coffee.length / 3) }).map((_, index) => (
          <button
            key={index}
            onClick={() => setCurrentIndex(index)}
            className={`w-3 h-3 rounded-full transition-all duration-300 ${index === currentIndex
              ? 'bg-amber-600 scale-125'
              : 'bg-amber-300 hover:bg-amber-400'
              }`}
          />
        ))}
      </div>
    </div>
  );
}
