"use client";

import { useCart } from "@/contexts/cart-context";

export interface AddToCartButtonProps {
  productId: number;
}

export function AddToCartButton({ productId }: AddToCartButtonProps) {
  const { addToCart } = useCart();

  function handleAddProductToCart() {
    addToCart(productId);
  }

  return (
    <button
      type="button"
      className="mt-8 flex h-12 w-2/3 items-center justify-center rounded-md bg-red-800 text-white font-bold"
      onClick={handleAddProductToCart}
    >
      Add to Cart
    </button>
  );
}
