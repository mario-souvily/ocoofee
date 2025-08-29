"use client"

import { useEffect, useState } from "react";
import { ICoffee } from "../@types/index";

export default function Coffee() {
  const [coffee, setCoffee] = useState<ICoffee[]>([]);

  useEffect(() => {
    const fetchCoffee = async () => {
      try {
        const response = await fetch("/api/coffee");
        const data = await response.json();
        setCoffee(data as ICoffee[]);
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
          <p>{coffee.categorie}</p>
        </div>
      ))}
    </div>
  );
}