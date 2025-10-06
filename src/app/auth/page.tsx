"use client";

import NoSSR from "@/components/NoSSR";
import { SignIn, SignUp } from "@clerk/nextjs";
import { useState } from "react";
//  pages d'authentification pour se connecter et s'inscrire
export default function AuthPage() {
  const [mode, setMode] = useState<"sign-in" | "sign-up">("sign-in");

  return (
    <div className="min-h-screen bg-gradient-to-br from-amber-50 to-orange-100 py-8">
      <div className="text-center mb-8">
        <h1 className="text-3xl font-bold text-amber-900">Bienvenue</h1>
        <p className="text-gray-600 text-lg mt-5">Connectez-vous ou créez votre compte.</p>
      </div>
      <div className="flex items-center justify-center mb-8 gap-3">
        <button
          onClick={() => setMode("sign-in")}
          className={`px-4 py-2 rounded-md border ${mode === "sign-in" ? "bg-amber-600 text-white border-amber-600" : "bg-white text-amber-900 border-amber-300"
            }`}
        >
          Se connecter
        </button>
        <button
          onClick={() => setMode("sign-up")}
          className={`px-4 py-2 rounded-md border ${mode === "sign-up" ? "bg-amber-600 text-white border-amber-600" : "bg-white text-amber-900 border-amber-300"
            }`}
        >
          S&apos;inscrire
        </button>
      </div>
      <div className="min-h-[70vh] flex items-center justify-center py-5">
        {/* Affiche un seul formulaire à la fois pour éviter le chevauchement du captcha */}
        <div className="w-full max-w-4xl px-4">
          <NoSSR fallback={<div className="w-full h-96 flex items-center justify-center">Chargement...</div>}>
            {mode === "sign-in" ? (
              <div className="w-full">
                <SignIn routing="hash" signUpUrl="#sign-up" fallbackRedirectUrl="/" appearance={{ elements: { rootBox: "w-full", card: "w-full" } }} />
              </div>
            ) : (
              <div className="w-full">
                <SignUp routing="hash" signInUrl="#sign-in" fallbackRedirectUrl="/" appearance={{ elements: { rootBox: "w-full", card: "w-full" } }} />
              </div>
            )}
          </NoSSR>
        </div>
      </div>
    </div>
  );
}


