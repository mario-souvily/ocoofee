"use client";

import { useEffect, useState } from "react";
import { ICoffeegrain } from "../@types/index";

export default function Coffee() {
  const [coffee, setCoffee] = useState<ICoffeegrain[]>([]);

  useEffect(() => {
    const fetchCoffee = async () => {
      try {
        const response = await fetch("/api/coffeegrain");
        const data = await response.json();
        setCoffee(data as ICoffeegrain[]);
      } catch (error) {
        console.error("Error fetching coffee:", error);
      }
    };
    fetchCoffee();
  }, []);

  return (
    <div>
      {coffee.map((coffee) => (
        <div key={coffee.id}>
          <h1>{coffee.nom}</h1>
          <p>{coffee.type}</p>
          <p>{coffee.origine}</p>
          <p>{coffee.quantite}</p>
          <p>{coffee.description}</p>
          <p>{coffee.prix}</p>
          <p>{coffee.image}</p>
        </div>
      ))}
    </div>
  );
}