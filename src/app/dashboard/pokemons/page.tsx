import { PokemonCard } from "@/pokemons/components/PokemonCard";
import { PokemonResponse } from "@/pokemons/interfaces/response";
import { SinglePokemon } from "@/pokemons/interfaces/single-pokemon";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Lista de pókemones",
  description: "Está es la lista de los principales pókemones",
};

async function getPokemons(limit = 20, offset = 0): Promise<SinglePokemon[]> {
  const data: PokemonResponse = await fetch(
    `https://pokeapi.co/api/v2/pokemon?limit=${limit}&offset=${offset}`
  )
    .then((resp) => resp.json())
    .catch((reason) => console.error(reason));

  const pokemons = data.results.map((pokemon) => ({
    id: Number(pokemon.url.split("/").at(-2)),
    name: pokemon.name,
  }));
  return pokemons;
}

export default async function PokemonsPage() {
  const data = await getPokemons(48);
  return (
    <div className="flex flex-wrap justify-between items-center gap-4 p-4">
      <h1 className="text-3xl font-bold w-full">Listado de Pókemones</h1>
      {data.map((pokemon) => (
        <PokemonCard key={pokemon.id} {...pokemon} />
      ))}
    </div>
  );
}
