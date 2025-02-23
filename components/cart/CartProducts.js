"use client";
import { useEffect, useState } from "react";
import Image from "next/image";
import {
  increaseQuantity,
  decreaseQuantity,
  removeFromCart,
} from "@/actions/local-storage-actions";
import deleteIcon from '@/public/assets/icons/delete.svg';

function CartProducts() {
  const [cartProducts, setCartProducts] = useState([]);

  // Function to load cart from localStorage
  const loadCart = () => {
    const storedProducts = localStorage.getItem("cartProducts");
    setCartProducts(storedProducts ? JSON.parse(storedProducts) : []);
  };

  useEffect(() => {
    // Load cart initially
    loadCart();

    // Listen for changes in localStorage
    const handleStorageChange = () => {
      loadCart();
    };

    window.addEventListener("storage", handleStorageChange);

    return () => {
      window.removeEventListener("storage", handleStorageChange);
    };
  }, []);

  const handleIncrease = (id) => {
    increaseQuantity(id);
    loadCart(); // Refresh state
  };

  const handleDecrease = (id) => {
    decreaseQuantity(id);
    loadCart(); // Refresh state
  };

  const handleDelete = (id) => {
    removeFromCart(id);
    loadCart(); // Refresh state
  };

  return (
    <div className="flex flex-col w-3/4 space-y-2 max-[720px]:w-full">
      <div className="w-full flex">
        <div className="w-1/2">Products</div>
        <div className="w-1/2 flex justify-between">
          <div>Quantity</div>
          <div>Subtotal</div>
        </div>
      </div>
      <hr className="w-full" />
      {cartProducts.map((product, index) => (
        <div className="w-full flex items-center" key={index}>
          <div className="flex space-x-5 w-1/2">
            <div className="relative w-16 h-16 flex justify-center items-center bg-gray-100">
              <Image fill src={product.thumbnail} alt="product" />
            </div>
            <div className="flex flex-col justify-evenly h-full">
              <div className="font-bold text-sm">{product.title}</div>
              <div className="text-sm text-gray-600">${product.price}</div>
            </div>
          </div>
          <div className="w-1/2 flex justify-between">
            <div className="w-20 h-9 flex border-2 border-gray-500 justify-center items-center space-x-3 rounded-md">
              <div
                className="text-gray-500 cursor-pointer"
                onClick={() => handleDecrease(product.id)}
              >
                -
              </div>
              <div>{product.quantity || 1}</div>
              <div
                className="text-gray-500 cursor-pointer"
                onClick={() => handleIncrease(product.id)}
              >
                +
              </div>
            </div>
            <div className="flex space-x-10 items-center max-[720px]:space-x-2">
              <div className="text-gray-600">${(product.price * (product.quantity || 1)).toFixed(2)}</div>
              <div className="cursor-pointer" onClick={() => handleDelete(product.id)}>
                <Image src={deleteIcon} alt="delete"/>
              </div>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
}

export default CartProducts;
