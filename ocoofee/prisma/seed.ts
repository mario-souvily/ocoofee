import { prisma } from "@/lib/prisma";

async function main() {
  console.log("🚀 Seeding database...");

  // === Users ===
  await prisma.user.createMany({
    data: [
      {
        prenom: "Toto",
        nom: "Titi",
        email: "test@test.com",
        pass: "sha256:test", // ⚠️ à remplacer par vrai hash bcrypt/sha2
        role: false, // user
      },
      {
        prenom: "Mario",
        nom: "Souvily",
        email: "armco@hotmail.fr",
        pass: "sha256:1234", // ⚠️ idem
        role: true, // admin
      },
    ],
  });

  // === Cafés en grain ===
  await prisma.cafeGrain.createMany({
    data: [
      {
        nom: "Café en grain Éthiopie Moka",
        type: "Arabica",
        origine: "Éthiopie",
        quantite: "250g",
        description:
          "Un café floral et fruité aux notes de jasmin et bergamote.",
        prix: 8.9,
        image: "/images/ethiopie-moka.jpg",
      },
      {
        nom: "Café en grain Colombie Supremo",
        type: "Arabica",
        origine: "Colombie",
        quantite: "500g",
        description: "Café doux avec des notes de noisette et chocolat.",
        prix: 12.5,
        image: "colombie-supremo.jpg",
      },
      {
        nom: "Café en grain Brésil Santos",
        type: "Arabica",
        origine: "Brésil",
        quantite: "250g",
        description: "Café équilibré, rond et légèrement chocolaté.",
        prix: 7.9,
        image: "bresil-santos.jpg",
      },
      {
        nom: "Café en grain Kenya AA",
        type: "Arabica",
        origine: "Kenya",
        quantite: "250g",
        description: "Café corsé, acidité vive, notes fruitées.",
        prix: 9.5,
        image: "kenya-aa.jpg",
      },
      {
        nom: "Café en grain Guatemala Antigua",
        type: "Arabica",
        origine: "Guatemala",
        quantite: "250g",
        description: "Café gourmand avec notes de cacao et fruits secs.",
        prix: 10.2,
        image: "guatemala-antigua.jpg",
      },
      {
        nom: "Café en grain Costa Rica Tarrazu",
        type: "Arabica",
        origine: "Costa Rica",
        quantite: "250g",
        description: "Café équilibré aux notes d’agrumes et miel.",
        prix: 11.0,
        image: "costa-rica-tarrazu.jpg",
      },
      {
        nom: "Café en grain Inde Malabar Moussonné",
        type: "Arabica",
        origine: "Inde",
        quantite: "250g",
        description: "Café puissant et épicé avec faible acidité.",
        prix: 8.5,
        image: "inde-malabar.jpg",
      },
      {
        nom: "Café en grain Pérou Bio",
        type: "Arabica",
        origine: "Pérou",
        quantite: "250g",
        description: "Café bio équilibré, notes de caramel et noix.",
        prix: 9.9,
        image: "perou-bio.jpg",
      },
      {
        nom: "Café en grain Honduras SHG",
        type: "Arabica",
        origine: "Honduras",
        quantite: "250g",
        description: "Café doux, notes de miel et chocolat au lait.",
        prix: 8.7,
        image: "honduras-shg.jpg",
      },
      {
        nom: "Café en grain Mexique Altura",
        type: "Arabica",
        origine: "Mexique",
        quantite: "250g",
        description: "Café doux, légèrement fruité et floral.",
        prix: 9.2,
        image: "mexique-altura.jpg",
      },
    ],
  });

  // === Cafés moulus ===
  await prisma.cafeMoulu.createMany({
    data: [
      {
        nom: "Café moulu Brésil Santos",
        type: "Arabica",
        origine: "Brésil",
        quantite: "250g",
        description: "Café équilibré, idéal pour espresso.",
        prix: 7.9,
        image: "bresil-santos.jpg",
      },
      {
        nom: "Café moulu Kenya AA",
        type: "Arabica",
        origine: "Kenya",
        quantite: "250g",
        description: "Café corsé, acidité vive et notes fruitées.",
        prix: 9.5,
        image: "kenya-aa.jpg",
      },
      {
        nom: "Café moulu Colombie Excelso",
        type: "Arabica",
        origine: "Colombie",
        quantite: "250g",
        description: "Café équilibré avec une douceur chocolatée.",
        prix: 8.8,
        image: "colombie-excelso.jpg",
      },
      {
        nom: "Café moulu Ethiopie Sidamo",
        type: "Arabica",
        origine: "Éthiopie",
        quantite: "250g",
        description: "Café floral avec des notes fruitées délicates.",
        prix: 9.2,
        image: "ethiopie-sidamo.jpg",
      },
      {
        nom: "Café moulu Guatemala Huehuetenango",
        type: "Arabica",
        origine: "Guatemala",
        quantite: "250g",
        description: "Café complexe avec notes de cacao et caramel.",
        prix: 10.1,
        image: "guatemala-huehuetenango.jpg",
      },
      {
        nom: "Café moulu Pérou Bio",
        type: "Arabica",
        origine: "Pérou",
        quantite: "250g",
        description: "Café bio, équilibré et légèrement sucré.",
        prix: 9.4,
        image: "perou-bio.jpg",
      },
      {
        nom: "Café moulu Inde Plantation",
        type: "Arabica",
        origine: "Inde",
        quantite: "250g",
        description: "Café corsé avec des notes épicées.",
        prix: 8.3,
        image: "inde-plantation.jpg",
      },
      {
        nom: "Café moulu Honduras Marcala",
        type: "Arabica",
        origine: "Honduras",
        quantite: "250g",
        description: "Café doux, arômes de noisette et miel.",
        prix: 8.9,
        image: "honduras-marcala.jpg",
      },
      {
        nom: "Café moulu Costa Rica",
        type: "Arabica",
        origine: "Costa Rica",
        quantite: "250g",
        description: "Café vif, notes d’agrumes et miel.",
        prix: 9.6,
        image: "costa-rica.jpg",
      },
      {
        nom: "Café moulu Mexique Chiapas",
        type: "Arabica",
        origine: "Mexique",
        quantite: "250g",
        description: "Café équilibré, légèrement fruité.",
        prix: 9.0,
        image: "mexique-chiapas.jpg",
      },
    ],
  });

  console.log("✅ Seed terminé !");
}

main()
  .catch((e) => {
    console.error("❌ Erreur de seed:", e);
    process.exit(1);
  })
  .finally(async () => {
    await prisma.$disconnect();
  });
