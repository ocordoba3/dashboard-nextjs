import { PokemonCard } from "@/pokemons/components/PokemonCard";
import { SinglePokemon } from "@/pokemons/interfaces/single-pokemon";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Lista de pókemones",
  description: "Está es la lista de los principales pókemones",
};

function getFavPokemons(): SinglePokemon[] {
  return [];
}

export default async function PokemonsPage() {
  const data = getFavPokemons();
  return (
    <div className="flex flex-wrap justify-between items-center gap-4 p-4">
      <h1 className="text-3xl font-bold w-full">Pókemones Favoritos</h1>
      {data.map((pokemon) => (
        <PokemonCard key={pokemon.id} {...pokemon} />
      ))}
    </div>
  );
}
