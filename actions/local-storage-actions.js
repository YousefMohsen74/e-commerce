"use client";
import { revalidateCart } from "./api-actions";

function dispatchCartUpdatedEvent() {
  if (typeof window !== "undefined") {
    window.dispatchEvent(new Event("cartUpdated"));
  }
}

//add a product tp cart
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

    dispatchCartUpdatedEvent();
    setTimeout(() => revalidateCart(), 0);
  } catch (error) {
    console.error("Error in addToCart:", error);
  }
}

//increase the quantity of a product in cart
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
      dispatchCartUpdatedEvent();
    }

    setTimeout(() => revalidateCart(), 0);
  } catch (error) {
    console.error("Error in increaseQuantity:", error);
  }
}

//decrease a quantity of a product
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
        dispatchCartUpdatedEvent();
        setTimeout(() => revalidateCart(), 0);
      }
    }
  } catch (error) {
    console.error("Error in decreaseQuantity:", error);
  }
}

//remove product from cart
export function removeFromCart(productId) {
  try {
    if (typeof window === "undefined") return;

    const storedProducts = localStorage.getItem("cartProducts");
    if (!storedProducts) return;

    let products = JSON.parse(storedProducts);
    products = products.filter((product) => product.id !== productId);

    localStorage.setItem("cartProducts", JSON.stringify(products));

    console.log(`Product ${productId} removed. Updated cart:`, products);
    dispatchCartUpdatedEvent();
    setTimeout(() => revalidateCart(), 0);
  } catch (error) {
    console.error("Error in removeFromCart:", error);
  }
}

//get total price
export function getCartTotal() {
  try {
    if (typeof window === "undefined") return 0;

    const storedProducts = localStorage.getItem("cartProducts");
    if (!storedProducts) return 0;

    let products = JSON.parse(storedProducts);
    if (!Array.isArray(products)) return 0;

    const total = products.reduce(
      (sum, product) => sum + product.price * (product.quantity || 1),
      0
    );
    setTimeout(() => revalidateCart(), 0);
    return total.toFixed(2);
  } catch (error) {
    console.error("Error in getCartTotal:", error);
    return 0;
  }
}

//delete all products from the cart
export function clearCart() {
  return new Promise((resolve, reject) => {
    try {
      if (typeof window === "undefined") {
        resolve();
        return;
      }

      localStorage.removeItem("cartProducts");
      dispatchCartUpdatedEvent();

      setTimeout(() => {
        revalidateCart();
        resolve();
      }, 0);
    } catch (error) {
      console.error("Error in clearCart:", error);
      reject(error);
    }
  });
}
