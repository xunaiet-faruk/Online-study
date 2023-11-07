
import { Link } from "react-router-dom";
const Assinmnettable = ({ card,handledelete }) => {

    const {  title, marks, image, useremail, userName,_id } =card;
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
            <td>
                <button onClick={() => handledelete(_id)} className="btn btn-circle btn-outline">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" /></svg>
                </button>

            </td>
        </tr>
    );
};

export default Assinmnettable;