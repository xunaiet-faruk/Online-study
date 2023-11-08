import { useContext, useState } from "react";
import Swal from "sweetalert2";
import { Authcontext } from "../../Auth/Authprovider";


const Userdatasingle = ({ item }) => {
    const { image, title, marks, obtainmarks, details, status,_id } =item;



    
    return (
        <tr>
            <th>

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