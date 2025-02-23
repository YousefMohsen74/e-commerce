import Image from 'next/image';
import Link from 'next/link';

function Product({prod}) {
    return (
        <Link href={`/product/${prod.id}`} className="w-full flex-col space-y-3 cursor-pointer">
            <div className="flex justify-center bg-gray-100 w-full items-center  h-40">
                {/* <button onClick={console.log(prod)}>njfannfa</button> */}
                <Image width={150} height={150} src={prod.thumbnail} alt={"product"}></Image>
            </div>
            <div className='font-bold'>
                {prod.title}
            </div>
            <div className='font-medium text-sm text-gray-600'>
                <p className='overflow-hidden text-ellipsis whitespace-nowrap hover:whitespace-normal h-5 hover:h-full hover:overflow-visible flex-col'>{prod.description}</p>
                <p>${prod.price}</p>
            </div>
        </Link>
    )
}

export default Product;
