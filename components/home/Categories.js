import Category from './Category'
import watches from '@/public/assets/categories/watches-category.png'
import tv from '@/public/assets/categories/tv-home-category.png'
import ipad from '@/public/assets/categories/ipads-category.png'
import accessories from '@/public/assets/categories/accessories-category.png'
import laptops from '@/public/assets/categories/laptops-category.png'
import phones from '@/public/assets/categories/phones-category.png'

function Categories() {
    return (
        <div className="w-full h-screen flex flex-col gap-5 max-[720px]:h-auto">
            <div className="text-2xl font-semibold w-full flex justify-center">
                Shop by Categories
            </div>
            <div className="w-full grid grid-rows-2 grid-cols-3 gap-2 max-[720px]:flex max-[720px]:flex-col">
                <Category src={watches} name="watches"/>
                <Category src={tv} name="TV and Home"/>
                <Category src={ipad} name="Ipads"/>
                <Category src={accessories} name="Accessories"/>
                <Category src={laptops} name="Laptops"/>
                <Category src={phones} name="Phones"/>
            </div>
        </div>
    )
}

export default Categories
