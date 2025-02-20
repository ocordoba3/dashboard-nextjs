import Image from "next/image";
import React from "react";
import { SinglePokemon } from "../interfaces/single-pokemon";
import Link from "next/link";
import { GrFavorite } from "react-icons/gr";

export const PokemonCard = ({ name, id }: SinglePokemon) => {
  return (
    <div className="relative flex flex-col text-gray-700 bg-white shadow-md bg-clip-border rounded-xl w-[200px] transition-all hover:scale-105">
      <div className="absolute right-4 top-2 cursor-pointer">
        <GrFavorite size={20} color="gray" strokeWidth={1} />
      </div>
      <div className="mx-4 mt-4 overflow-hidden text-gray-700 bg-white bg-clip-border rounded-xl flex flex-wrap justify-center min-h-[130px]">
        <Image
          width={100}
          height={100}
          src={`https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/dream-world/${id}.svg`}
          alt={`${name} picture`}
          priority={false}
          style={{ height: "100px", width: "100px" }}
        />
        <p className="py-4 block font-sans text-base antialiased font-medium leading-relaxed text-blue-gray-900 capitalize text-center w-full">
          {name}
        </p>
      </div>

      <Link
        href={`/dashboard/pokemon/${id}`}
        className="bg-blue-400 text-white align-middle select-none font-bold text-center uppercase text-xs py-3 px-6 rounded-b-lg hover:bg-blue-700 block w-full text-blue-gray-900 "
      >
        Go to detail
      </Link>
    </div>
  );
};
