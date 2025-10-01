"use client";

import NoSSR from "@/components/NoSSR";
import { SignUp } from "@clerk/nextjs";

export default function SignUpPage() {
  return (
    <div className="left-50">
      <div className="min-h-[70vh] flex items-center justify-center py-10 auth-page" >
        <NoSSR fallback={<div className="w-full h-96 flex items-center justify-center">Chargement...</div>}>
          <SignUp routing="path" path="/sign-up" signInUrl="/auth#sign-in" fallbackRedirectUrl="/" />
        </NoSSR>
      </div>
    </div>
  );
}