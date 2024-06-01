import { z } from "zod";

import data from "../data.json";

export async function GET(
  _: Request,
  { params }: { params: { slug: string } }
) {
  await new Promise((resolve) => setTimeout(resolve, 1000));

  // parse when you want immediate validation and
  // want the application to fail if the data is not valid.
  const slug = z.string().parse(params.slug);

  const product = data.products.find((product) => product.slug === slug);

  if (!product) {
    return Response.json({ message: "Product not found." }, { status: 400 });
  }

  return Response.json(product);
}
