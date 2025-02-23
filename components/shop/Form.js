'use client'
import { useState } from "react";

function Form() {
  const [loading, setLoading] = useState(false);

  const handleSubmit = (e) => {
    setLoading(true);

    // Simulating API call delay
    setTimeout(() => {
      setLoading(false);
    }, 2000);
  };

  return (
    <form className="space-y-3" onSubmit={handleSubmit}>
      <div className="flex flex-col space-y-3">
        <div className="space-x-2">
          <input
            name="categories"
            id="1"
            type="checkbox"
            value="smartphones"
            className="accent-black cursor-pointer"
          />
          <label htmlFor="1">Smartphones</label>
        </div>
        <div className="space-x-2">
          <input
            name="categories"
            id="2"
            type="checkbox"
            value="laptops"
            className="accent-black"
          />
          <label htmlFor="2">Laptops</label>
        </div>
        <div className="space-x-2">
          <input
            name="categories"
            id="3"
            type="checkbox"
            value="mobile-accessories"
            className="accent-black"
          />
          <label htmlFor="3">Mobile Accessories</label>
        </div>
        <div className="space-x-2">
          <input
            name="categories"
            id="4"
            type="checkbox"
            value="tablets"
            className="accent-black"
          />
          <label htmlFor="4">Tablets</label>
        </div>
        <div className="space-x-2">
          <input
            name="categories"
            id="5"
            type="checkbox"
            value="mens-watches"
            className="accent-black"
          />
          <label htmlFor="5">Watches</label>
        </div>
      </div>
      <hr className="w-3/4" />
      <div className="flex flex-col space-y-3">
        <h1 className="font-bold text-2xl">Sort By</h1>
        <div className="space-x-2">
          <input
            className="accent-black"
            type="radio"
            name="filter"
            value="asc"
            id="6"
            defaultChecked
          />
          <label htmlFor="6">Latest</label>
        </div>
        <div className="space-x-2">
          <input
            className="accent-black"
            type="radio"
            name="filter"
            value="desc"
            id="7"
          />
          <label htmlFor="7">Oldest</label>
        </div>
      </div>
      <button
        className="px-2 h-10 w-40 bg-black text-white flex items-center rounded-md justify-center disabled:opacity-50"
        type="submit"
        disabled={loading}
      >
        {loading ? "Searching..." : "Search"}
      </button>
    </form>
  );
}

export default Form;
