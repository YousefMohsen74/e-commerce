'use server';
import { revalidatePath } from "next/cache";

export default async function GetNewCollection() {
    const categories = [
        "smartphones",
        "laptops",
        "mobile-accessories",
        "tablets",
        "mens-watches",
    ];

    let allProducts = [];

    // Fetch first 5 products from each category
    for (const category of categories) {
        const res = await fetch(`https://dummyjson.com/products/category/${category}?limit=5`);
        
        if (!res.ok) {
            throw new Error(`Failed to fetch products from ${category}`);
        }

        const data = await res.json();
        allProducts = allProducts.concat(data.products);
    }

    // Shuffle products randomly
    allProducts = allProducts.sort(() => Math.random() - 0.5);

    return allProducts;
}

export async function getSearch(formData) {
    let categories;
    let filter;

    if (formData instanceof FormData) {
        categories = formData.getAll("categories");
        filter = formData.getAll("filter");
    } else if (typeof formData === "object" && formData !== null) {
        categories = formData.categories || [];
        filter = formData.filter || [];
    } else {
        throw new Error("Invalid formData format");
    }

    // Ensure categories is always an array
    if (!Array.isArray(categories)) {
        categories = [categories];
    }

    if (!categories.length) {
        return await GetNewCollection();
    }

    let allProducts = [];

    for (const category of categories) {
        const res = await fetch(`https://dummyjson.com/products/category/${category}?limit=5&order=${filter}`);

        if (!res.ok) {
            throw new Error(`Failed to fetch products from ${category}`);
        }

        const data = await res.json();
        allProducts = allProducts.concat(data.products);
    }

    return allProducts.sort(() => Math.random() - 0.5);
}

export async function getProductById(id) {
    const response = await fetch(`https://dummyjson.com/products/${id}`);
    const product = await response.json();

    // Fetch related products from the same category
    const relatedResponse = await fetch(`https://dummyjson.com/products/category/${product.category}?limit=4`);
    const relatedProducts = await relatedResponse.json();

    return { product, relatedProducts: relatedProducts.products.filter(p => p.id !== product.id) };
}

export async function revalidateCart() {
    revalidatePath("/cart", "layout"); // Adjust the path based on where the cart is displayed
}
