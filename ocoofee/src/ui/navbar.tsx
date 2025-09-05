"use client";

import { SignInButton, SignUpButton, SignedIn, SignedOut, UserButton } from '@clerk/nextjs';
import { Menu, X } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { useEffect, useState } from "react";
import { GiCoffeeBeans } from "react-icons/gi";

export default function Navbar() {
  const router = useRouter();
  const [isOpen, setIsOpen] = useState(false);

  const [links] = useState<{ name: string; href: string }[]>([
    { name: "Accueil", href: "/" },
    { name: "Nos cafés", href: "/cafes" },
    { name: "Panier", href: "/panier" },
  ]);

  // Fermer le menu mobile lors du changement de route
  useEffect(() => {
    setIsOpen(false);
  }, [router]);

  return (
    <nav className="bg-amber-900 text-white shadow-lg fixed top-0 w-full z-50">
      <div className="max-w-6xl mx-auto px-4">
        <div className="flex justify-between items-center h-16">
          {/* Logo */}
          <div className="flex items-center gap-4">
            <Link href="/" className="text-2xl font-bold hover:text-amber-200 transition-colors flex flex-row space-x-2">
              <GiCoffeeBeans size={34} />
              <span>Ocoofee</span>
            </Link>
          </div>

          {/* Navigation Desktop */}
          <div className="hidden lg:flex items-center space-x-8">
            {links.map((link) => (
              <Link
                key={link.name}
                href={link.href}
                className="text-white hover:text-amber-200 transition-colors font-medium"
              >
                {link.name}
              </Link>
            ))}

            {/* Boutons d'authentification */}
            <div className="hidden lg:flex items-center space-x-8">
              <SignedOut>
                <SignInButton>
                  <button className=" text-white hover:text-amber-200 transition-colors font-medium">
                    Se connecter
                  </button>
                </SignInButton>
                <SignUpButton>
                  <button className=" text-white hover:text-amber-200 transition-colors font-medium">
                    S&apos;inscrire
                  </button>
                </SignUpButton>
              </SignedOut>
              <SignedIn>
                <UserButton />
              </SignedIn>
            </div>

            {/* Panier */}
            <Link
              href="/panier"
              className="bg-amber-900 shadow-lg hover:bg-amber-600 text-white px-4 py-2 rounded-full transition-colors flex items-center gap-2 ml-4"
            >
              <Image src="/image/shopping-cart.png" alt="Panier" width={30} height={30} />
            </Link>
          </div>

          {/* Bouton Menu burger*/}
          <div className="lg:hidden">
            <div className="lg:hidden">
              <button
                onClick={() => setIsOpen(!isOpen)}
                className="text-white hover:text-amber-200 transition-colors p-2"
                aria-label="Menu"
              >
                {isOpen ? <X size={24} /> : <Menu size={24} />}
              </button>
            </div>

          </div>
        </div>

        {/* Menu Mobile */}
        {isOpen && (
          <div className="lg:hidden bg-amber-900 border-t border-amber-700">
            <div className="px-4 py-6 space-y-4">
              {links.map((link) => (
                <Link
                  key={link.name}
                  href={link.href}
                  className="block text-white hover:text-amber-200 transition-colors font-medium py-2"
                  onClick={() => setIsOpen(false)}
                >
                  {link.name}
                </Link>
              ))}

              {/* Boutons d'authentification mobile */}
              <div className="pt-4 border-t border-amber-700 space-y-2">
                <SignedOut>
                  <SignInButton>
                    <button className="w-full bg-amber-600 hover:bg-amber-700 text-white rounded-md font-medium py-2 cursor-pointer">
                      Se connecter
                    </button>
                  </SignInButton>
                  <SignUpButton>
                    <button className="w-full bg-amber-600 hover:bg-amber-700 text-white rounded-md font-medium py-2 cursor-pointer mt-2">
                      S&apos;inscrire
                    </button>
                  </SignUpButton>
                </SignedOut>
                <SignedIn>
                  <div className="flex justify-center">
                    <UserButton />
                  </div>
                </SignedIn>

                <Link
                  href="/panier"
                  className="block bg-amber-700 hover:bg-amber-600 text-white px-4 py-3 rounded-full transition-colors text-center font-medium mt-4"
                  onClick={() => setIsOpen(false)}
                >
                  <Image src="/image/shopping-cart.png" alt="Panier" width={30} height={30} />
                </Link>
              </div>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
}