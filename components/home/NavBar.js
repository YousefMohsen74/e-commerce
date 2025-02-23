import Image from "next/image";
import Link from "next/link";
import cart from "@/public/assets/icons/cart.svg"

function NavBar() {
    return (
        <div className="w-full py-5 px-40 flex justify-between items-center max-[720px]:px-5">
            <Link href={"/"}>
                <p className="font-bold text-xl">Tech Haven.</p>
            </Link>
            <div className=" flex gap-3">
                <Link href={"/"}>Home</Link>
                <Link href={"/shop"}>Shop</Link>
                <Link href={"/cart"}>
                    <Image src={cart} alt="cart"/>
                </Link>
            </div>
        </div>
    )
}

export default NavBar;
