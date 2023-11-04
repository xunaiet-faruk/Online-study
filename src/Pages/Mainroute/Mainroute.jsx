import { Outlet } from "react-router-dom";
import Navbar from "../Navbar/Navbar";
import Fotter from "../../Component/Fottter/Fotter";
const Mainroute = () => {
    return (
        <div>
            <Navbar></Navbar>
            <Outlet></Outlet>
            <Fotter></Fotter>
         
        </div>
    );
};

export default Mainroute;