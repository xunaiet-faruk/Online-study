import { useContext, useState } from "react";
import { Link } from "react-router-dom";
import { Authcontext } from "../../Auth/Authprovider";
import { updateProfile } from "firebase/auth";
import Swal from "sweetalert2";
import { FcGoogle } from "react-icons/fc";
import { AiFillEye, AiFillEyeInvisible } from "react-icons/ai";


const Register = () => {
    const [error, seterror] = useState('')
    const [see, setsee] = useState(false);
    const { createuser, Googlesign } = useContext(Authcontext)
    const handlesubmit = e => {
       
        e.preventDefault()
        const email = e.target.email.value;
        const name = e.target.Name.value;
        const image = e.target.image.value;
        const password =e.target.password.value;
        console.log(email, password, image,name)
        seterror('')
        if (password.length < 6) {
            seterror('At least 6 carecter must be added');
            return;

        } else if (!/[A-Z]/.test(password)) {
            seterror('password must be 1 letter uppercase')
            return;

        } else if (!/[!@#$%^&*]/.test(password)) {
            seterror('password must be 1 caracter speacial')
            return;
        }
        createuser(email, password)
            .then(res => {
                updateProfile(res.user, {
                    displayName: name,
                    photoURL: image,

                })
                    .then(() => {
                        window.location.reload()
                        Swal.fire({
                            icon: 'success',
                            text: 'Successfully login!'
                        })
                            .catch(error => {
                                console.log(error)
                            })
                    })
                console.log(res.user)
            })
            .catch(error => {
                console.log(error)
            })

    }
    const handlegoogle = () => {
        Googlesign()
            .then(() => {
                // navigate(location?.state ? location.state : '/')


            })
            .catch(error => {
                console.log(error)
            })
    }


    return (
        <div>

            <div className="card mt-12 flex-shrink-0 lg:w-[600px] mb-20 md:w-[550px] w-[400px] shadow-2xl bg-base-100 max-w-screen-7xl mx-auto  bg-gradient-to-r from-gray-500 to-blue-200">
                <h1 className="text-white  bg-black p-7 rounded-t-lg text-center font-bold text-2xl">Register HERE... </h1>
                <form onSubmit={handlesubmit} className="card-body">
                    <div className="form-control">
                        <label className="label">
                            <span className="label-text">Name</span>
                        </label>
                        <input type="text" name="Name" placeholder="Name" className="input input-bordered" required />
                    </div>
                    <div className="form-control">
                        <label className="label">
                            <span className="label-text">Email</span>
                        </label>
                        <input type="email" name="email" placeholder="email" className="input input-bordered" required />
                    </div>
                    <div className="form-control">
                        <label className="label">
                            <span className="label-text">Password</span>
                        </label>
                        <input type={see ? "text" : "password"} placeholder="password" name="password" className="input input-bordered" required />
                        <h5 className="absolute left-[330px] lg:left-[540px] md:left-[500px]  mt-14" onClick={() => setsee(!see)}>{see ? <AiFillEye></AiFillEye> : <AiFillEyeInvisible></AiFillEyeInvisible>}</h5>
                        
                    </div>
                    <div className="form-control">
                        <label className="label">
                            <span className="label-text">Photo</span>
                        </label>
                        <input type="url" name="image" placeholder="Photo" className="input input-bordered"/>
                        
                    </div>
                    <div className="form-control mt-6">
                        <button className="btn btn-primary">Register</button>
                    </div>
                    <div className="text-center text-white font-bold">
                        <p>You'r New User Go To <Link to={'/login'} className="text-red-600">Login</Link></p>
                    </div>
                </form>
                <div>
                    {
                        error && <p className="text-red-400 font-bold text-center mt-4">{error}</p>
                    }
                </div>
                <div>
                    {
                        error && <p>{error.message}</p>
                    }
                </div>
                <div className="text-center">
                    <button onClick={handlegoogle} className="btn btn-outline px-52 mb-2 rounded-b-xl boreder  text-md hover:bg-error mt-4 font-semibold">
                        <FcGoogle className="text-2xl ml-2"> </FcGoogle>   Google
                    </button>
                </div>
            </div>
        </div>
    );
};

export default Register;