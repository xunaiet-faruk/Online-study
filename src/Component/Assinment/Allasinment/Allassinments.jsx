
import { useContext, useState } from "react";
import { Link } from "react-router-dom";
import Swal from "sweetalert2";
import { Authcontext } from "../../../Auth/Authprovider";
import { useMutation, useQueryClient } from "@tanstack/react-query";

<select name="" id="">
    <option value="easy">easy</option>
    <option value="hard">hard</option>
    <option value="medium">medium</option>
</select>
const Allassinments = ({ item }) => {
    const queryClient = useQueryClient();
    const { _id, title, marks, image, email,
        difficulty } =item;


        const {mutate} = useMutation({
            mutationFn: async (id) => {
                fetch(`http://localhost:5000/fromassinmetns/${id}?email=${user?.email}&productEmail=${email}`, {
                    method: 'DELETE',
                })
                    .then(res => res.json())
                    .then(data => {
                        console.log(data)
                        if (data.deletedCount > 0) {
                            Swal.fire({
                                title: "Deleted!",
                                text: "Your file has been deleted.",
                                icon: "success"
                            })
                           
                        }
                    })
            },
            onSuccess:() => {
                queryClient.invalidateQueries({ queryKey: ['Allasinments'] })
            }
        })

    const [submited, setSubmited] = useState()
    const { user } = useContext(Authcontext)
    const handledelete = id => {
        Swal.fire({
            title: "Are you sure?",
            text: "You won't be able to revert this!",
            icon: "warning",
            showCancelButton: true,
            confirmButtonColor: "#3085d6",
            cancelButtonColor: "#d33",
            confirmButtonText: "Yes, delete it!"
        }).then((result) => {
            if (result.isConfirmed) {

                mutate(id)
            }
        });
    }
    return (
     
        <div>
            
            <div className="relative flex flex-col text-gray-700 bg-white shadow-md h-[450px] rounded-xl bg-clip-border">
                <div className="relative mx-4 mt-4 overflow-hidden text-gray-700 bg-white shadow-lg h-80 rounded-xl bg-clip-border">
                    <img className="w-full h-[200px]" src={image} alt="profile-picture" />
                </div>
                <div className="p-6 text-center">
                    <h4 className="block mb-2 font-sans text-2xl antialiased font-semibold leading-snug tracking-normal text-blue-gray-900">
                       {title} 
                    </h4>
                    <p className="block font-sans text-base antialiased font-medium leading-relaxed text-transparent bg-gradient-to-tr from-pink-600 to-pink-400 bg-clip-text">
                    Marks : {marks}
                    </p>
                    <p className="block font-sans text-base antialiased font-medium leading-relaxed text-transparent bg-gradient-to-tr from-pink-600 to-pink-400 bg-clip-text">
                        Difficulte : {difficulty}
                    </p>
                   <div className="space-y-4">

                        <Link to={`/details/${_id}`}>
                            <button className="btn btn-outline btn-secondary mr-3 ">view</button>

                        </Link>

                <Link to={`/update/${_id}`}>
                
                            <button className="btn  btn-outline btn-primary">Update</button>            
                </Link>

                   </div>
                </div>
                <div className="flex justify-center p-6 pt-2 gap-7">
                    <a
                        href="#facebook"
                        className="block font-sans text-xl antialiased font-normal leading-relaxed text-transparent bg-gradient-to-tr from-blue-600 to-blue-400 bg-clip-text"
                    >
                        <i className="fab fa-facebook" aria-hidden="true"></i>
                    </a>
                    
                    <a
                        href="#twitter"
                        className="block font-sans text-xl antialiased font-normal leading-relaxed text-transparent bg-gradient-to-tr from-light-blue-600 to-light-blue-400 bg-clip-text"
                    >
                        <i className="fab fa-twitter" aria-hidden="true"></i>
                    </a>
                    <a
                        href="#instagram"
                        className="block font-sans text-xl antialiased font-normal leading-relaxed text-transparent bg-gradient-to-tr from-purple-600 to-purple-400 bg-clip-text"
                    >
                        <i className="fab fa-instagram" aria-hidden="true"></i>
                    </a>
                    <button onClick={() => handledelete(_id)} className="btn btn-circle btn-outline mr-[70px]">
                        Delete
                    </button>
                </div>
            </div>
        </div>

   
    );
};

export default Allassinments;