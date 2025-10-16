import { useRouter } from "next/navigation";

export default function Footer() {
  const router = useRouter();
  return (
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
          <button onClick={() => router.push("/coffee/all")} className="text-gray-400 hover:text-amber-400 transition-colors">
            Nos cafés
          </button>
          <button onClick={() => router.push("/contact")} className="text-gray-400 hover:text-amber-400 transition-colors">
            Contact
          </button>
        </div>
        <p className="text-gray-500 text-sm">
          © 2025 Mario Souvily - Tous droits réservés
        </p>
      </div>
    </footer>
  );
}