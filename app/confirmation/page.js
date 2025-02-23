import Features from "@/components/home/Features";
import Link from "next/link";

function page() {
  return (
    <div className="flex flex-col w-full  min-h-screen ">
      <div className="flex flex-col h-96 justify-center items-center space-y-4">
        <p className="font-bold text-5xl">Thank you for your order!</p>
        <p className="text-sm">
          Your order has been confirmed. You will receive an email confirmation
          shortly.
        </p>
        <Link href={"/shop"}>
            <div className="h-10 bg-black text-white flex items-center px-2 rounded-lg">Continue Shopping</div>
        </Link>
      </div>
    </div>
  );
}

export default page;
