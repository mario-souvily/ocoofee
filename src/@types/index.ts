export interface ICoffeegrain {
  id: number;
  nom: string;
  type: string;
  origine: string;
  quantite: string;
  description: string;
  prix: number;
  image: string;
  quantityInCart?: number; // Quantité dans le panier
}

export interface ICoffeemoulu {
  id: number;
  nom: string;
  type: string;
  origine: string;
  quantite: string;
  description: string;
  prix: number;
  image: string;
  quantityInCart?: number; // Quantité dans le panier
}
export interface ICoffee {
  id: number;
  nom: string;
  type: string;
  origine: string;
  quantite: string;
  description: string;
  prix: number;
  image: string;
  categorie: string;
  quantityInCart?: number; // Quantité dans le panier
}

export interface IUser {
  id: number;
  prenom: string;
  nom: string;
  email: string;
  clerkId: string;
  role: boolean;
  createdAt: Date;
  updatedAt: Date;
}
export interface IInscription {
  prenom: string;
  nom: string;
  email: string;
  username?: string;
  password: string;
}
export interface ILogin {
  email: string;
  password: string;
}
