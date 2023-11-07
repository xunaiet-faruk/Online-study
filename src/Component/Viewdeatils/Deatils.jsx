import { useContext } from "react";
import { useLoaderData } from "react-router-dom";
import { Authcontext } from "../../Auth/Authprovider";
import Useaxios from "../../Auth/Useaxios";
import toast from "react-hot-toast";

const Deatils = () => {
    const { user } = useContext(Authcontext)
    const useremail =user?.email;
    const userName =user?.displayName
    console.log(userName)
    const axios =Useaxios()
    const loderdata =useLoaderData()
    const { image, title, marks, description } =loderdata
    console.log(description)
  
    const hadleform = e =>{
        e.preventDefault();
        const pdf = e.target.pdf.value;
        const note = e.target.note.value;
        const Allmoadaldata = { pdf, note, title, marks, image, useremail, userName }
        console.log(Allmoadaldata)
        axios.post('/fromassinmetns',Allmoadaldata)
        .then(res => {
            if(res.data?.insertedId){
                toast.success('Successfully submited this assingnment')
            }
        })
    }

    return (
       <div className="mb-10 flex lg:flex-row flex-col justify-between items-center bg-gray-200 lg:h-[80vh] ">
            <div className="flex justify-center items-center w-2/3">
                <img className="w-full lg:h-[450px]" src={image} alt="" />
            </div>
            <div className="space-y-6">
                <p className="text-center text-black text-4xl font-bold">{title}</p>
                
                <p className="text-center text-xl font-semibold">{description}</p>
                <div className="avatar-group -space-x-6 justify-center">
                    <div className="avatar">
                        <div className="w-12">
                            <img src="https://i.ibb.co/bXHmpHF/image.png" />
                        </div>
                    </div>
                    <div className="avatar">
                        <div className="w-12">
                            <img src="https://i.ibb.co/bXHmpHF/image.png" />
                        </div>
                    </div>
                    <div className="avatar">
                        <div className="w-12">
                            <img src="https://i.ibb.co/bXHmpHF/image.png" />
                        </div>
                    </div>
                    <div className="avatar">
                        <div className="w-12">
                            <img src="https://i.ibb.co/bXHmpHF/image.png" />
                        </div>
                    </div>
                </div>
                <p className="text-center text-3xl text-blue-300 font-bold">Assinments Marks = {marks}</p>
                <div className="text-center mt-4"> 
                    
                    {/* You can open the modal using document.getElementById('ID').showModal() method */}
                    <button className="btn btn-outline btn-secondary" onClick={() => document.getElementById('my_modal_3').showModal()}>Take Assinment </button>
                    <dialog id="my_modal_3" className="modal">
                        <div className="modal-box">
                            <form  method="dialog">
                                {/* if there is a button in form, it will close the modal */}
                                <button className="btn btn-sm btn-circle btn-ghost absolute right-2 top-2">✕</button>
                    
                            </form>
                            <form onSubmit={hadleform}>
                                <label className="input-group">
                                    <input type="links" placeholder="pdf file" name="pdf" className="input mt-5 bg-gray-100 input-bordered w-full" />
                                </label>
                                <textarea name="note" placeholder="textarea" id="" cols="10" rows="5" className="w-full mt-5 bg-gray-100 border-2"></textarea>
                                <div>
                                 <input type="submit" name="description" className="btn btn-primary w-full mt-2" value="Submit" />
                                </div>
                            </form>
                            </div>
                          
                    </dialog>
                  
                    
                </div>
            </div>
            <div>
                
            </div>
       </div>
    );
};

export default Deatils;