import { useLoaderData } from "react-router-dom";


const Deatils = () => {
    const loderdata =useLoaderData()
    console.log(loderdata);
    const { image, title, marks, description } =loderdata
    return (
       <div className="mb-10">
            <div className="flex justify-center items-center">
                <img className=" w-[853px]" src={image} alt="" />
            </div>
            <div className="bg-gray-300 w-2/3 mx-auto py-5">
                <p className="text-center text-red-500 text-4xl font-bold">{title}</p>
                <p className="text-center text-xl font-semibold">{description}</p>
                <p className="text-center text-3xl text-blue-300 font-bold">Assinments Marks = {marks}</p>

            </div>
       </div>
    );
};

export default Deatils;