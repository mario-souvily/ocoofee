export default function LoadingSkeleton() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-amber-50 to-orange-100">
      {/* Hero Section Skeleton */}
      <section className="relative h-screen flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0 bg-black/20 z-10"></div>
        <div className="relative z-20 text-center text-white px-4">
          <div className="h-24 bg-white/20 rounded-lg mb-6 animate-pulse"></div>
          <div className="h-8 bg-white/20 rounded-lg mb-8 max-w-2xl mx-auto animate-pulse"></div>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <div className="h-12 bg-white/20 rounded-full w-48 animate-pulse"></div>
            <div className="h-12 bg-white/20 rounded-full w-32 animate-pulse"></div>
          </div>
        </div>
        <div className="absolute inset-0 bg-gradient-to-br from-amber-800/20 to-orange-900/20 opacity-30"></div>
      </section>

      {/* Features Section Skeleton */}
      <section className="py-20 px-4 bg-white">
        <div className="max-w-6xl mx-auto">
          <div className="h-12 bg-gray-200 rounded-lg mb-16 mx-auto w-96 animate-pulse"></div>
          <div className="grid md:grid-cols-3 gap-8">
            {[1, 2, 3].map((i) => (
              <div key={i} className="text-center p-6">
                <div className="w-16 h-16 bg-gray-200 rounded-full mx-auto mb-4 animate-pulse"></div>
                <div className="h-6 bg-gray-200 rounded-lg mb-3 mx-auto w-32 animate-pulse"></div>
                <div className="h-4 bg-gray-200 rounded-lg mb-2 mx-auto w-full animate-pulse"></div>
                <div className="h-4 bg-gray-200 rounded-lg mx-auto w-3/4 animate-pulse"></div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Coffee Showcase Skeleton */}
      <section className="py-20 px-4 bg-amber-50">
        <div className="max-w-6xl mx-auto">
          <div className="h-12 bg-gray-200 rounded-lg mb-16 mx-auto w-96 animate-pulse"></div>

          {/* Carousel Skeleton */}
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
          </div>

          {/* Bouton Skeleton */}
          <div className="text-center mt-12">
            <div className="h-12 bg-gray-200 rounded-full w-48 mx-auto animate-pulse"></div>
          </div>
        </div>
      </section>

      {/* Newsletter Section Skeleton */}
      <section className="py-20 px-4 bg-amber-900">
        <div className="max-w-4xl mx-auto text-center">
          <div className="h-8 bg-white/20 rounded-lg mb-4 mx-auto w-80 animate-pulse"></div>
          <div className="h-5 bg-white/20 rounded-lg mb-8 mx-auto w-96 animate-pulse"></div>
          <div className="flex flex-col sm:flex-row gap-4 max-w-md mx-auto">
            <div className="flex-1 h-12 bg-white/20 rounded-full animate-pulse"></div>
            <div className="h-12 bg-white/20 rounded-full w-32 animate-pulse"></div>
          </div>
        </div>
      </section>

      {/* Footer Skeleton */}
      <footer className="bg-gray-900 py-12 px-4">
        <div className="max-w-6xl mx-auto text-center">
          <div className="h-8 bg-gray-700 rounded-lg mb-4 mx-auto w-32 animate-pulse"></div>
          <div className="h-5 bg-gray-700 rounded-lg mb-6 mx-auto w-80 animate-pulse"></div>
          <div className="flex justify-center space-x-6 mb-6">
            {[1, 2, 3].map((i) => (
              <div key={i} className="h-4 bg-gray-700 rounded w-16 animate-pulse"></div>
            ))}
          </div>
          <div className="h-4 bg-gray-700 rounded w-64 mx-auto animate-pulse"></div>
        </div>
      </footer>
    </div>
  );
}
