import { api } from "@/data/api";
import { Product } from "@/data/types/product";
import { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";

async function getFeaturedProducts(): Promise<Product[]> {
  const response = await api("/products/featured", {
    next: {
      revalidate: 1, // 1 hour
    },
  });
  const products = await response.json();

  return products;
}

export const metadata: Metadata = {
  title: "Home",
};

export default async function Home() {
  const [highlightedProduct, ...otherProducts] = await getFeaturedProducts();

  return (
    <div className="grid max-h-[860px] grid-cols-9 grid-rows-6 gap-6 px-8">
      <Link
        href={`/product/${highlightedProduct.slug}`}
        className="group relative col-span-6 row-span-6 rounded-lg bg-zinc-100 overflow-hidden flex justify-center items-end"
      >
        <Image
          src={highlightedProduct.image}
          alt=""
          className="group-hover:scale-105 transition-transform duration-500"
          width={800}
          height={800}
          quality={100}
        />

        <div className="absolute bottom-28 right-48 h-12 flex items-center gap-4 max-w-[280px] rounded-md border-2 border-amber-500 bg-white p-1 pl-5">
          <span className="text-sm truncate">{highlightedProduct.title}</span>
          <span className="flex h-full items-center justify-center rounded-sm bg-red-800  text-white  px-4 font-semibold">
            {highlightedProduct.price.toLocaleString("en-GB", {
              style: "currency",
              currency: "GBP",
              minimumFractionDigits: 0,
              maximumFractionDigits: 0,
            })}
          </span>
        </div>
      </Link>

      {otherProducts.map((product) => {
        return (
          <>
            <Link
              key={product.id}
              href={`/product/${product.slug}`}
              className="group relative col-span-3 row-span-3 rounded-lg bg-zinc-100 overflow-hidden flex justify-center items-end"
            >
              <Image
                src={product.image}
                className="group-hover:scale-105 transition-transform duration-500"
                width={400}
                height={400}
                quality={100}
                alt=""
              />

              <div className="absolute bottom-10 right-10 h-12 flex items-center gap-4 max-w-[280px] rounded-md border-2 border-amber-500 bg-white p-1 pl-5">
                <span className="text-sm truncate">{product.title}</span>
                <span className="flex h-full items-center justify-center rounded-sm bg-red-800  text-white  px-4 font-semibold">
                  {product.price.toLocaleString("en-GB", {
                    style: "currency",
                    currency: "GBP",
                    minimumFractionDigits: 0,
                    maximumFractionDigits: 0,
                  })}
                </span>
              </div>
            </Link>
          </>
        );
      })}
    </div>
  );
}
