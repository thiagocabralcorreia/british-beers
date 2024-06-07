"use client";
import { useState } from "react";

export function Counter() {
  const [count, setCount] = useState<number>(0);

  const increment = () => setCount((prevCount) => prevCount + 1);
  const decrement = () => setCount((prevCount) => Math.max(prevCount - 1, 0));

  return (
    <div className="mt-8 flex h-12 px-4 w-1/3 items-center justify-between rounded-md bg-sky-950 font-semibold text-white">
      <button type="button" onClick={decrement}>
        -
      </button>
      <p className="font-bold">{count}</p>
      <button type="button" onClick={increment}>
        +
      </button>
    </div>
  );
}
