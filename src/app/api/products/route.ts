export async function GET() {
  try {
    const response = await fetch(`${process.env.APP_URL}/products`);
    const products = await response.json();

    return new Response(JSON.stringify(products), {
      headers: { "Content-Type": "application/json" },
    });
  } catch (error) {
    return new Response(JSON.stringify({ message: error.message }), {
      status: 500,
      headers: { "Content-Type": "application/json" },
    });
  }
}
