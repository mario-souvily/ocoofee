# Documentation des APIs, Fonctions & Composants — Ocoofee

> Version du code : commit courant de la branche `cursor/generate-comprehensive-api-documentation-00e9`

- **Stack** : Next.js (App Router) · React 19 · TypeScript 5 · Prisma/PostgreSQL · Clerk (auth) · EmailJS · Tailwind/shadcn.
- **Organisation** : les routes HTTP vivent sous `src/app/api`, les *server actions* sous `src/app/action`, les composants partagés sous `src/components` et `src/app/Context`.
- **Conventions** : types stricts, composants fonctionnels, code client marqué `"use client"` si nécessaire. Les identifiants Clerk (hashés) font office de mot de passe local.

---

## 1. Modèles & Types Partagés

| Type / Modèle | Emplacement | Champs clés | Notes |
| --- | --- | --- | --- |
| `ICoffee`, `ICoffeegrain`, `ICoffeemoulu` | `src/@types/index.ts` | `id`, `nom`, `type`, `origine`, `quantite`, `description`, `prix`, `image`, `categorie?`, `quantityInCart?` | Représentations front des cafés. Les versions `grain`/`moulu` n’ont pas `categorie`. |
| `IUser` | `src/@types/index.ts` | `id`, `prenom`, `nom`, `email`, `clerkId`, `role`, `createdAt`, `updatedAt` | Sert côté client lors des inscriptions personnalisées. |
| `IInscription`, `ILogin` | `src/@types/index.ts` | Données formulaire d’inscription/connexion. | `password` toujours requis. |
| Prisma `Cafe`, `Cart`, `CartItem`, `Commande`, `CommandeItem`, `User` | `ocoofee/prisma/schema.prisma` | Voir schéma pour relations. | Les identifiants Clerk sont stockés dans `User.clerkId`. |

---

## 2. API REST (Route Handlers Next.js)

Toutes les routes sont sous `/api`. Les routes privées sont protégées par Clerk via `src/middleware.ts` ; voir §9.

### 2.1 `GET /api/coffee`
Liste les 6 cafés (grain/moulu) les moins chers.

| Info | Détails |
| --- | --- |
| Auth | Publique |
| Source | `src/app/api/coffee/route.ts` |
| Réponse 200 | `Array<Cafe>` (JSON Prisma brut) |
| Réponse 404 | `{ error: "No coffees found" }` |

```bash
curl http://localhost:3000/api/coffee
```

### 2.2 `POST /api/coffee`
Crée un café.

| Champ body | Type | Obligatoire |
| --- | --- | --- |
| `nom`, `type`, `origine`, `quantite`, `description`, `image`, `categorie` | `string` | oui |
| `prix` | `number` | oui |

Réponse : café créé (JSON). Aucun contrôle d’authent ni de validation avançée : à sécuriser avant production.

```bash
curl -X POST http://localhost:3000/api/coffee \
  -H "Content-Type: application/json" \
  -d '{"nom":"Moka","type":"Arabica","origine":"Ethiopie","quantite":"250g","description":"Notes florales","prix":12.5,"image":"/image/cafe/ethiopie-moka.jpg","categorie":"grain"}'
```

### 2.3 `GET /api/coffee/all`
Retourne **tous** les cafés triés par prix croissant.

- Auth : publique.
- Codes : `200 Array<Cafe>`, `404` si vide.
- Fichier : `src/app/api/coffee/all/route.ts`.

### 2.4 `GET /api/coffee/grain`
Filtre `categorie === "grain"`.

- Auth : publique.
- Fichier : `src/app/api/coffee/grain/route.ts`.

### 2.5 `GET /api/coffee/moulu`
Filtre `categorie === "moulu"`.

- Auth : publique.
- Fichier : `src/app/api/coffee/moulu/route.ts`.

### 2.6 `GET /api/docs`
Expose la spécification OpenAPI générée par `next-swagger-doc`.

- Auth : publique.
- Fichier : `src/app/api/docs/route.ts`.
- Réponse : objet JSON complet (OpenAPI 3.0).

### 2.7 `GET /api/swaggerDocs`
Page cliente qui embarque Swagger UI pointant vers `/api/docs`.

- Auth : publique.
- Fichier : `src/app/api/swaggerDocs/page.tsx`.
- Usage : visiter `/api/swaggerDocs` pour naviguer dans la doc interactive.

### 2.8 `POST /api/sendEmail`
Proxy serveur vers EmailJS.

| Body | Type | Notes |
| --- | --- | --- |
| `to_name`, `from_name`, `from_email`, `message` | `string` | Tous requis |

Réponses : `200 { success: true }` ou `500 { success: false, error }`. Dépendances env : `EMAILJS_SERVICE_ID`, `EMAILJS_TEMPLATE_ID`, `EMAILJS_PUBLIC_KEY`, `EMAILJS_PRIVATE_KEY`.

```bash
curl -X POST http://localhost:3000/api/sendEmail \
  -H "Content-Type: application/json" \
  -d '{"to_name":"Mario","from_name":"Client","from_email":"client@example.com","message":"Bonjour"}'
```

### 2.9 `GET /api/user`
Retourne tous les utilisateurs en supprimant `clerkId`.

- Auth : protégée par Clerk (cf. middleware).
- Fichier : `src/app/api/user/route.ts`.
- Réponses : `200 { data: Array<Omit<User,"clerkId">> }`, `404` si vide.

### 2.10 `POST /api/user`
Inscrit un utilisateur via Clerk.

Validations :

1. Champs requis `prenom`, `nom`, `email`, `clerkId`.
2. `clerkId` doit respecter `isStrongPass`.
3. `email` doit passer `isEmail`.
4. Vérifie l’unicité email.
5. Hash Argon2 (12 rounds) appliqué sur `clerkId`.

Réponses : `201 { message, data }`, `400/409/500`. À appeler côté serveur uniquement (Clerk gère l’auth côté front).

```bash
curl -X POST http://localhost:3000/api/user \
  -H "Content-Type: application/json" \
  -d '{"prenom":"Jane","nom":"Doe","email":"jane@ex.com","clerkId":"StrongPass!2"}'
```

---

## 3. Server Actions (`src/app/action`)

### 3.1 `commande.ts`

| Fonction | Signature | Description | Notes d’erreur |
| --- | --- | --- | --- |
| `addToCart(cafeId: number, quantite: number, prix: number)` | Auth Clerk, crée utilisateur/cart si inexistant, ajoute ou incrémente un `CartItem`. | Retourne `void` ou `{ error }` si utilisateur absent. |
| `updateCartItemQuantity(cafeId, quantite)` | Met à jour ou supprime (`quantite <= 0`) un item du panier. | Lance `Error` si utilisateur/panier/item inexistant. |
| `removeFromCartDB(cafeId)` | Supprime tous les `CartItem` correspondant. | Erreurs si pas d’utilisateur/panier. |
| `validateCommande(adresse: string)` | Crée une `Commande` à partir du panier, recalcule le total, supprime le panier. | Retourne `{ success }` ou `{ error }`. |
| `getCartFromDB()` | Retourne les produits du panier formatés `ICoffee*` + `quantityInCart`. | Retourne `[]` si pas d’utilisateur. |

**Exemple** : mettre à jour la quantité depuis un composant client.

```tsx
"use client"
import { updateCartItemQuantity } from "@/app/action/commande"

async function onChangeQty(id: number, qty: number) {
  try {
    await updateCartItemQuantity(id, qty)
  } catch (error) {
    console.error("Impossible de mettre à jour la quantité", error)
  }
}
```

### 3.2 `inscription.ts`

- `postInscription(inscription: IInscription)` : valide les champs, applique `isStrongPass`/`isEmail`, vérifie l’unicité via Prisma, hash Argon2. Retourne `{ ok: boolean, message: string, data?: UserSansClerk }`.

Usage côté client :

```tsx
import { postInscription } from "@/app/action/inscription"

const result = await postInscription({
  prenom: "Léa",
  nom: "Martin",
  email: "lea@example.com",
  password: "Azerty!1"
})
if (!result.ok) throw new Error(result.message)
```

### 3.3 `product.ts`

| Fonction | Description |
| --- | --- |
| `getCoffee()` | 6 cafés `grain` ou `moulu` triés par prix croissant. |
| `getAllCoffee()` | Tous les cafés. |
| `getCoffeeMoulu()` | Filtre `categorie === "moulu"`, retourne `[]` si vide. |
| `getCoffeeGrain()` | Filtre `categorie === "grain"`, retourne `[]` si vide. |

Ces actions sont appelées par des composants serveur (pages & listings).

---

## 4. Bibliothèques internes

| Fichier | Export | Description / Usage |
| --- | --- | --- |
| `src/lib/prisma.ts` | `prisma` | Singleton Prisma Client avec logs `query`. À importer côté serveur uniquement. |
| `src/lib/supabaseClient.ts` | `supabase` | Client Supabase côté client (URL + clé publiques). |
| `src/lib/utils.ts` | `cn`, `sanitizeUser`, `isEmail`, `isStrongPass`, `formatPrice` | Helpers UI (merge de classes), suppression des champs sensibles, validations basiques, formatage de prix (`"12.30"`). |
| `src/lib/swagger.ts` | `getApiDocs()` | Configure `next-swagger-doc`. Paramètre `apiFolder` sur `src/app/api/swaggerDocs`, définit `components.schemas` (`User`, `Cafe`, `Commande`, etc.). |

---

## 5. Contextes & Hooks

### `ProductProvider` & `useProduct`
- Fichier : `src/app/Context/CarteContext.tsx`.
- Stocke la liste des produits du panier (`products`), init depuis `getCartFromDB`.
- Expose :
  - `addToCart(product)`
  - `decrementquantity(id)`
  - `incrementquantity(id)`
  - `removeitem(id)`
  - `setCarte()` (setter d’état brut)
- Utilisation : englober l’arbre client (ex. dans `layout.tsx`) puis consommer via `const { products } = useProduct()`.

```tsx
import { ProductProvider, useProduct } from "@/app/Context/CarteContext"

export default function AppLayout({ children }: { children: React.ReactNode }) {
  return <ProductProvider>{children}</ProductProvider>
}

function CartButton() {
  const { products } = useProduct()
  const total = products.reduce((sum, item) => sum + (item.quantityInCart ?? 0), 0)
  return <span>{total} articles</span>
}
```

---

## 6. Composants React Réutilisables

### 6.1 Panier & Produits

| Composant | Fichier | Props | Description |
| --- | --- | --- | --- |
| `CarteModal` | `src/components/carteModal.tsx` | `cardModalOpen: boolean`, `handleCardOpen: () => void` | Panneau latéral listant `products` du contexte (quantité, total, actions +/-/supprimer). |
| `Card` | `src/app/coffee/all/Card.tsx` | `product: ICoffee \| ICoffeegrain \| ICoffeemoulu` | Carte produit (image, origine, type, prix). Bouton “Ajouter au panier” protégé par `<SignedIn>`. |
| `Coffee` | `src/components/ui/coffee.tsx` | – | Composant serveur minimal affichant la liste brute (principalement debug). |
| `CoffeeGrain` / `CoffeeMoulu` | `src/components/ui/cafesGrain.tsx`, `cafesMoulu.tsx` | – | Pages serveur prêtes à l’emploi pour les listes par catégorie avec hero + filtres. |

**Utilisation typique de `Card`**

```tsx
import Card from "@/app/coffee/all/Card"
import type { ICoffee } from "@/@types"

function Listing({ coffees }: { coffees: ICoffee[] }) {
  return (
    <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
      {coffees.map((coffee) => (
        <Card key={coffee.id} product={coffee} />
      ))}
    </div>
  )
}
```

### 6.2 Navigation & Layout

| Composant | Description |
| --- | --- |
| `Navbar` (`src/components/ui/navbar.tsx`) | Barre supérieure fixe : logo, liens, menu déroulant “Nos cafés”, bouton Clerk (`SignedIn/Out`), bouton panier (`CarteModal`). |
| `NavigationMenu` + dérivés (`NavigationMenuContent`, `NavigationMenuItem`, etc.) | Wrappers typés autour de Radix Navigation Menu (exportés depuis `src/components/ui/navigation-menu.tsx`). Accepte prop `viewport` pour activer/désactiver le viewport Radix. |
| `NoSSR` (`src/components/NoSSR.tsx`) | Rend `children` uniquement après montage client. Prop optionnelle `fallback`. |
| `Footer` (`src/components/ui/footer.tsx`) | Pied de page simple avec boutons de navigation. Utilise `next/navigation` pour router. |
| `Layout` de la page contact (`src/app/contact/layout.tsx`) | Enveloppe minimaliste pour la page contact. |

### 6.3 Boutons & visuels

| Composant | Détails |
| --- | --- |
| `Button` (`src/components/ui/button.tsx`) | Wrapper shadcn : variants (`default`, `destructive`, `outline`, `secondary`, `ghost`, `link`) & tailles (`default`, `sm`, `lg`, `icon`). Prop `asChild` pour `Slot`. |
| `ImageComponent` (`src/components/ui/image.tsx`) | Abstraction autour de `next/image` (dimensions figées 200×200, `object-contain`). |
| `Carousel`, `CarouselContent`, `CarouselItem`, `CarouselPrevious`, `CarouselNext` (`src/components/ui/carousel.tsx`) | Implémentation Embla + context React. Prop `orientation` (horizontal/vertical). |
| `CarouselSize` | Carrousel spécifique d’accueil : fetch `/api/coffee`, gère navigation custom. |
| `CarouselSkeleton` / `LoadingSkeleton` | Placeholders animés pendant le chargement du carrousel ou de la page d’accueil. |

**Insérer le carrousel générique**

```tsx
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel"

function Testimonials({ quotes }: { quotes: string[] }) {
  return (
    <Carousel className="max-w-3xl mx-auto">
      <CarouselContent>
        {quotes.map((quote) => (
          <CarouselItem key={quote} className="p-6 bg-white rounded-lg shadow">
            {quote}
          </CarouselItem>
        ))}
      </CarouselContent>
      <CarouselPrevious />
      <CarouselNext />
    </Carousel>
  )
}
```

### 6.4 Formulaires & interactions

| Composant | Description |
| --- | --- |
| `Inscription` (`src/components/ui/inscription.tsx`) | Formulaire client qui appelle `postInscription`. Gestion `loading`, `error`, `success`. À placer sur `/inscription` ou dans une modale. |
| `ContactRestApi` (`src/app/contact/contactRestApi.tsx`) | Formulaire contact modale qui POST vers `/api/sendEmail`. Utilise `router.push('/')` après succès. |
| `ContactPage` (`src/app/contact/page.tsx`) | Rend `ContactRestApi` pleine page. |

---

## 7. Pages App Router Principales

| Route | Fichier | Description |
| --- | --- | --- |
| `/` | `src/app/page.tsx` | Page d’accueil (hero, features, carrousel `CarouselSize`, formulaire newsletter, `Footer`). |
| `/coffee/all` | `src/app/coffee/all/page.tsx` | Liste complète des cafés + stats. |
| `/cafes/grain` | `src/app/cafes/grain/page.tsx` | Wrapper autour de `CoffeeGrain`. |
| `/cafes/moulu` | `src/app/cafes/moulu/page.tsx` | Wrapper autour de `CoffeeMoulu`. |
| `/contact` | `src/app/contact/page.tsx` | Formulaire contact plein écran. |
| `/api/swaggerDocs` | `src/app/api/swaggerDocs/page.tsx` | Swagger UI client. |
| `/auth`, `/sign-in/*`, `/sign-up/*`, `/inscription` | Pages d’auth Clerk & formulaires custom (voir dossier `src/app/auth`, `sign-in`, `sign-up`, `inscription`). |

Toutes les pages utilisent `ProductProvider` via le layout racine (à garantir).

---

## 8. Middleware & Authentification

- Fichier : `src/middleware.ts`.
- Utilise `clerkMiddleware` + `createRouteMatcher`.
- Routes publiques : `/`, `/coffee/all`, `/cafes/*`, `/auth/*`, `/sign-in/*`, `/sign-up/*`, `/api/coffee/*`, `/api/sendEmail`, `/contact`, `/api/docs`.
- Toute autre route (y compris `/api/user`, pages panier, etc.) exige une session Clerk valide (`auth.protect()`).
- Matcher Next : s’applique à toutes les routes sauf assets statiques (`_next`, fichiers `.css`, etc.) et toutes les routes `/api`/`/trpc`.

---

## 9. Bonnes pratiques & Prochaines étapes

1. **Validation côté API** : renforcer `POST /api/coffee` (Zod, Auth admin).
2. **Email** : protéger la route par reCAPTCHA et vérifier la config EmailJS avant déploiement.
3. **Server Actions** : centraliser la gestion des erreurs avec `Result` objects pour éviter les `throw` non interceptés côté client.
4. **Swagger** : déplacer l’annotation `@swagger` du handler `/api/user` vers le bon chemin (`/api/user` vs `/api/users`) pour cohérence.
5. **Tests** : ajouter des tests e2e (Playwright) pour les flux panier/commande.

Cette référence couvre l’intégralité des APIs HTTP, des fonctions serveur et des composants exportés. Gardez-la synchronisée lors de toute nouvelle route, action ou composant partagé.
