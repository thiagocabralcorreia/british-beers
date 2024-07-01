import { z } from "zod";
import data from "../data.json";

export async function GET(
  request: Request,
  { params }: { params: { slug: string } }
) {
  try {
    await new Promise((resolve) => setTimeout(resolve, 1000));

    // parse when you want immediate validation and
    // want the application to fail if the data is not valid.
    const slug = z.string().parse(params.slug);
    const product = data.products.find((product) => product.slug === slug);

    if (!product) {
      return new Response(JSON.stringify({ message: "Product not found." }), {
        status: 404,
        headers: { "Content-Type": "application/json" },
      });
    }

    return new Response(JSON.stringify(product), {
      headers: { "Content-Type": "application/json" },
    });
  } catch (error) {
    return new Response(JSON.stringify({ message: error.message }), {
      status: 500,
      headers: { "Content-Type": "application/json" },
    });
  }
}
