import { useQuery } from "@tanstack/react-query";
import Useaxios from "../../Auth/Useaxios";
import Allassinments from "./Allasinment/Allassinments";
import { useState } from "react";



const Assinment = () => {
    // const allData =useLoaderData()
    // const [assinmentdata,setAssinmnet] =useState(allData)
    const [page, setpage] = useState(0)
    const [assignments, setAssignment] = useState([]);
    // const [dificult,setdificult] =useState("all")

    const axios =Useaxios()
    

    const Allasinment = async() =>{
        const result = await axios.get(`/create?page=${page}`)
        console.log(result.data);
        return result;
        

    }

    

    const { data: result,  postCount ,isError,error, isLoading } =useQuery({
        queryKey: ['Allasinments',page],
        queryFn:Allasinment,
        initialData:{result:[],}
    })
    


 
    const totalcont = Math.ceil(result?.data?.postCount ? result?.data?.postCount / 5 : 0)
   
const pages =[...new Array(totalcont).fill(0)]
    
    if(isLoading){
        return <progress className="progress w-56"></progress>
    }

    if(isError){
        return <p>Erro : {error.message}</p>
    }
    
    





    return (
       <div>
            <h1 className="text-5xl font-bold italic mt-8 text-center">All <span className="text-red-500">Assinmnets</span> Here</h1>
            <select name="" id=""  className="px-10 py-2 bg-gray-200 rounded-lg">
                <option value="all">All</option>
                <option value="easy">easy</option>
                <option value="hard">hard</option>
                <option value="medium">medium</option>
            </select>
            <div className="grid lg:grid-cols-3 p-5 md:grid-cols-2 grid-cols-1 gap-12 max-w-screen-7xl mx-auto">
                {
                  result?.data?.result?.map((item, idx) => <Allassinments key={idx} item={item}>

                    </Allassinments>)
                }
            </div>
            <div className="text-center flex gap-10 justify-center ">
                {
                    pages.map((item, index) => <button key={index} className={`w-8  mt-12 mb-12 h-8 ${page === index ? " bg-orange-300 text-white" : "text - white" }  rounded-full`} onClick={() => setpage(index)}>{index + 1}</button>
                )
                }
            
            </div>
       </div>
    );
};

export default Assinment;