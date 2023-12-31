import { useLoaderData } from "react-router-dom";
import Assinmnettable from "../Component/Assinmenttable/Assinmnettable";
import { useContext, useState } from "react";
import Swal from "sweetalert2";
import { Authcontext } from "../Auth/Authprovider";



const Submit = () => {
    const Assinment = useLoaderData()

    // const [submited, setSubmited] = useState(Assinment)
    // const {user} =useContext(Authcontext)
    const [singledelete, setSingledelete] = useState(Assinment)
    console.log(singledelete, Assinment);
    // const handledelete = id => {
    //     Swal.fire({
    //         title: "Are you sure?",
    //         text: "You won't be able to revert this!",
    //         icon: "warning",
    //         showCancelButton: true,
    //         confirmButtonColor: "#3085d6",
    //         cancelButtonColor: "#d33",
    //         confirmButtonText: "Yes, delete it!"
    //     }).then((result) => {
    //         if (result.isConfirmed) {

    //             fetch(`https://onlice-course-backend.vercel.app/fromassinmetns/${id}`,{
    //                 method: 'DELETE',
    //                 headers:{
    //                     'Content-type': 'application/json'
    //                 },
    //                 body:JSON.stringify({email : user?.email})
    //             })
    //                 .then(res => res.json())
    //                 .then(data => {
    //                     console.log(data)
    //                     if (data.deletedCount > 0) {
    //                         Swal.fire({
    //                             title: "Deleted!",
    //                             text: "Your file has been deleted.",
    //                             icon: "success"
    //                         })
    //                         const remaing =submited.filter(assinmnets => assinmnets._id !== id)
    //                         setSubmited(remaing)
    //                     }
    //                 })
    //         }
    //     });
    // }
    return (
        <div>
            <div className="overflow-x-auto">
                <table className="table">
                    {/* head */}
                    <thead className="bg-gray-100">
                        <tr>

                            <th>Name</th>
                            <th>Email&name</th>
                            <th>Status</th>
                            <th>Feedback </th>

                        </tr>
                    </thead>
                    <tbody>
                        {/* row 1 */}

                        {/* {
                            submited?.map((card, idx) => <Assinmnettable key={idx} handledelete={handledelete} card={card} setSingledelete={setSingledelete} singledelete={singledelete}></Assinmnettable>)
                 }
                     */}
                        {
                            singledelete.map(item => <Assinmnettable key={item._id} item={item} setSingledelete={setSingledelete} singledelete={singledelete}></Assinmnettable>)
                        }

                    </tbody>


                </table>
            </div>

        </div>
    );
};

export default Submit;