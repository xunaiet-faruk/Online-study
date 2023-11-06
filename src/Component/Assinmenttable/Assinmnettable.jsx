import { Link } from "react-router-dom";


const Assinmnettable = ({ card }) => {
    console.log(card)
    const {  title, marks, image, useremail, userName,_id } =card;


    // const handlecompirm =e =>{
    //     e.preventDefault()
       
    //     const marks=e.target.marks.value;
    //     const details = e.target.details.value;
    //     const submitfrom = { marks, details }
    //     console.log(submitfrom)
    //     fetch(`http://localhost:5000/fromassinmetns/${_id}`,{
    //         method:'PATCH',
    //         headers:{
    //             'Content-type':'application/json'
    //         },
    //         body:JSON.stringify(submitfrom)
    //     })
    //     .then(res =>res.json())
    //     .then(data => console.log(data))
    // }
       

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
                <Link to={`/fromassinmetns/${_id}`}><button>Give marks</button></Link>
               
       
            </th>
            <td>
        <button className="btn rounded-full  ml-4 bg-error text-white w-9">X</button>

            </td>
        </tr>
    );
};

export default Assinmnettable;