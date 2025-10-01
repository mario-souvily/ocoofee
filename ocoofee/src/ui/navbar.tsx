"use client";



import CarteModal from "@/components/carteModal";
import NoSSR from "@/components/NoSSR";
import { NavigationMenu, NavigationMenuContent, NavigationMenuItem, NavigationMenuLink, NavigationMenuTrigger } from '@/components/ui/navigation-menu';
import { SignedIn, SignedOut, UserButton } from '@clerk/nextjs';
import { Menu, X } from "lucide-react";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { useEffect, useState } from "react";
import { FaShoppingCart } from "react-icons/fa";
import { GiCoffeeBeans } from "react-icons/gi";

export default function Navbar() {
  const router = useRouter();
  const [isOpen, setIsOpen] = useState(false);
  const [cardModalOpen, setCardModalOpen] = useState(false)

  const handleCardOpen = () => {
    setCardModalOpen(!cardModalOpen)
  }

  const [links] = useState<{ name: string; href: string }[]>([
    { name: "Accueil", href: "/" },
    // { name: "Nos cafés", href: "/cafes" },
    { name: "Panier", href: "/panier" },
  ]);

  // Fermer le menu mobile lors du changement de route
  useEffect(() => {
    setIsOpen(false);
  }, [router]);

  return (
    <nav className="bg-amber-900 text-white shadow-lg fixed top-0 w-full z-50 list-none">
      <div className="max-w-6xl mx-auto px-4  ">
        <div className="flex items-center h-16 ">
          {/* Logo */}
          <div className="flex items-center gap-4">
            <Link href="/" className="text-2xl font-bold hover:text-amber-200 transition-colors flex flex-row space-x-2">
              <GiCoffeeBeans size={34} />
              <span>Ocoofee</span>
            </Link>
          </div>

          {/* Espaceur pour pousser le menu burger à droite sur mobile */}
          <div className="flex-1 lg:hidden" />

          {/* Navigation Desktop */}
          <div className="hidden lg:flex items-center space-x-8 ml-auto">
            {links.map((link) => (
              <Link
                key={link.name}
                href={link.href}
                className="text-white hover:text-amber-200 transition-colors font-medium "
              >
                {link.name}
              </Link>
            ))}

            <NoSSR fallback={<div className="text-white">Nos cafés</div>}>
              <NavigationMenu viewport={false}>
                <NavigationMenuItem>
                  <NavigationMenuTrigger className=" bg-amber-900 text-white hover:text-amber-200 transition-colors space-x-0 p-0"> Nos cafés </NavigationMenuTrigger>
                  <NavigationMenuContent>
                    <ul className="grid w-[400px] gap-3">
                      <NavigationMenuLink asChild>
                        <Link href="/cafesGrain">
                          <div className=" font-medium">café en grain</div>
                        </Link>
                      </NavigationMenuLink>
                      <NavigationMenuLink asChild>
                        <Link href="/cafesMoulu">
                          <div className=" font-medium">café en moulu</div>
                        </Link>
                      </NavigationMenuLink>
                    </ul>
                  </NavigationMenuContent>
                </NavigationMenuItem>
              </NavigationMenu>
            </NoSSR>
            {/* menu déroulant */}
            {isOpen && (
              <ul>
                <li>
                  <button onClick={() => setIsOpen(false)} className="text-white hover:text-amber-200 font-medium">
                    cafés en grain
                  </button>
                </li>
                <li>
                  <button onClick={() => setIsOpen(false)} className="text-white hover:text-amber-200 font-medium">
                    cafés en moulu
                  </button>
                </li>
              </ul>
            )}


            {/* Bouton d'authentification */}
            <div className="hidden lg:flex items-center space-x-8 ml-6 relative left-90">
              <NoSSR>
                <SignedOut>
                  <Link href="/auth">
                    <button
                      onClick={() => setIsOpen(false)}
                      className=" text-white hover:text-amber-200 transition-colors font-medium ml-4">
                      S&apos;inscrire / Se connecter
                    </button>
                  </Link>
                </SignedOut>
                <SignedIn>
                  <UserButton />
                </SignedIn>
              </NoSSR>
              {/* Panier */}
              <button
                onClick={handleCardOpen}
                className="bg-amber-900 shadow-lg hover:bg-amber-600 text-white px-4 py-2 rounded-full transition-colors flex items-center gap-2 relative"
              >
                <span className="absolute top-0 right-0 bg-amber-600 text-white px-2 py-1 rounded-full text-xs">0</span>
                <FaShoppingCart size={30} />
              </button>
            </div>
            <CarteModal cardModalOpen={cardModalOpen} handleCardOpen={handleCardOpen} />
          </div>


          {/* Bouton Menu burger*/}
          <div className="lg:hidden">
            <div className="lg:hidden">
              <button
                onClick={() => setIsOpen(!isOpen)}
                className="text-white hover:text-amber-200 transition-colors p-2 "
                aria-label="Menu"
              >
                {isOpen ? <X size={24} /> : <Menu size={24} />}
              </button>
            </div>

          </div>
        </div >

        {/* Menu Mobile */}
        {
          isOpen && (
            <div className="lg:hidden bg-amber-900 border-t border-amber-700">
              <div className="px-4 space-y-1">
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

                {/* Bouton d'authentification mobile */}
                <div className="pt-4 border-t border-amber-700 space-y-2">
                  <NoSSR>
                    <SignedOut>
                      <Link href="/auth" onClick={() => setIsOpen(false)}>
                        <button className="w-full bg-amber-600 hover:bg-amber-700 text-white rounded-md font-medium py-2 cursor-pointer">
                          S&apos;inscrire / Se connecter
                        </button>
                      </Link>
                    </SignedOut>
                    <SignedIn>
                      <div className="flex justify-center">
                        <UserButton />
                      </div>
                    </SignedIn>
                  </NoSSR>

                  <Link
                    href="/panier"
                    onClick={handleCardOpen}
                    className=" text-white px-1 py-3 rounded-full transition-colors text-center font-medium mt-4 relative"
                  >
                    <span className="absolute top-0 right-0 bg-amber-600 text-white px-2 py-1 rounded-full text-xs">0</span>
                    <FaShoppingCart size={30} />

                  </Link>
                </div>
              </div>
            </div>
          )
        }
      </div >
    </nav >
  );
}