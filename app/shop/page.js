import { getSearch } from "@/actions/api-actions";
import Form from "@/components/shop/Form";
import ShopSwiper from "@/components/shop/ShopSwiper";

async function Page({ searchParams: { categories, filter } }) {
  // Destructure searchParams directly in the parameters
  const products = await getSearch({ categories, filter });

  return (
    <div className="min-h-screen px-40 flex w-full max-[720px]:px-5 max-[720px]:flex-col">
      <div className="flex flex-col space-y-5 w-1/4 max-[720px]:w-full">
        <h1 className="font-bold text-2xl">Product Categories</h1>
        <Form initialCategories={categories} initialFilter={filter} />
      </div>
      <div className="w-3/4 max-[720px]:w-full">
        <ShopSwiper products={products} />
      </div>
    </div>
  );
}

export default Page;
