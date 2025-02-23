"use client";
import dynamic from "next/dynamic";
import Product from "../home/Product";

// Dynamically import Flickity with SSR disabled
const Flickity = dynamic(() => import("flickity"), { ssr: false });



function ShopSwiper({ products }) {
  
  // Split products into chunks of 9 (each chunk represents a slide)
//   const productChunks = chunkArray(products, 9);

  return (
    <>
    <h1 className="font-bold text-2xl">Showing products</h1>
    <div className="flex flex-wrap justify-between max-[720px]:space-y-5" >
      {products.map((product, index) => (
        <div key={index} className=" w-1/3 max-[720px]:w-full">
          <Product prod={product}/>
        </div>
      ))}
    </div>
    </>
  );
}

export default ShopSwiper;
