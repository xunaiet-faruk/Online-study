import { useContext, useEffect, useState } from "react";
import { Authcontext } from "../../Auth/Authprovider";
import Userdatasingle from "./Userdatasingle";

const Myassinments = () => {
    const [myassinmnet, setAssinment] = useState([])
    const { user } = useContext(Authcontext)

    useEffect(() => {

        fetch(`http://localhost:5000/fromassinmetns?useremail=${user.email}`)
            .then(res => res.json())
            .then(data => setAssinment(data))

    }, [])
   

    return (
        <div>
            <div>
                <div className="overflow-x-auto">
                    <table className="table">
                        {/* head */}
                        <thead>
                            <tr>
                                <th>
                                    <label>
                                        <input type="checkbox" className="checkbox" />
                                    </label>
                                </th>
                                <th>Name</th>
                                <th>Marks</th>
                                <th>Status</th>
                                <th>Fedback</th>
                            </tr>
                        </thead>
                        <tbody>
                    

                            {

                                myassinmnet.map((item, idx) => <Userdatasingle key={idx} item={item}> </Userdatasingle>)

                            }

                        </tbody>
                        {/* foot */}


                    </table>
                </div>
            </div>

        </div>
    );
};

export default Myassinments;