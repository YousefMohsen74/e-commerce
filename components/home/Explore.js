import Image from 'next/image';
import Link from 'next/link';
import hero from "@/public/assets/home-1.png";
import getNewCollection from '@/actions/api-actions'

function Explore() {
  return (
    <div className="relative w-full h-[90vh] max-[720px]:h-auto">
      <div className="absolute w-full h-full -z-10 max-[720px]:hidden">
        <Image
          fill
          src={hero}
          alt="background image"
          className="object-cover"
        />
      </div>
      <div className=" w-full h-full flex items-center ">
        <div className="flex-col space-y-4">
          <p className="font-bold text-7xl max-[720px]:text-4xl">Unleash Innovation</p>
          <p className="font-bold text-7xl max-[720px]:text-4xl">in Every Byte.</p>
          <p className="font-medium text-2xl max-[720px]:text-xl">
            Explore a World of cutting-Edge Tech
          </p>
          <div className="bg-black w-24 h-10 rounded-lg text-white flex justify-center items-center">
            <Link onClick={getNewCollection} href={"/"}>Shop now</Link>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Explore;
