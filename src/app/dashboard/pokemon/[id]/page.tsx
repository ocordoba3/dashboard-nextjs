import { PokemonDetail } from "@/pokemons/interfaces/detail";
import { LinkBackwardFreeIcons } from "@hugeicons/core-free-icons";
import { HugeiconsIcon } from "@hugeicons/react";
import { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";

interface Props {
  params: { id: string };
}

async function getPokemonById(id: string): Promise<PokemonDetail> {
  const resp = await fetch(`https://pokeapi.co/api/v2/pokemon/${id}`)
    .then((resp) => resp.json())
    .catch(() => notFound());

  return resp;
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { id: reqId } = await params;
  const { name, id } = await getPokemonById(reqId);
  const transformedName = name
    .toLowerCase()
    .replace(/\b\w/g, (char) => char.toUpperCase());
  return {
    title: `${id} - ${transformedName}`,
    description: `Pagina de ${transformedName}`,
  };
}

export default async function PokemonPage({ params }: Props) {
  const { id } = await params;
  const pokemon = await getPokemonById(id);
  return (
    <div className="relative flex flex-wrap justify-between text-slate-800 h-full">
      <Link className="absolute top-2 left-2" href="/dashboard/pokemons">
        <HugeiconsIcon
          icon={LinkBackwardFreeIcons}
          size={20}
          color="currentColor"
          strokeWidth={1}
        />
      </Link>
      <div className="mt-2 mb-8 w-1/2 h-full flex flex-wrap justify-center items-center">
        {/* Name */}
        <h1 className="px-2 text-3xl font-bold text-slate-700 capitalize flex items-center w-full justify-center">
          {pokemon.name}{" "}
          <span className="text-lg text-slate-500 ml-2">({pokemon.id})</span>
        </h1>
        {/* Main image */}
        <div className="flex flex-col justify-center items-center">
          <Image
            src={pokemon.sprites.other?.dream_world.front_default ?? ""}
            width={350}
            height={350}
            alt={`Imagen del pokemon ${pokemon.name}`}
            className="mb-5"
            style={{ height: "350px", width: "350px" }}
          />

          <div className="flex flex-wrap gap-x-4">
            {pokemon.abilities.map((ability) => (
              <div
                key={ability.ability.name}
                className="center relative inline-block select-none whitespace-nowrap rounded-lg bg-blue-500 py-2 px-3.5 align-baseline font-sans text-xs font-bold uppercase leading-none text-white"
              >
                <div className="mt-px capitalize">{ability.ability.name}</div>
              </div>
            ))}
          </div>
        </div>
      </div>
      <div className="flex flex-wrap items-center gap-4 w-1/2 h-full">
        <div className="w-full h-fit flex flex-wrap rounded-2xl bg-white bg-clip-border px-3 py-4 drop-shadow-lg">
          <p className="text-sm font-bold text-gray-800 mb-2 w-full">Types</p>
          <div className="flex gap-x-4">
            {pokemon.types.map((type) => (
              <div
                key={type.type.name}
                className="center relative inline-block select-none whitespace-nowrap rounded-lg bg-amber-500 py-2 px-3.5 align-baseline font-sans text-xs font-bold uppercase leading-none text-white"
              >
                <div className="mt-px capitalize">{type.type.name}</div>
              </div>
            ))}
          </div>
        </div>

        <div className="w-full h-fit flex flex-wrap rounded-2xl bg-white bg-clip-border px-3 py-4 drop-shadow-lg">
          <p className="text-sm font-bold text-gray-800 mb-2 w-full">Peso</p>
          <span className="text-base font-medium text-navy-700 flex">
            {pokemon.weight} kg
          </span>
        </div>

        <div className="w-full h-fit flex flex-wrap rounded-2xl bg-white bg-clip-border px-3 py-4 drop-shadow-lg">
          <p className="text-sm font-bold text-gray-800 mb-2 w-full">
            Regular Sprites
          </p>
          <div className="flex justify-center w-full">
            <Image
              src={pokemon.sprites.front_default}
              width={100}
              height={100}
              alt={`sprite ${pokemon.name}`}
            />

            <Image
              src={pokemon.sprites.back_default}
              width={100}
              height={100}
              alt={`sprite ${pokemon.name}`}
            />
          </div>
        </div>

        <div className="w-full h-fit flex flex-wrap rounded-2xl bg-white bg-clip-border px-3 py-4 drop-shadow-lg">
          <p className="text-sm font-bold text-gray-800 mb-2 w-full">
            Shiny Sprites
          </p>
          <div className="flex justify-center w-full">
            <Image
              src={pokemon.sprites.front_shiny}
              width={100}
              height={100}
              alt={`sprite ${pokemon.name}`}
            />

            <Image
              src={pokemon.sprites.back_shiny}
              width={100}
              height={100}
              alt={`sprite ${pokemon.name}`}
            />
          </div>
        </div>
      </div>
    </div>
  );
}
