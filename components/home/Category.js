import Image from 'next/image';

function Category( {src , name}) {
    return (
        <div className=" grow bg-gray-100  items-center p-5">
                    <div className="relative w-full h-64 flex justify-center items-center ">
                        <Image height={400} src={src} alt="watches"></Image>
                    </div>
                    <div className="bg-white w-full p-5 rounded-md flex justify-center items-center font-bold">{name}</div>
                </div>
    )
}

export default Category
