export default function CarouselSkeleton() {
  return (
    <div className="relative w-full max-w-6xl mx-auto">
      {/* Boutons de navigation Skeleton */}
      <div className="absolute left-4 top-1/2 transform -translate-y-1/2 z-10 w-12 h-12 bg-white/80 rounded-full animate-pulse"></div>
      <div className="absolute right-4 top-1/2 transform -translate-y-1/2 z-10 w-12 h-12 bg-white/80 rounded-full animate-pulse"></div>

      {/* Container du carousel Skeleton */}
      <div className="overflow-hidden">
        <div className="flex">
          {[1, 2, 3].map((i) => (
            <div key={i} className="w-1/3 flex-shrink-0 px-4">
              <div className="bg-white rounded-lg shadow-lg overflow-hidden h-full">
                {/* Image Skeleton */}
                <div className="h-48 bg-gradient-to-br from-gray-200 to-gray-300 animate-pulse"></div>

                {/* Contenu de la carte Skeleton */}
                <div className="p-4">
                  <div className="mb-2">
                    <div className="h-4 bg-gray-200 rounded w-20 animate-pulse"></div>
                  </div>
                  <div className="h-6 bg-gray-200 rounded mb-2 animate-pulse"></div>
                  <div className="h-4 bg-gray-200 rounded mb-2 animate-pulse"></div>
                  <div className="h-4 bg-gray-200 rounded mb-3 w-3/4 animate-pulse"></div>

                  <div className="flex justify-between items-center">
                    <div className="h-6 bg-gray-200 rounded w-16 animate-pulse"></div>
                    <div className="flex space-x-2">
                      <div className="h-8 bg-gray-200 rounded-full w-20 animate-pulse"></div>
                      <div className="h-8 bg-gray-200 rounded-full w-24 animate-pulse"></div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Indicateurs Skeleton */}
      <div className="flex justify-center mt-8 space-x-2">
        {[1, 2, 3].map((i) => (
          <div key={i} className="w-3 h-3 bg-gray-300 rounded-full animate-pulse"></div>
        ))}
      </div>
    </div>
  );
}
