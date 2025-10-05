import { ICoffeemoulu } from "@/@types/index";
import { getCoffeeMoulu } from "@/app/action/product";

export default async function CoffeeMoulu() {
  const coffee = await getCoffeeMoulu();
  if (!coffee) {
    return <div>No coffee found</div>;
  }

  return (
    <div>
      {coffee.map((coffee: ICoffeemoulu) => (
        <div key={coffee.id}>
          <h1>{coffee.nom}</h1>
          <p>{coffee.type}</p>
          <p>{coffee.origine}</p>
          <p>{coffee.quantite}</p>
          <p>{coffee.description}</p>
          <p>{coffee.prix} €</p>
          <p>{coffee.image}</p>
        </div>
      ))}
    </div>
  );
}