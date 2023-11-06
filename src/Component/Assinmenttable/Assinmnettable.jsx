

const Assinmnettable = ({ card }) => {
    console.log(card)
    const { pdf, title, marks, image, useremail, userName,
        description } =card;

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
               
                {/* You can open the modal using document.getElementById('ID').showModal() method */}
                <button className="btn btn-ghost btn-xs btn-outline" onClick={() => document.getElementById('my_modal_3').showModal()}>Give mark</button>
                <dialog id="my_modal_3" className="modal">
                    <div className="modal-box">
                        <form method="dialog">
                            {/* if there is a button in form, it will close the modal */}
                            <button className="btn btn-sm btn-circle btn-ghost absolute right-2 top-2">✕</button>
                        </form>
                        <p className='mb-2'>PDF :        
                            <a className="text-red-500" href="https://github.com/ProgrammingHero1/B8A11-CRUD-and-JWT/blob/main/A-11%20PDF/assignment_category_0001.pdf"> Links Here</a>
                                  
                                   </p>
                        <p className="mb-2">Note : {description}</p>  
                      <input className="border-2 w-full p-3 bg-blue-50" type="text" placeholder="Give Mark" name="" id="" />
                       <textarea name="" placeholder="Give your feedback" className="w-full border-2 mt-5 bg-blue-50" id="" cols="30" rows="5"></textarea> 

                    </div>
                </dialog>
            </th>
        </tr>
    );
};

export default Assinmnettable;