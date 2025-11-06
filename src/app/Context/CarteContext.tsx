"use client";

import { ICoffee, ICoffeegrain, ICoffeemoulu } from "@/@types/index";
import { createContext, useContext, useEffect, useState } from "react";
import { addToCart as addToCartDB, getCartFromDB, removeFromCartDB, updateCartItemQuantity } from "../action/commande";

interface IProductContext {
  products: ICoffee[] | ICoffeegrain[] | ICoffeemoulu[];
  addToCart: (product: ICoffee | ICoffeegrain | ICoffeemoulu) => Promise<void>;
  decrementquantity: (id: number) => Promise<void>;
  incrementquantity: (id: number) => Promise<void>;
  removeitem: (id: number) => Promise<void>;
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
  // recuperer le panier de l'utilisateur

  useEffect(() => {
    const fetchCartFromDB = async () => {
      try {
        const products = await getCartFromDB();
        setProducts(products);
      } catch (error) {
        console.error("Erreur lors du chargement du panier :", error);
      }
    };
    fetchCartFromDB();
  }, []);
  const addToCart = async (product: ICoffee | ICoffeegrain | ICoffeemoulu) => {
    try {
      // ajouter le produit au panier dans la base de donnees
      await addToCartDB(product.id, 1, product.prix);
      // Recharger le panier depuis la base de données pour être synchronisé
      const updatedProducts = await getCartFromDB();
      setProducts(updatedProducts);
    } catch (error) {
      console.error("Erreur lors de l'ajout du produit au panier", error);
    }
  };

  // pour decrementer la quantite d'un produit dans le panier
  const decrementquantity = async (id: number) => {
    const product = products.find(p => p.id === id);
    if (!product) return;

    const newCartQuantity = (product.quantityInCart || 0) - 1;
    try {
      await updateCartItemQuantity(id, newCartQuantity);
      // Recharger le panier depuis la base de données pour être synchronisé
      const updatedProducts = await getCartFromDB();
      setProducts(updatedProducts);
    } catch (error) {
      console.error("Erreur lors de la décrémentation de la quantité", error);
    }
  };
  // pour incrementer la quantite d'un produit dans le panier
  const incrementquantity = async (id: number) => {
    const product = products.find(p => p.id === id);
    if (!product) return;

    const newCartQuantity = (product.quantityInCart || 0) + 1;
    try {
      await updateCartItemQuantity(id, newCartQuantity);
      // Recharger le panier depuis la base de données pour être synchronisé
      const updatedProducts = await getCartFromDB();
      setProducts(updatedProducts);
    } catch (error) {
      console.error("Erreur lors de l'incrémentation de la quantité", error);
    }
  };
  // pour supprimer un produit du panier
  const removeitem = async (id: number) => {
    try {
      await removeFromCartDB(id);
      // Recharger le panier depuis la base de données pour être synchronisé
      const updatedProducts = await getCartFromDB();
      setProducts(updatedProducts);
    } catch (error) {
      console.error("Erreur lors de la suppression du produit", error);
    }
  };
  // retourner les produits du panier
  return <ProductContext.Provider value={{ products, addToCart, decrementquantity, incrementquantity, removeitem, setCarte: setProducts }}>{children}</ProductContext.Provider>;
};
// fonction pour recuperer le panier de l'utilisateur
export const useProduct = () => {
  const context = useContext(ProductContext);
  if (!context) {
    throw new Error("useProduct must be used within a ProductProvider");
  }
  return context;
};

