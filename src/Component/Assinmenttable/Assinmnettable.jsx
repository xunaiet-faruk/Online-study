
import { useEffect } from "react";
import { Link } from "react-router-dom";
const Assinmnettable = ({ item, handledelete, singledelete, setSingledelete }) => {
    
    const {  title, marks, image, useremail, userName,_id } =item;

    useEffect(() => {
        const remaining = singledelete.filter(remaining => remaining.status !== "Confirmed")
        setSingledelete(remaining);
    }, [setSingledelete,singledelete])


    return (
        <tr>
           
            <td>
               
                <div className="flex items-center space-x-3">
                    
                    <div className="avatar">
        
                        <div className="mask mask-squircle w-12 h-12">
                           
                            <img src={image} alt="Avatar Tailwind CSS Component" />
                        </div>
                    </div>
                    <div>
                        <div className="font-bold">{title}</div>
                        <div className="text-sm opacity-50">Marks :{marks}</div>
                    </div>
                </div>
            </td>
            <td>
              {userName}
                <br />
                <span className="badge badge-ghost badge-sm">{useremail}</span>
            </td>
            <td>Pending</td>
            <th>
                <Link to={`/fromassinmetns/${_id}`}><button className="text-blue-400">Give marks</button></Link>
               
       
            </th>
           
        </tr>
    );
};

export default Assinmnettable;