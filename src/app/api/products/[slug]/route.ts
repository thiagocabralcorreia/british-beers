import { z } from "zod";

export async function GET(
  _: Request,
  { params }: { params: { slug: string } }
) {
  try {
    // parse when you want immediate validation and
    // want the application to fail if the data is not valid.    const slug = z.string().parse(params.slug);
    const response = await fetch(`${env.APP_URL}/products/${slug}`);
    const product = await response.json();

    if (!product) {
      return new Response(JSON.stringify({ message: "Product not found." }), {
        status: 400,
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
