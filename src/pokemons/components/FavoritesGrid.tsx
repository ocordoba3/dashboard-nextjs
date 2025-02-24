"use client";

import React from "react";
import { PokemonCard } from "./PokemonCard";
import { useAppSelector } from "@/store";

export const FavoritesGrid = () => {
  const favorites = useAppSelector((state) => state.pokemons.favorites);

  return (
    <>
      {favorites.map((pokemon) => (
        <PokemonCard key={pokemon.id} {...pokemon} />
      ))}
    </>
  );
};
