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
    if (product.availabilityStatus === "In Stock") {
      addToCart(product);
    }
  };

  const isDisabled = inCart || product.availabilityStatus !== "In Stock";

  return (
    <button
      className={`w-full rounded-lg h-10 flex justify-center items-center transition-all duration-300 ${
        isDisabled ? "bg-gray-400 cursor-not-allowed" : "bg-black text-white"
      }`}
      onClick={handleClick}
      disabled={isDisabled} // Prevent multiple adds & out-of-stock items
    >
      {inCart ? (
        <Link href={"/cart"}>&#x2713; View in Cart</Link>
      ) : product.availabilityStatus !== "In Stock" ? (
        "Out of Stock"
      ) : (
        "Add to Cart"
      )}
    </button>
  );
}
