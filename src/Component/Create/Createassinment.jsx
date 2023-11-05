import { useContext, useState } from "react";
import "react-datepicker/dist/react-datepicker.css";
import DatePicker from "react-datepicker" 
import { Authcontext } from "../../Auth/Authprovider";
import Swal from "sweetalert2";
import Useaxios from "../../Auth/Useaxios";
const Createassinment = () => {
         const {user} =useContext(Authcontext)
  
        const [startDate, setStartDate] = useState(new Date());
        const axios =Useaxios()

        const handlesubmit = e =>{
            e.preventDefault()
            const title =e.target.title.value;
            const marks = e.target.marks.value;
            const image = e.target.image.value;
            const datepiker = e.target.datepiker.value;
            const difficult = e.target.difficult.value;
            const description = e.target.description.value;
            const Alldata ={title,marks,image,datepiker,difficult,description}
           
            axios.post('/create',Alldata)
            .then(res => {
                if(res.data?.insertedId){
                    Swal.fire({
                        position: 'top-end',
                        icon: 'success',
                        title: 'Your work has been saved',
                        showConfirmButton: false,
                        timer: 1500
                    })
                }
            })
            .catch(error => {
                console.log(error)
            })

        }


        
    return (
      <div className=" max-w-screen-7xl mx-auto p-5">
            <h1 className="text-center font-semibold text-5xl mb-10">Enter Your New<span className="text-red-500"> Assinment</span></h1>
        <form onSubmit={handlesubmit}>

                <div className="flex lg:flex-row flex-col justify-center gap-5">
                    <div className="form-control lg:w-1/3 mb-6">
                        <label className="input-group">
                            <input type="text" placeholder="Title" name="title" className="input bg-gray-100 input-bordered w-full" />
                        </label>
                    </div>
                    <div className="form-control lg:w-1/3">
                        <label className="input-group">
                            <input type="text" placeholder="Marks" name="marks" className="input bg-gray-100  input-bordered w-full" />
                        </label>
                    </div>
                </div>
                <div className="flex justify-center lg:flex-row flex-col gap-5">

                    <div className="form-control lg:w-1/3 mt-9 lg:mt-0">
                        <label className="input-group">
                            <input type="url" placeholder="Image URL" name="image" className="input bg-gray-100 input-bordered w-full" />
                        </label>
                    </div>
                    <div className="form-control lg:w-1/3 mt-5 lg:mt-0">
                        <label className="input-group w-full ">
                            <DatePicker className="lg:px-[115px] md:px-[270px] px-24 px- py-3 border bg-gray-100 rounded-r-lg" name="datepiker" selected={startDate} onChange={(date) => setStartDate(date)} />
                        </label>
                    </div>
                </div>
                <div className="flex justify-center lg:flex-row flex-col mt-8 gap-5">
                    <div className="form-control lg:w-1/3 ">
                        <label className="input-group ">

                            <select name="difficult" className="select select-bordered w-full mb-4 border rounded-md" >
                                <option>Easy</option>
                                <option>Medium</option>
                                <option>Hard</option>
                            </select>
                        </label>
                    </div>

                    <div className="form-control  lg:w-1/3">
                        <label className="input-group">
                            <input type="text" placeholder="Email" defaultValue={user?.email} name="Email" className="input bg-gray-100 input-bordered w-full" />
                        </label>
                    </div>

                </div>
                <div className="flex justify-center lg:flex-row flex-col items-center">
                    <div className="form-control w-2/3  mt-6 mr-5">
                        <label className="input-group ">

                            <textarea name="description" placeholder="Description" id="" cols="30" rows="10" className="w-full bg-gray-100 border"></textarea>
                        </label>
                    </div>

                </div>
                <div className="flex justify-center lg:flex-row flex-col items-center ">
                    <input type="submit" className="bg-gray-300 py-2 rounded-lg w-2/3 mt-6 font-bold" value="Add Assinment" />
                </div>

        </form>
      </div>
    );
};

export default Createassinment;