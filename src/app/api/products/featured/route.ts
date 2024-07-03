export async function GET() {
  try {
    const response = await fetch(`${env.APP_URL}/products/featured`);
    const featuredProducts = await response.json();

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
