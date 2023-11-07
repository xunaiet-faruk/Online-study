import { Link } from "react-router-dom";


const Error = () => {
    return (
        <div>

            <h1 className="text-4xl font-semibold text-center mt-52"><span className="text-red-500 font-bold">404 </span>
                This page could not be found.</h1>

            <div className="text-center mt-5">
                <Link to={'/'}><button className="btn btn-outline btn-secondary">GO Home</button></Link>
            </div>
            
        </div>
    );
};

export default Error;