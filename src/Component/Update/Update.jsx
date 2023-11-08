import { useContext, useState } from "react";
import { useLoaderData } from "react-router-dom";
import { Authcontext } from "../../Auth/Authprovider";
import DatePicker from "react-datepicker"
import Useaxios from "../../Auth/Useaxios";
import Swal from "sweetalert2";

const Update = () => {
    const { user } = useContext(Authcontext)
    const [startDate, setStartDate] = useState(new Date());
    const axios = Useaxios()

    const updateData = useLoaderData()
    const { _id, title, marks, image,
        difficulty } = updateData;
    const handleupdate = e => {
        e.preventDefault()
        const title = e.target.title.value;
        const marks = e.target.marks.value;
        const image = e.target.image.value;
        const datepiker = e.target.datepiker.value;
        const difficult = e.target.difficult.value;
        const description = e.target.description.value;
        const Allupdatedata = { title, marks, image, email: user?.email, datepiker, difficult, description }
        console.log(Allupdatedata)


        fetch(`https://onlice-course-backend.vercel.app/create/${_id}`, {
            method: 'PATCH',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(Allupdatedata)
        })
            .then(res => res.json())
            .then(data => {
                if (data.modifiedCount) {
                    Swal.fire({
                        title: "Good job!",
                        text: "You data is update successfully",
                        icon: "success"
                    });
                }
            })

    }
    return (
        <div>
            <h1 className="text-4xl font-bold text-center mb-10 italic">Update <span className="text-red-500">Assinments</span></h1>
            <form onSubmit={handleupdate}>

                <div className="flex lg:flex-row flex-col justify-center gap-5">
                    <div className="form-control lg:w-1/3 mb-6">
                        <label className="input-group">
                            <input type="text" placeholder="Title" defaultValue={updateData?.title} name="title" className="input bg-gray-100 input-bordered w-full" required/>
                        </label>
                    </div>
                    <div className="form-control lg:w-1/3">
                        <label className="input-group">
                            <input type="text" placeholder="Marks" defaultValue={updateData?.marks} name="marks" className="input bg-gray-100  input-bordered w-full" required/>
                        </label>
                    </div>
                </div>
                <div className="flex justify-center lg:flex-row flex-col gap-5">

                    <div className="form-control lg:w-1/3 mt-9 lg:mt-0">
                        <label className="input-group">
                            <input type="url" placeholder="Image URL" defaultValue={updateData?.image} name="image" className="input bg-gray-100 input-bordered w-full" required/>
                        </label>
                    </div>
                    <div className="form-control lg:w-1/3 mt-5 lg:mt-0">
                        <label className="input-group w-full ">
                            <DatePicker className="lg:px-[123px] md:px-[270px] px-24 px- py-3 border bg-gray-100 rounded-r-lg" defaultValue={updateData.datepiker} name="datepiker" selected={startDate} onChange={(date) => setStartDate(date)} required/>
                        </label>
                    </div>
                </div>
                <div className="flex justify-center lg:flex-row flex-col mt-8 gap-5">
                    <div className="form-control lg:w-1/3 ">
                        <label className="input-group ">

                            <select name="difficult" defaultValue={updateData?.difficult} className="select select-bordered w-full mb-4 border rounded-md" >
                                <option>Easy</option>
                                <option>Medium</option>
                                <option>Hard</option>
                            </select>
                        </label>
                    </div>

                    <div className="form-control  lg:w-1/3">
                        <label className="input-group">
                            <input type="text" placeholder="Email" defaultValue={user?.email} name="Email" className="input bg-gray-100 input-bordered w-full" />
                        </label>
                    </div>

                </div>
                <div className="flex justify-center lg:flex-row flex-col items-center">
                    <div className="form-control w-2/3  mt-6 mr-5">
                        <label className="input-group ">

                            <textarea name="description" defaultValue={updateData?.description} placeholder="Description" id="" cols="30" rows="10" className="w-full bg-gray-100 border" required></textarea>
                        </label>
                    </div>

                </div>
                <div className="flex justify-center lg:flex-row flex-col items-center ">
                    <input type="submit" className="bg-gray-300 py-2 rounded-lg w-2/3 mt-6 font-bold mb-20" value="Update Assinment" />
                </div>

            </form>
        </div>
    );
};

export default Update;