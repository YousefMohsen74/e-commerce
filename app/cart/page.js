import CartProducts from "@/components/cart/CartProducts";
import Confim from "@/components/cart/Confim";
import Link from "next/link";

async function page() {

  return (
    <div className="min-h-screen px-40 w-full flex flex-col space-y-24 max-[720px]:px-5">
      <div className="flex-col space-y-3">
        <h1 className="font-bold text-2xl">Cart</h1>
        <div className="w-full flex space-x-5 max-[720px]:flex-col max-[720px]:space-x-0 max-[720px]:space-y-5">
          <CartProducts />
          <Confim />
        </div>
      </div>
      <div className="w-full bg-gray-200 flex justify-between px-5 py-8 items-center max-[720px]:flex-col max-[720px]:space-y-3">
        <div className="flex flex-col space-y-3">
          <p className="font-bold">Continue Shopping</p>
          <p className="text-sm">
            Discover more products that ara perfect to gift, for you wardrobe,
            or a unique addition to your collection
          </p>
        </div>
        <Link href={"/shop"}>
          <div className="w-40 h-9 bg-black text-white rounded-lg flex justify-center items-center">
            Continue Shopping
          </div>
        </Link>
      </div>
    </div>
  );
}

export default page;
