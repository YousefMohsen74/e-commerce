// confirm.js
"use client";
import { useEffect, useState } from "react";
import { getCartTotal ,clearCart } from "@/actions/local-storage-actions";

import { useRouter } from "next/navigation";

function Confim() {
  const router = useRouter();
  const [total, setTotal] = useState(0);

  useEffect(() => {
    const updateTotal = () => {
      setTotal(getCartTotal());
    };

    updateTotal(); // Set initial total

    // Listen for custom event triggered after cart updates
    const handleCartChange = () => {
      updateTotal();
    };

    window.addEventListener("cartUpdated", handleCartChange);

    return () => {
      window.removeEventListener("cartUpdated", handleCartChange);
    };
  }, []);
  const handleConfirm = async () => {
    await clearCart();
    router.push("/confirmation"); // Navigate to the confirmation page
  };

  return (
    <div className="w-1/4 px-5 py-5 border-2 border-gray-100 rounded-xl space-y-3 max-[720px]:w-full ">
      <h1 className="font-bold text-sm">Summary</h1>
      <hr className="w-full" />
      <div className="w-full flex justify-between">
        <div className="text-sm">Delivery Charge</div>
        <div className="text-sm font-light">$0</div>
      </div>
      <hr className="w-full" />
      <div className="w-full flex justify-between">
        <div className="text-sm font-bold">Grand Total</div>
        <div className="font-bold text-sm">${total}</div>
      </div>
      <hr className="w-full" />

        <div onClick={handleConfirm} className="w-full h-9 bg-black text-white rounded-lg flex justify-center items-center cursor-pointer">
          Confirm
        </div>

    </div>
  );
}

export default Confim;
