import { PokemonCard } from "@/app/components/PokemonCard";
import { PokemonResponse } from "@/app/pokemons/interfaces/response";
import { SinglePokemon } from "@/app/pokemons/interfaces/single-pokemon";

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
  const data = await getPokemons();
  return (
    <div className="flex flex-wrap justify-center items-center gap-4 p-4">
      {data.map((pokemon) => (
        <PokemonCard key={pokemon.id} {...pokemon} />
      ))}
    </div>
  );
}
