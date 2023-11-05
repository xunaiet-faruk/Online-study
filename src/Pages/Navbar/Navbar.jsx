import { useContext} from "react";
import { Link, NavLink } from "react-router-dom";
import { Authcontext } from "../../Auth/Authprovider";

const Navbar = () => {
    const {user,logout } = useContext(Authcontext)
  
    const links =<>
    
        <li><NavLink
            to="/"
            className={({ isActive, isPending }) =>
                isPending ? "pending" : isActive ? "active" : ""
            }
        >
          Home
        </NavLink></li>
        <li><NavLink
            to="/assignments"
            className={({ isActive, isPending }) =>
                isPending ? "pending" : isActive ? "active" : ""
            }
        >
            Assignments
        </NavLink></li>
        <li><NavLink
            to="/create"
            className={({ isActive, isPending }) =>
                isPending ? "pending" : isActive ? "active" : ""
            }
        >
            Create assignments
        </NavLink></li>
        <li><NavLink
            to="/submitted"
            className={({ isActive, isPending }) =>
                isPending ? "pending" : isActive ? "active" : ""
            }
        >
            Submitted Assignments
        </NavLink></li>
    
    </>
    
    const handlelogout = () =>{
      
            logout()
                .then(() => {
                    console.log('user succecfully')
                })
                .catch(error => {
                    console.log(error)
                })
      

    }


    return (
        <div className="navbar bg-base-100">
            <div className="navbar-start">
                <div className="dropdown">
                    <label tabIndex={0} className="btn btn-ghost lg:hidden">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
                    </label>
                    <ul tabIndex={0} className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52">
                      {links}
                    </ul>
                </div>

                <img className="w-[120px]" src={'https://i.ibb.co/XZkh1j8/logo-removebg-preview.png'} alt="" />

            </div>
            <div className="navbar-center hidden lg:flex">
                <ul className="menu menu-horizontal px-1">
                    {links}
                </ul>
            </div>
            <div className="navbar-end -mt-4">
                { user?.email ? <div className="dropdown dropdown-end">
                    <label tabIndex={0} className="btn btn-ghost rounded-btn"><img className="w-[80px] rounded-full" src={user.photoURL } alt="" /></label>
                    <ul tabIndex={0} className="menu dropdown-content z-[1] p-2 shadow bg-base-100 rounded-box w-52 mt-4">
                        <li><button onClick={handlelogout}>logout</button></li>
                     
                    </ul>
                </div> : <Link to={'/login'}><button className="btn mr-5">Login</button></Link>
             
            }
                  

            </div>
        </div>
    );
};

export default Navbar;