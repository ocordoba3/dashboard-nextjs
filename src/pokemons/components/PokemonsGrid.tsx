import React from "react";
import { PokemonCard } from "./PokemonCard";
import Image from "next/image";
import { SinglePokemon } from "../interfaces/single-pokemon";

interface Props {
  pokemons: SinglePokemon[];
}

export const PokemonsGrid = ({ pokemons }: Props) => {
  return (
    <>
      {pokemons.length > 0 ? (
        <div className="mt-4 w-full grid gap-4 grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5">
          {pokemons.map((pokemon) => (
            <PokemonCard key={pokemon.id} {...pokemon} />
          ))}
        </div>
      ) : (
        <div className="w-full h-[80vh] flex flex-col items-center justify-center">
          <Image
            width={300}
            height={300}
            src="/images/pokebola.jpg"
            alt="Pokebola vacía"
            priority={false}
          />
          <h1 className="w-full text-2xl uppercase font-bold text-center">
            No hay Pokemones
          </h1>
        </div>
      )}
    </>
  );
};
