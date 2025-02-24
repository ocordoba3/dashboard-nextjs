"use client";

import { useAppSelector } from "@/store";
import { PokemonsGrid } from "./PokemonsGrid";

export const FavoritesGrid = () => {
  const favorites = useAppSelector((state) => state.pokemons.favorites);

  return <PokemonsGrid pokemons={favorites} />;
};
