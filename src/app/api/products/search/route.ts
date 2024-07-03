import { z } from "zod";
import type { NextRequest } from "next/server";

import data from "../data.json";

export async function GET(request: NextRequest) {
  await new Promise((resolve) => setTimeout(resolve, 1000));

  const { searchParams } = request.nextUrl;

  const query = z.string().parse(searchParams.get("q")); // q = query

  const products = data.products.filter((product) => {
    return product.title
      .toLocaleLowerCase()
      .includes(query.toLocaleLowerCase());
  });

  return Response.json(products);
}

// Exemplo de uso do APP_URL
console.log(process.env.APP_URL);
