

import { getCoffee } from "@/app/action/product";

export default async function Coffee() {
  const coffee = await getCoffee();


  if (!coffee) {
    return <div>No coffee found</div>;
  }

  return (
    <div>
      {coffee.map((coffee) => (
        <div key={coffee.id}>
          <h1>{coffee.nom}</h1>
          <p>{coffee.type}</p>
          <p>{coffee.origine}</p>
          <p>{coffee.quantite}</p>
          <p>{coffee.description}</p>
          <p>{coffee.prix} €</p>
          <p>{coffee.image}</p>
          <p>{coffee.categorie}</p>
        </div>
      ))}
    </div>
  );
}