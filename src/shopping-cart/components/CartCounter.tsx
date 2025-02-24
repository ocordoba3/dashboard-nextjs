"use client";

import { useAppDispatch, useAppSelector } from "@/store";
import { decrement, increment, initCounterState } from "@/store/counter";
import { useEffect } from "react";

async function getCounter(): Promise<{
  counter: number;
  message: string;
}> {
  const data = await fetch("/api/counter").then((resp) => resp.json());
  return data;
}

export const CartCounter = () => {
  const { value } = useAppSelector((state) => state.counter);
  const dispatch = useAppDispatch();

  useEffect(() => {
    getCounter().then(({ counter }) => dispatch(initCounterState(counter)));
  }, [dispatch]);

  return (
    <>
      <span className="text-5xl font-bold">{value}</span>
      <div className="flex">
        <button
          onClick={() => dispatch(decrement())}
          className="rounded-xl bg-red-900 hover:bg-red-700 p-2 transition-all text-white flex items-center justify-center mx-1 w-[80px]"
        >
          -1
        </button>
        <button
          onClick={() => dispatch(increment())}
          className="rounded-xl bg-blue-900 hover:bg-blue-700 p-2 transition-all text-white flex items-center justify-center mx-1 w-[80px]"
        >
          +1
        </button>
      </div>
    </>
  );
};
