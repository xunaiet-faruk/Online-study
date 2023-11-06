import { useContext } from "react";
import { useLoaderData } from "react-router-dom";
import { Authcontext } from "../../Auth/Authprovider";
import Swal from "sweetalert2";
import Submit from "../../Submitassinments.jsx/Submit";



const Deatils = () => {
    const { user } = useContext(Authcontext)
 
    const loderdata =useLoaderData()
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
                <div className="text-center mt-4"> 
                    
                    {/* You can open the modal using document.getElementById('ID').showModal() method */}
                    <button className="btn btn-outline btn-secondary" onClick={() => document.getElementById('my_modal_3').showModal()}>open modal</button>
                    <dialog id="my_modal_3" className="modal">
                        <div className="modal-box">
                            <form method="dialog">
                                {/* if there is a button in form, it will close the modal */}
                                <button className="btn btn-sm btn-circle btn-ghost absolute right-2 top-2">✕</button>
                            </form>
                            <label className="input-group">
                                <input type="links" placeholder="pdf file" name="pdf" className="input mt-5 bg-gray-100 input-bordered w-full" />
                            </label>
                                <textarea name="" placeholder="textarea" id="" cols="10" rows="5" className="w-full mt-5"></textarea>
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