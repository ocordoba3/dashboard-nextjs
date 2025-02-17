import Image from "next/image";
import React from "react";
import { SinglePokemon } from "../pokemons/interfaces/single-pokemon";

export const PokemonCard = ({ name, id }: SinglePokemon) => {
  return (
    <div className="flex flex-col text-gray-700 bg-white shadow-md bg-clip-border rounded-xl w-[200px]">
      <div className="mx-4 mt-4 overflow-hidden text-gray-700 bg-white bg-clip-border rounded-xl flex flex-wrap justify-center min-h-[130px]">
        <Image
          className="h-[100px]"
          width={100}
          height={100}
          src={`https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/dream-world/${id}.svg`}
          alt={`${name} picture`}
        />
        <p className="py-4 block font-sans text-base antialiased font-medium leading-relaxed text-blue-gray-900 capitalize text-center w-full">
          {name}
        </p>
      </div>

      <button
        className="bg-blue-400 text-white align-middle select-none font-bold text-center uppercase transition-all disabled:opacity-50 disabled:shadow-none disabled:pointer-events-none text-xs py-3 px-6 rounded-lg hover:shadow-gray-900/10 focus:opacity-[0.85] active:opacity-[0.85] active:shadow-none block w-full bg-blue-gray-900/10 text-blue-gray-900 hover:scale-105 hover:shadow-none focus:scale-105 focus:shadow-none active:scale-100"
        type="button"
      >
        Go to detail
      </button>
    </div>
  );
};
