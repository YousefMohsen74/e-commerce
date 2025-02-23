// local-storage-actions.js
'use client'

import { revalidateCart } from "./api-actions";

function dispatchCartUpdatedEvent() {
    if (typeof window !== "undefined") {
        window.dispatchEvent(new Event("cartUpdated"));
    }
}

export function addToCart(product) {
    try {
        if (typeof window === "undefined") return;

        const storedProducts = localStorage.getItem("cartProducts");
        let products = [];

        if (storedProducts) {
            try {
                products = JSON.parse(storedProducts);
                if (!Array.isArray(products)) throw new Error("Invalid format");
            } catch (error) {
                console.error("Corrupted localStorage data, resetting cart:", error);
                products = [];
            }
        }

        const existingProductIndex = products.findIndex((p) => p.id === product.id);

        if (existingProductIndex !== -1) {
            products[existingProductIndex].quantity += 1;
        } else {
            products.push({ ...product, quantity: 1 });
        }

        localStorage.setItem("cartProducts", JSON.stringify(products));

        dispatchCartUpdatedEvent(); // Dispatch event after updating cart
        setTimeout(() => revalidateCart(), 0);
    } catch (error) {
        console.error("Error in addToCart:", error);
    }
}

export function increaseQuantity(productId) {
    try {
        if (typeof window === "undefined") return;

        const storedProducts = localStorage.getItem("cartProducts");
        if (!storedProducts) return;

        let products = JSON.parse(storedProducts);
        const productIndex = products.findIndex((p) => p.id === productId);

        if (productIndex !== -1) {
            products[productIndex].quantity += 1;
            localStorage.setItem("cartProducts", JSON.stringify(products));
            dispatchCartUpdatedEvent(); // Dispatch event after updating cart
        }

        setTimeout(() => revalidateCart(), 0);
    } catch (error) {
        console.error("Error in increaseQuantity:", error);
    }
}

export function decreaseQuantity(productId) {
    try {
        if (typeof window === "undefined") return;

        const storedProducts = localStorage.getItem("cartProducts");
        if (!storedProducts) return;

        let products = JSON.parse(storedProducts);
        const productIndex = products.findIndex((p) => p.id === productId);

        if (productIndex !== -1) {
            if (products[productIndex].quantity > 1) {
                products[productIndex].quantity -= 1;
                localStorage.setItem("cartProducts", JSON.stringify(products));
                dispatchCartUpdatedEvent(); // Dispatch event after updating cart
                setTimeout(() => revalidateCart(), 0);
            }
        }
    } catch (error) {
        console.error("Error in decreaseQuantity:", error);
    }
}

export function removeFromCart(productId) {
    try {
        if (typeof window === "undefined") return;

        const storedProducts = localStorage.getItem("cartProducts");
        if (!storedProducts) return;

        let products = JSON.parse(storedProducts);
        products = products.filter((product) => product.id !== productId);

        localStorage.setItem("cartProducts", JSON.stringify(products));

        console.log(`Product ${productId} removed. Updated cart:`, products);
        dispatchCartUpdatedEvent(); // Dispatch event after updating cart
        setTimeout(() => revalidateCart(), 0);
    } catch (error) {
        console.error("Error in removeFromCart:", error);
    }
}

export function getCartTotal() {
    try {
        if (typeof window === "undefined") return 0;

        const storedProducts = localStorage.getItem("cartProducts");
        if (!storedProducts) return 0;

        let products = JSON.parse(storedProducts);
        if (!Array.isArray(products)) return 0;

        const total = products.reduce((sum, product) => sum + (product.price * (product.quantity || 1)), 0);
        setTimeout(() => revalidateCart(), 0);
        return total.toFixed(2);
    } catch (error) {
        console.error("Error in getCartTotal:", error);
        return 0;
    }
}
export function clearCart() {
    return new Promise((resolve, reject) => {
      try {
        if (typeof window === "undefined") {
          resolve(); // Resolve immediately if not in the browser
          return;
        }
  
        localStorage.removeItem("cartProducts"); // Clear cart
        dispatchCartUpdatedEvent(); // Dispatch event after clearing cart
  
        // Use setTimeout to ensure revalidateCart runs after the current stack
        setTimeout(() => {
          revalidateCart(); // Revalidate cart
          resolve(); // Resolve the promise after revalidation
        }, 0);
      } catch (error) {
        console.error("Error in clearCart:", error);
        reject(error); // Reject the promise if there's an error
      }
    });
  }
