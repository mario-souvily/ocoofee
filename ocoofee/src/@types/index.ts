export interface ICoffeegrain {
  id: number;
  nom: string;
  type: string;
  origine: string;
  quantite: string;
  description: string;
  prix: number;
  image: string;
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
  clerkId: string;
}
export interface ILogin {
  email: string;
  clerkId: string;
}
