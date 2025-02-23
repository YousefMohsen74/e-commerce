"use client";

import { useState, useEffect } from "react";
import { addToCart } from "@/actions/local-storage-actions";
import Link from "next/link";

export default function AddToCartButton({ product }) {
  const [inCart, setInCart] = useState(false);

  useEffect(() => {
    // Check if product is already in the cart
    const storedProducts = localStorage.getItem("cartProducts");
    if (storedProducts) {
      const products = JSON.parse(storedProducts);
      setInCart(products.some((p) => p.id === product.id));
    }

    // Update state when the cart is modified
    const updateCartStatus = () => {
      const updatedCart = localStorage.getItem("cartProducts");
      if (updatedCart) {
        const products = JSON.parse(updatedCart);
        setInCart(products.some((p) => p.id === product.id));
      } else {
        setInCart(false);
      }
    };

    window.addEventListener("cartUpdated", updateCartStatus);
    return () => window.removeEventListener("cartUpdated", updateCartStatus);
  }, [product.id]);

  const handleClick = () => {
    addToCart(product);
  };

  return (
    <button
      className="w-full bg-black text-white rounded-lg h-10 flex justify-center items-center transition-all duration-300"
      onClick={handleClick}
      disabled={inCart} // Prevent multiple adds
    >
      {inCart ? (
        <Link href={"/cart"}>&#x2713; View in Cart</Link>
      ) : (
        "Add to Cart"
      )}
    </button>
  );
}
