"use client";

import NoSSR from "@/components/NoSSR";
import { SignIn } from "@clerk/nextjs";

export default function SignInPage() {
  return (
    <div className="left-50">
      <div className="min-h-[70vh] flex items-center justify-center py-10 auth-page" >
        <NoSSR fallback={<div className="w-full h-96 flex items-center justify-center">Chargement...</div>}>
          <SignIn routing="path" path="/sign-in" signUpUrl="/auth#sign-up" fallbackRedirectUrl="/" />
        </NoSSR>
      </div>
    </div>
  );
}


