import { clerkMiddleware, createRouteMatcher } from "@clerk/nextjs/server";

// liste des routes publiques qui ne necessite pas d'authentification
const isPublicRoute = createRouteMatcher([
  "/coffee/all(.*)",
  "/cafes/grain(.*)",
  "/cafes/moulu(.*)",
  "/auth(.*)",
  "/sign-in(.*)",
  "/sign-up(.*)",
  "/",
  "/api/coffee(.*)",
  "/api/sendEmail(.*)",
  "/contact(.*)",
]);

export default clerkMiddleware(async (auth, req) => {
  // si la route n'est pas publique, on protege la route
  if (!isPublicRoute(req)) {
    // on protege la route
    await auth.protect();
  }
});

export const config = {
  matcher: [
    // Skip Next.js internals and all static files, unless found in search params
    "/((?!_next|[^?]*\\.(?:html?|css|js(?!on)|jpe?g|webp|png|gif|svg|ttf|woff2?|ico|csv|docx?|xlsx?|zip|webmanifest)).*)",
    // Always run for API routes
    "/(api|trpc)(.*)",
  ],
};
