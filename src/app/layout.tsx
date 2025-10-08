import Navbar from "@/components/ui/navbar";
import { ClerkProvider } from '@clerk/nextjs';
import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Ocoofee - L'art du café d'exception",
  description: "Découvrez l'art du café d'exception. Des grains sélectionnés avec soin pour des saveurs uniques et des moments inoubliables.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <ClerkProvider
      signInUrl="/auth#sign-in"
      signUpUrl="/auth#sign-up"
      signInFallbackRedirectUrl="/"
      signUpFallbackRedirectUrl="/"
      publishableKey={process.env.NEXT_PUBLIC_CLERK_PUBLISHABLE_KEY}

    >
      <html lang="fr">
        <head>
          <script
            dangerouslySetInnerHTML={{
              __html: `
                // Ignorer les erreurs d'extensions de navigateur
                window.addEventListener('error', function(e) {
                  if (e.message.includes('message channel closed') || 
                      e.message.includes('verify-email-address')) {
                    e.preventDefault();
                    return false;
                  }
                });
              `,
            }}
          />
        </head>
        <body
          cz-shortcut-listen="true"
          className={`${geistSans.variable} ${geistMono.variable} antialiased`}
        >
          <Navbar />
          <main className="pt-16">
            {children}
          </main>
        </body>
      </html>
    </ClerkProvider>
  );
}
