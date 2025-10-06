
import { ICoffeemoulu } from "@/@types/index";
import { getCoffeeMoulu } from "@/app/action/product";
import ImageComponent from "@/ui/image";
import { useRouter } from "next/navigation";

export default async function MouluPage() {
  const coffee = await getCoffeeMoulu();
  const router = useRouter();
  if (!coffee) {
    return <div>No coffee found</div>;
  }

  return (
    <>
      <div>
        <div className="bg-white border-b">
          <div className="max-w-6xl mx-auto px-4 py-4">
            <div className="flex flex-wrap gap-4 justify-center">
              <button
                onClick={() => router.push("/coffee/grain")}
                className="px-6 py-2 rounded-full bg-gray-200 text-gray-700 font-semibold hover:bg-gray-300 transition-colors"
              >
                Grains
              </button>

              <button
                onClick={() => router.push("/coffee/moulu")}
                className="px-6 py-2 rounded-full bg-gray-200 text-gray-700 font-semibold hover:bg-gray-300 transition-colors"
              >
                Moulus
              </button>
            </div>
          </div>
        </div>

        <div>
          {coffee.map((coffee: ICoffeemoulu) => (
            <div key={coffee.id}>
              <ImageComponent
                src={coffee.image}
                alt={coffee.nom}
                width={400}
                height={400}
              />
            </div>
          ))}
        </div>
      </div>
    </>
  );
}
