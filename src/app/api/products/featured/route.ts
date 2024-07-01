import data from "../data.json";

export async function GET() {
  try {
    await new Promise((resolve) => setTimeout(resolve, 1000));

    const featuredProducts = data.products.filter(
      (product) => product.featured
    );

    return new Response(JSON.stringify(featuredProducts), {
      headers: { "Content-Type": "application/json" },
    });
  } catch (error) {
    return new Response(JSON.stringify({ message: error.message }), {
      status: 500,
      headers: { "Content-Type": "application/json" },
    });
  }
}
