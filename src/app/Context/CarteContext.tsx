"use client";

import { ICoffee, ICoffeegrain, ICoffeemoulu } from "@/@types/index";
import { createContext, useContext, useState } from "react";

interface IProductContext {
  products: ICoffee[] | ICoffeegrain[] | ICoffeemoulu[];
  addToCart: (product: ICoffee | ICoffeegrain | ICoffeemoulu) => void;
  decrementquantity: (id: number) => void;
  incrementquantity: (id: number) => void;
  removeitem: (id: number) => void;
  setCarte: (carte: ICoffee[] | ICoffeegrain[] | ICoffeemoulu[]) => void;
}
interface productProviderProps {
  children: React.ReactNode;
}

const ProductContext = createContext<IProductContext | undefined>(undefined);

export const ProductProvider: React.FC<productProviderProps> = ({ children }) => {
  const [products, setProducts] = useState<ICoffee[] | ICoffeegrain[] | ICoffeemoulu[]>([]);

  // pour ajouter un produit au panier
  const addToCart = (product: ICoffee | ICoffeegrain | ICoffeemoulu) => {
    const existingProductIndex = products.findIndex(p => p.id === product.id);
    if (existingProductIndex !== -1) {
      const updatedproduct = [...products];
      updatedproduct[existingProductIndex].quantite = (parseInt(updatedproduct[existingProductIndex].quantite) + 1).toString();
      setProducts(updatedproduct);
    } else {
      setProducts([...products, product]);
    }
  };

  // pour decrementer la quantite d'un produit
  const decrementquantity = (id: number) => {
    const updatedProducts = products.map(product => {
      if (product.id === id) {
        const newQuantity = parseInt(product.quantite) - 1;
        if (newQuantity <= 0) {
          return null;
        }
        return { ...product, quantite: newQuantity.toString() };
      }
      return product;
    }).filter(product => product !== null) as ICoffee[] | ICoffeegrain[] | ICoffeemoulu[];

    setProducts(updatedProducts);
  };
  // pour incrementer la quantite d'un produit
  const incrementquantity = (id: number) => {
    setProducts(products.map(product =>
      //si le produit est le meme, incrementer la quantite
      product.id === id
        //sinon retourner le produit
        ? { ...product, quantite: (parseInt(product.quantite) + 1).toString() }
        //sinon retourner le produit
        : product
    ));
  };
  // pour supprimer un produit du panier
  const removeitem = (id: number) => {
    setProducts(products.filter(product => product.id !== id));
  };
  // retourner les produits du panier
  return <ProductContext.Provider value={{ products, addToCart, decrementquantity, incrementquantity, removeitem, setCarte: setProducts }}>{children}</ProductContext.Provider>;
};
export const useProduct = () => {
  const context = useContext(ProductContext);
  if (!context) {
    throw new Error("useProduct must be used within a ProductProvider");
  }
  return context;
};
