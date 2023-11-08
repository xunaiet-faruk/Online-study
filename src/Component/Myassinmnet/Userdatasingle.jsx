import { useContext, useState } from "react";
import Swal from "sweetalert2";
import { Authcontext } from "../../Auth/Authprovider";


const Userdatasingle = ({ item }) => {
    const { image, title, marks, obtainmarks, details, status,_id } =item;
    const [submited, setSubmited] = useState()
    const {user} =useContext(Authcontext)
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

                fetch(`http://localhost:5000/fromassinmetns/${id}`,{
                    method: 'DELETE',
                    headers:{
                        'Content-type': 'application/json'
                    },
                    body:JSON.stringify({email : user?.email})
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
                            const remaing =submited.filter(assinmnets => assinmnets._id !== id)
                            setSubmited(remaing)
                        }
                    })
            }
        });
    }
    
    return (
        <tr>
            <th>
                <button onClick={() => handledelete(_id)} className="btn btn-circle btn-outline">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" /></svg>
                </button>

            </th>
            <td>
                <div className="flex items-center space-x-3">
                    <div className="avatar">
                        <div className="mask mask-squircle w-12 h-12">
                            <img src={image} alt="Avatar Tailwind CSS Component" />
                        </div>
                    </div>
                    <div>
                        <div className="font-bold">{title}</div>
                    </div>
                </div>
            </td>
            <td>
                Assinments marks :{marks}
                <br />
                <span className="badge badge-ghost badge-sm">obtain marks {obtainmarks}</span>
            </td>
            <td><p className="text-red-500">{status ? status : 'pending'}</p></td>
            <th>

        <td>{details}</td>

            </th>
        </tr>
        
    );
};

export default Userdatasingle;