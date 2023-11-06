import { useLoaderData } from "react-router-dom";
import Assinmnettable from "../Component/Assinmenttable/Assinmnettable";



const Submit = () => {
    const Assinment =useLoaderData()
   
    return (
        <div>
            <div className="overflow-x-auto">
                <table className="table">
                    {/* head */}
                    <thead className="bg-gray-100">
                        <tr>
                            
                            <th>Name</th>
                            <th>Email</th>
                            <th>Status</th>
                            <th>Feedback </th>
                            <th>Delete </th>
                        </tr>
                    </thead>
                    <tbody>
                        {/* row 1 */}
                  
                 {
                            Assinment.map((card,idx)=><Assinmnettable key={idx} card={card}></Assinmnettable>)
                 }
                    
                     
                    </tbody>
                    

                </table>
            </div>
            
        </div>
    );
};

export default Submit;