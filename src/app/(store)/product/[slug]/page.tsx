import { Metadata } from "next";
import Image from "next/image";
import { AddToCartButton } from "@/components/add-to-cart-button";
import { api } from "@/data/api";
import { Product } from "@/data/types/product";

interface ProductProps {
  params: {
    slug: string;
  };
}

async function getProduct(slug: string): Promise<Product> {
  const response = await api(`/products/${slug}`, {
    next: {
      revalidate: 60 * 60, // 1 hour
    },
  });

  const product = await response.json();

  return product;
}

export async function generateMetadata({
  params,
}: ProductProps): Promise<Metadata> {
  const product = await getProduct(params.slug);

  return {
    title: product.title,
  };
}

export async function generateStaticParams() {
  const response = await api("/products/featured");
  const products: Product[] = await response.json();

  return products.map((product) => {
    return { slug: product.slug };
  });
}

export default async function ProductPage({ params }: ProductProps) {
  const product = await getProduct(params.slug);

  return (
    <div className="relative justify-center p-8">
      {product.title && (
        <div className="grid grid-cols-3 items-center justify-center m-auto max-w-[1000px] max-h-[860px]">
          <div className="col-span-2 overflow-hidden">
            <Image
              src={product.image}
              alt=""
              width={600}
              height={600}
              quality={100}
            />
          </div>

          <div className="flex flex-col justify-center">
            <h1 className="text-4xl font-bold leading-tight text-amber-500">
              {product.title}
            </h1>

            <p className="mt-2 mb-4 leading-relaxed text-zinc-800">
              {product.description}
            </p>

            <div className="mt-2 flex gap-x-2">
              <span className="text-lg font-bold">Abv</span>
              <span className="text-lg text-zinc-800">{product.abv}</span>
            </div>

            <div className="mt-2 flex gap-x-2">
              <span className="text-lg font-bold">Size</span>
              <span className="text-lg text-zinc-800">{product.size}</span>
            </div>

            <div className="mt-2 flex gap-x-2">
              <span className="text-lg font-bold">Brewery</span>
              <span className="text-lg text-zinc-800">{product.brewery}</span>
            </div>

            <div className="mt-2 flex gap-x-2">
              <span className="text-lg font-bold">Type</span>
              <span className="text-lg text-zinc-800">{product.type}</span>
            </div>

            <span className="mt-4 inline-block text-2xl py-2.5 font-bold text-amber-500">
              {product.price.toLocaleString("en-GB", {
                style: "currency",
                currency: "GBP",
                minimumFractionDigits: 0,
                maximumFractionDigits: 0,
              })}
            </span>

            <div className="flex gap-x-2 w-full justify-between">
              <AddToCartButton productId={product.id} />
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
