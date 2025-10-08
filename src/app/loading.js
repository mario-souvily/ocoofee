import CarouselSkeleton from "@/components/ui/carousel-skeleton";

export default function Loading() {
  // Skeleton de chargement pour le carousel uniquement
  return (
    <div className="py-20 px-4 bg-amber-50">
      <div className="max-w-6xl mx-auto">
        <div className="h-12 bg-gray-200 rounded-lg mb-16 mx-auto w-96 animate-pulse"></div>
        <CarouselSkeleton />
      </div>
    </div>
  );
}
