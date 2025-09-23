"use client";

import { SignIn } from "@clerk/nextjs";

export default function SignInPage() {
  return (
    <div>
      <div className="min-h-[70vh] flex items-center justify-center py-10">
        <SignIn routing="path" path="/sign-in" signUpUrl="/auth#sign-up" fallbackRedirectUrl="/" />
      </div>
    </div>
  );
}


