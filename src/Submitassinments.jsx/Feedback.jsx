import { useLoaderData, useParams } from "react-router-dom";

const Feedback = () => {
    const Loaderdata =useLoaderData()
    console.log(Loaderdata)
    const {id }=useParams()
    console.log(id)

   const handlecompirm =e =>{
        e.preventDefault()
       
       const obtainmarks = e.target.obtainmarks.value;
        const details = e.target.details.value;
       const status ="Confirmed"
       const submitfrom = { obtainmarks, details , status}
        console.log(submitfrom)
        fetch(`http://localhost:5000/fromassinmetns/${id}`,{
            method:'PATCH',
            headers:{
                'Content-type':'application/json'
            },
            body:JSON.stringify(submitfrom)
        })
        .then(res =>res.json())
        .then(data => console.log(data))
    }
    return (
       
           
          <div>
            <p className="text-center mt-8">Pdf links ={Loaderdata.pdf}</p>
            <p className="text-center">Quike notes = {Loaderdata.note}</p>
            <div className="flex justify-center items-center mt-16">
              

                <form onSubmit={handlecompirm}>

                    <div className="form-control l mb-1">
                        <label className="input-group">
                            <input type="text" placeholder="Give Marks" name="obtainmarks" className="input  bg-gray-100 input-bordered w-full" />
                        </label>
                    </div>
                    <div>
                        <textarea className="border-2 bg-gray-100" placeholder="Enter Your Feedback" name="details" id="" cols="55" rows="5" ></textarea>
                    </div>
                    <div>
                        <input className="btn btn-secondary w-full mt-2 mb-12" type="submit" value="Submit" />
                    </div>


                </form>
            </div>
          </div>
    
    );
};

export default Feedback;