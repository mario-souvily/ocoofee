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
// context pour le panier de produits
const ProductContext = createContext<IProductContext | undefined>(undefined);
// provider pour le panier de produits qui va permetre de gerer le panier de produits
export const ProductProvider: React.FC<productProviderProps> = ({ children }) => {
  const [products, setProducts] = useState<ICoffee[] | ICoffeegrain[] | ICoffeemoulu[]>([]);
  // fonction pour ajouter un produit au panier
  // pour ajouter un produit au panier
  const addToCart = (product: ICoffee | ICoffeegrain | ICoffeemoulu) => {
    const existingProductIndex = products.findIndex(p => p.id === product.id);
    // si le produit existe deja dans le panier, on incremente la quantite dans le panier
    if (existingProductIndex !== -1) {
      // Produit déjà dans le panier, incrémenter la quantité dans le panier
      const updatedProducts = [...products];
      if (updatedProducts[existingProductIndex]) {
        updatedProducts[existingProductIndex]!.quantityInCart = (updatedProducts[existingProductIndex]!.quantityInCart || 0) + 1;
      }
      setProducts(updatedProducts);
    } else {
      // Nouveau produit, l'ajouter avec quantityInCart = 1
      const productWithCartQuantity = { ...product, quantityInCart: 1 };
      setProducts([...products, productWithCartQuantity]);
    }
  };

  // pour decrementer la quantite d'un produit dans le panier
  const decrementquantity = (id: number) => {
    const updatedProducts = products.map(product => {
      if (product.id === id) {
        const newCartQuantity = (product.quantityInCart || 0) - 1;
        if (newCartQuantity <= 0) {
          return null; // Supprimer du panier si quantité = 0
        }
        return { ...product, quantityInCart: newCartQuantity };
      }
      return product;
    }).filter(product => product !== null) as ICoffee[] | ICoffeegrain[] | ICoffeemoulu[];

    setProducts(updatedProducts);
  };
  // pour incrementer la quantite d'un produit dans le panier
  const incrementquantity = (id: number) => {
    setProducts(products.map(product =>
      product.id === id
        ? { ...product, quantityInCart: (product.quantityInCart || 0) + 1 }
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

