'use client'
function Form() {
    return (
        <form className="space-y-3 "  >
          <div className="flex flex-col space-y-3">
            <div className="space-x-2 ">
              <input
                name="categories"
                id="1"
                type="checkbox"
                value="smartphones"
                className=" accent-black cursor-pointer"
              />
              <label htmlFor="1">Smartphones</label>
            </div>
            <div className="space-x-2 ">
              <input
                name="categories"
                id="2"
                type="checkbox"
                value="laptops"
                className=" accent-black"
              />
              <label htmlFor="2">Laptops</label>
            </div>
            <div className="space-x-2 ">
              <input
                name="categories"
                id="3"
                type="checkbox"
                value="mobile-accessories"
                className=" accent-black"
              />
              <label htmlFor="3">Mobile Accessories</label>
            </div>
            <div className="space-x-2 ">
              <input
                name="categories"
                id="4"
                type="checkbox"
                value="tablets"
                className=" accent-black"
              />
              <label htmlFor="4">Tablets</label>
            </div>
            <div className="space-x-2 ">
              <input
                name="categories"
                id="5"
                type="checkbox"
                value="mens-watches"
                className=" accent-black"
              />
              <label htmlFor="5">Watches</label>
            </div>
          </div>
          <hr className="w-3/4 " />
          <div className="flex flex-col space-y-3">
            <h1 className="font-bold text-2xl">Sort By</h1>
            <div className="space-x-2">
              <input className="accent-black" type="radio" name="filter" value={"asc"} id="5" defaultChecked/>
              <label htmlFor="5">Latest</label>
            </div>
            <div className="space-x-2">
              <input className="accent-black" type="radio" name="filter" value={"desc"} id="6" />
              <label htmlFor="6">Oldest</label>
            </div>
          </div>
          <button className="px-2 h-10 w-40 bg-black text-white flex items-center rounded-md justify-center" type="submit" >search</button>
        </form>
    )
}

export default Form;
