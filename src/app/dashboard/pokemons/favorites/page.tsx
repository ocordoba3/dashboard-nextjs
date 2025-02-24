import { FavoritesGrid } from "@/pokemons/components/FavoritesGrid";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Tus favoritos",
  description: "Está es la lista de tus pókemones favoritos",
};

export default function PokemonsPage() {
  return (
    <div className="flex flex-wrap justify-between items-center p-4">
      <h1 className="text-3xl font-bold w-full">Pókemones Favoritos</h1>
      <FavoritesGrid />
    </div>
  );
}
