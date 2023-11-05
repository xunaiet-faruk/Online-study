import { useQuery } from "@tanstack/react-query";
import Useaxios from "../../Auth/Useaxios";
import Allassinments from "./Allasinment/Allassinments";


const Assinment = () => {
    const axios =Useaxios()

    const Allasinment = async() =>{
        const result = await axios.get('/create')
        return result;

    }
    const { data:assinments ,isError,error, isLoading } =useQuery({
        queryKey: ['Allasinments'],
        queryFn:Allasinment
    })
    console.log(assinments?.data)
    
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
                    assinments?.data?.map((item, idx) => <Allassinments key={idx} item={item}>

                    </Allassinments>)
                }
            </div>
       </div>
    );
};

export default Assinment;