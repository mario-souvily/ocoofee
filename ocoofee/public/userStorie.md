# User Stories - Application Ocoofee

## 🧑‍💼 **Stories Utilisateur (Role: User)**

### **Gestion du Compte**

| En tant que | Je veux                                                     | Afin de                        |
| ----------- | ----------------------------------------------------------- | ------------------------------ |
| utilisateur | créer un compte avec mon prénom, nom, email et mot de passe | accéder à l'application        |
| utilisateur | me connecter avec mon email et mot de passe                 | accéder à mon espace personnel |
| utilisateur | modifier mes informations personnelles (prénom, nom, email) | maintenir mes données à jour   |
| utilisateur | changer mon mot de passe                                    | sécuriser mon compte           |
| utilisateur | supprimer mon compte                                        | supprimer mon compte           |

### **Catalogue des Cafés**

| En tant que | Je veux                                                | Afin de                            |
| ----------- | ------------------------------------------------------ | ---------------------------------- | ----------- | --------------------------------------------------- | ----------------------- |
| utilisateur | consulter le catalogue des cafés en grains             | découvrir les différentes variétés |
| utilisateur | consulter le catalogue des cafés moulus                | voir les options prêtes à l'emploi | utilisateur | filtrer les cafés par type (Arabica, Robusta, etc.) | trouver ce qui me plaît |
| utilisateur | filtrer les cafés par origine (Brésil, Colombie ..)    | découvrir de nouvelles saveurs     |
| utilisateur | voir les détails d'un café (description, prix, image,) | faire un choix éclairé             |
| utilisateur | rechercher un café par nom                             | le retrouver rapidement            |

### **Gestion du Panier et Commandes**

| En tant que | Je veux                                                    | Afin de                             |
| ----------- | ---------------------------------------------------------- | ----------------------------------- |
| utilisateur | ajouter des cafés en grains à mon panier                   | les acheter                         |
| utilisateur | ajouter des cafés moulus à mon panier                      | les acheter                         |
| utilisateur | supprimer un article de mon panier                         | changer d'avis                      |
| utilisateur | voir le total de ma commande                               | la valider en connaissance de cause |
| utilisateur | passer ma commande en fournissant mon adresse de livraison | recevoir mes cafés                  |
| utilisateur | recevoir une confirmation de ma commande par email         | avoir une trace de mon achat        |
| utilisateur | consulter l'historique de mes commandes                    | suivre mes achats                   |

## 👑 **Stories Administrateur (Role: Admin)**

### **Gestion des Produits**

| En tant que    | Je veux                                                              | Afin de                       |
| -------------- | -------------------------------------------------------------------- | ----------------------------- |
| administrateur | ajouter un nouveau café en grains au catalogue avec tous ses détails | enrichir l'offre              |
| administrateur | ajouter un nouveau café moulu au catalogue avec tous ses détails     | enrichir l'offre              |
| administrateur | modifier les informations d'un café existant (prix, description..)   | maintenir le catalogue à jour |
| administrateur | supprimer un café du catalogue                                       | s'il n'est plus disponible    |
| administrateur | uploader des images pour chaque café                                 | améliorer la présentation     |

### **Gestion des Utilisateurs**

| En tant que    | Je veux                                         | Afin de               |
| -------------- | ----------------------------------------------- | --------------------- |
| administrateur | voir la liste de tous les utilisateurs inscrits | gérer la communauté   |
| administrateur | modifier le rôle d'un utilisateur (user/admin)  | gérer les permissions |
| administrateur | désactiver le compte d'un utilisateur           | si nécessaire         |

## 🔧 **Stories Techniques**

### **Performance et UX**

| En tant que | Je veux                                                 | Afin de                        |
| ----------- | ------------------------------------------------------- | ------------------------------ |
| utilisateur | que l'application se charge rapidement                  | avoir une expérience fluide    |
| utilisateur | que l'application soit responsive sur mobile et desktop | l'utiliser partout             |
| utilisateur | que mes données soient sauvegardées automatiquement     | ne pas perdre mes informations |

### **Sécurité**

| En tant que | Je veux                                            | Afin de                 |
| ----------- | -------------------------------------------------- | ----------------------- |
| utilisateur | que mes informations personnelles soient protégées | préserver ma vie privée |
| utilisateur | que mes mots de passe soient chiffrés              | sécuriser mon compte    |
| utilisateur | que mes sessions soient sécurisées                 | éviter les intrusions   |

---

## **Fonctionnalités Futures**

### **Personnalisation**

| En tant que | Je veux                                     | Afin de                      |
| ----------- | ------------------------------------------- | ---------------------------- |
| utilisateur | créer une liste de favoris                  | retrouver mes cafés préférés |
| utilisateur | recevoir des recommandations personnalisées | basées sur mes achats        |

### **Social**

| En tant que | Je veux                                                  | Afin de                           |
| ----------- | -------------------------------------------------------- | --------------------------------- |
| utilisateur | laisser des avis et notes sur les cafés que j'ai achetés | partager mon expérience           |
| utilisateur | partager mes découvertes sur les réseaux sociaux         | faire découvrir de nouveaux cafés |

### **Fidélité**

| En tant que | Je veux                                      | Afin de                   |
| ----------- | -------------------------------------------- | ------------------------- |
| utilisateur | accumuler des points fidélité sur mes achats | bénéficier d'avantages    |
| utilisateur | bénéficier de réductions sur mes commandes   | économiser sur mes achats |

---

## 📊 **Résumé des Stories par Priorité**

| Priorité    | Nombre | Description                                                   |
| ----------- | ------ | ------------------------------------------------------------- |
| **Haute**   | 20     | Fonctionnalités core (authentification, catalogue, commandes) |
| **Moyenne** | 16     | Gestion admin et fonctionnalités avancées                     |
| **Basse**   | 12     | Fonctionnalités futures et améliorations UX                   |
