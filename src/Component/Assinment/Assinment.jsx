import { useQuery } from "@tanstack/react-query";
import Useaxios from "../../Auth/Useaxios";
import Allassinments from "./Allasinment/Allassinments";
import { useState } from "react";


const Assinment = () => {
    const [page, setpage] = useState(0)
    const axios =Useaxios()

    const Allasinment = async() =>{
        const result = await axios.get(`/create?page=${page}`)
        return result;

    }
    const { data: result,  postCount ,isError,error, isLoading } =useQuery({
        queryKey: ['Allasinments',page],
        queryFn:Allasinment,
        initialData:{result:[],}
    })
 
    const totalcont = Math.ceil(result?.data?.postCount ? result?.data?.postCount / 5 : 0)
console.log(totalcont)
const pages =[...new Array(totalcont).fill(0)]
    
    if(isLoading){
        return <progress className="progress w-56"></progress>
    }

    if(isError){
        return <p>Erro : {error.message}</p>
    }

    return (
       <div>
            <h1 className="text-5xl font-bold italic  text-center">All <span className="text-red-500">Assinmnets</span> Here</h1>
           
            <div className="grid lg:grid-cols-3 p-5 md:grid-cols-2 grid-cols-1 gap-12 max-w-screen-7xl mx-auto">
                {
                  result?.data?.result?.map((item, idx) => <Allassinments key={idx} item={item}>

                    </Allassinments>)
                }
            </div>
            <div className="text-center flex gap-10 justify-center ">
                {
                    pages.map((item, index) => <button key={index} className={`w-5 mt-12 mb-12 h-5 ${page === index ? " bg-orange-300 text-white" : "text - white" }  rounded-full`} onClick={() => setpage(index)}>{index + 1}</button>
)
                }
            
            </div>
       </div>
    );
};

export default Assinment;