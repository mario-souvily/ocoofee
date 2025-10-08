"use client";

import { IInscription } from "@/@types";
import { postInscription } from "@/app/action/inscription";
import { useState } from "react";

export default function Inscription() {
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const [success, setSuccess] = useState<string | null>(null);

  const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    setError(null);
    setSuccess(null);
    setLoading(true);

    const formData = new FormData(event.currentTarget);
    const data = Object.fromEntries(formData) as unknown as IInscription;

    try {
      const result = await postInscription(data);
      if (!result.ok) {
        throw new Error(result.message);
      }
      setSuccess(result.message);
      (event.currentTarget as HTMLFormElement).reset();
    } catch (e: unknown) {
      if (e instanceof Error) {
        setError(e.message);
      } else {
        setError("Une erreur inattendue est survenue");
      }
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="max-w-md mx-auto p-6 bg-white rounded-lg shadow">
      <h1 className="text-2xl font-bold text-amber-600 mb-4">Inscription</h1>

      {error && <div className="mb-4 text-red-600 text-sm">{error}</div>}
      {success && <div className="mb-4 text-green-700 text-sm">{success}</div>}

      <form onSubmit={handleSubmit} className="space-y-4">
        <div className="flex flex-col">
          <label htmlFor="prenom" className="mb-1 text-sm font-medium">Prénom</label>
          <input
            type="text"
            id="prenom"
            name="prenom"
            required
            className="border-2 border-gray-300 rounded-md p-2"
            placeholder="Prénom"
          />
        </div>

        <div className="flex flex-col">
          <label htmlFor="nom" className="mb-1 text-sm font-medium">Nom</label>
          <input
            type="text"
            id="nom"
            name="nom"
            required
            className="border-2 border-gray-300 rounded-md p-2"
            placeholder="Nom"
          />
        </div>

        <div className="flex flex-col">
          <label htmlFor="email" className="mb-1 text-sm font-medium">Email</label>
          <input
            type="email"
            id="email"
            name="email"
            required
            className="border-2 border-gray-300 rounded-md p-2"
            placeholder="email@example.com"
          />
        </div>

        <div className="flex flex-col">
          <label htmlFor="pass" className="mb-1 text-sm font-medium">Mot de passe</label>
          <input
            type="password"
            id="pass"
            name="pass"
            required
            className="border-2 border-gray-300 rounded-md p-2"
            placeholder="******"
          />
        </div>

        <button
          type="submit"
          disabled={loading}
          className="bg-amber-600 hover:bg-amber-700 disabled:opacity-60 text-white rounded-md p-2 w-full"
        >
          {loading ? "En cours..." : "Inscription"}
        </button>
      </form>
    </div>
  );
}
