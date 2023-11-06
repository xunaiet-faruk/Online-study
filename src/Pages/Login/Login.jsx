import { useContext, useState } from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { Authcontext } from "../../Auth/Authprovider";
import Swal from "sweetalert2";
import { FcGoogle } from 'react-icons/fc';
import { AiFillEye, AiFillEyeInvisible } from 'react-icons/ai';


const Login = () => {

    const [passwrong, setpasswrong] = useState('');
    const [see, setsee] = useState(false);
    const { signin, Googlesign } = useContext(Authcontext);

    const location = useLocation();
    const navigate = useNavigate()

    const handlesubmit = e =>{
        e.preventDefault()
        const email =e.target.email.value;
        const password =e.target.password.value;
        console.log(email,password)
        signin(email, password)
            .then(res => {

                Swal.fire({
                    icon: 'success',
                    text: 'Successfully login!',

                })

                console.log(res.user)
                 navigate(location?.state ? location.state : '/')
            })
            .catch(error => {
                console.log(error)
                setpasswrong(error.message)
            })      
    }
    const handlegoogle = () => {
        Googlesign()
            .then(() => {
                 navigate(location?.state ? location.state : '/')

            })
            .catch(error => {
                console.log(error)
            })
    }

    return (
        <div>  
            <div className="card flex-shrink-0 lg:w-[500px] w-[350px] md:w-[500px] mb-12 shadow-2xl bg-base-100 max-w-screen-7xl mx-auto  bg-gradient-to-r from-purple-300 to-gray-400">
                <h1 className="text-white  bg-gradient-to-r from-gray-400 to-pink-300 p-7 rounded-t-lg text-center font-bold text-2xl">LOGIN HERE... </h1>
                        <form onSubmit={handlesubmit} className="card-body">
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
                        <h5 className="absolute left-[300px] lg:left-[450px] md:left-[450px]  mt-14" onClick={() => setsee(!see)}>{see ? <AiFillEye></AiFillEye> : <AiFillEyeInvisible></AiFillEyeInvisible>}</h5>                                
                            </div>
                            <div className="form-control mt-6">
                                <button className="btn btn-primary">Login</button>
                            </div>
                            <div className="text-center text-white font-bold">
                                <p>You'r New User Go To <Link to={'/register'} className="text-red-600">Register</Link></p>
                            </div>
                        </form>
             

                <p className="text-center">
                    {
                        passwrong && <span className=" text-red-400">{passwrong}</span>
                    }
                </p>
                <div className="text-center">
                    <button onClick={handlegoogle} className="btn btn-outline w-full rounded-b-xl boreder  text-md hover:bg-error mt-4 font-semibold">
                        <FcGoogle className="text-2xl ml-2"> </FcGoogle>   Google
                    </button>
                </div>
                    </div>
            
                </div>
           
    );
};

export default Login;