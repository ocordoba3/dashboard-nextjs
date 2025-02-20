import { PokemonCard } from "@/pokemons/components/PokemonCard";
import { PokemonResponse } from "@/pokemons/interfaces/response";
import { SinglePokemon } from "@/pokemons/interfaces/single-pokemon";
import { Metadata } from "next";
import Link from "next/link";
import { GrFavorite } from "react-icons/gr";

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
      <div className="flex w-full justify-between gap-x-2">
        <h1 className="text-3xl font-bold w-3/4">Listado de Pókemones</h1>
        <Link
          href={`/dashboard/pokemons/favorites`}
          className="flex items-center w-auto bg-red-400 text-white align-middle select-none font-bold text-center uppercase text-xs py-3 px-6 rounded-lg hover:bg-red-700"
        >
          <GrFavorite
            size={20}
            color="white"
            strokeWidth={1}
            className="mr-2"
          />
          Favorites
        </Link>
      </div>
      {data.map((pokemon) => (
        <PokemonCard key={pokemon.id} {...pokemon} />
      ))}
    </div>
  );
}
