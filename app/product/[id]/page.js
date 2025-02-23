import { getProductById } from "@/actions/api-actions";
import Image from "next/image";
import Product from "@/components/home/Product";
import AddToCartButton from "@/components/product/AddToCartButton";

async function page({ params }) {
  const id = params.id;
  const { product, relatedProducts } = await getProductById(id);
  return (
    <div className="min-h-screen px-40 w-full space-y-10 max-[720px]:px-3">
      <div className="w-full flex space-x-10 max-[720px]:flex-col max-[720px]:space-y-3 max-[720px]:space-x-0">
        <div className="relative w-1/2 bg-gray-100 h-80 flex justify-center items-center max-[720px]:w-full">
          <Image fill src={product.thumbnail} alt="product"></Image>
        </div>
        <div className="w-1/2 flex flex-col space-y-5 max-[720px]:w-full">
          <div className="font-bold text-3xl">{product.title}</div>
          <div className="flex space-x-3 items-center">
            <div>{product.category}</div>
            <div className="w-0.5 h-5 bg-gray-400" />
            <div
              className={
                product.availabilityStatus === "In Stock"
                  ? "text-green-600"
                  : "text-red-600"
              }
            >
              {product.availabilityStatus}
            </div>
          </div>
          <div>${product.price}</div>
          <div>
            <div className="font-bold text-xl">Description</div>
          </div>
          <div>{product.description}</div>
          <AddToCartButton product={product} />
        </div>
      </div>
      <div className="flex flex-col space-y-4">
        <div className="font-bold text-2xl">Related Products</div>
        <div className="flex space-x-3 max-[720px]:flex-col max-[720px]:space-x-0 max-[720px]:space-y-3">
          {relatedProducts.map((item, index) => (
            <div className="w-1/4 max-[720px]:w-full" key={index}>
              <Product prod={item} />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default page;
