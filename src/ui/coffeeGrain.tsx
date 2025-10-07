"use client";

import { useRouter } from "next/navigation";

export default function CoffeeFilter() {
  const router = useRouter();

  return (
    <div className="bg-white border-b">
      <div className="max-w-6xl mx-auto px-4 py-4">
        <div className="flex flex-wrap gap-4 justify-center">
          <button
            onClick={() => router.push("/coffee/all")}
            className="px-6 py-2 rounded-full bg-amber-600 text-white font-semibold hover:bg-amber-700 transition-colors"
          >
            Tous
          </button>

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
  );
}
