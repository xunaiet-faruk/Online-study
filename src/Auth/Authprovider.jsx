import { createContext, useEffect, useState } from "react";
import { GoogleAuthProvider, createUserWithEmailAndPassword, getAuth, onAuthStateChanged, signInWithEmailAndPassword, signInWithPopup, signOut } from "firebase/auth";
import app from "../Firebase/Firebse";
import axios from "axios";

export const Authcontext = createContext(null)
const Googleprovider = new GoogleAuthProvider();
const Authprovider = ({ children }) => {
    const [loading, setloading] = useState(true)
    const [user, setStay] = useState(null)
    const auth = getAuth(app);

    const createuser = (email, password) => {
        setloading(true)
        return createUserWithEmailAndPassword(auth, email, password)
    }

    const signin = (email, password) => {
        setStay(true)
        return signInWithEmailAndPassword(auth, email, password)
    }

    const logout = () => {
        setloading(true)
        return signOut(auth)
    }

    const Googlesign = () => {
        setloading(true)
        return signInWithPopup(auth, Googleprovider)

    }
    useEffect(() => {

        const unsubscribe = onAuthStateChanged(auth, currenuser => {
            const userEmail =currenuser?.email || user?.email
            const logedEmail = { email: userEmail }
     
            setloading(false)
            setStay(currenuser)
            if(currenuser){
                axios.post('http://localhost:5000/jwt',logedEmail,{withCredentials:true})
                .then(res =>{
                    console.log("token response",res.data)
                })
            }else{
                axios.post('http://localhost:5000/logout',logedEmail,{withCredentials:true})
                .then(res =>{
                    console.log(res.data);
                })
            }
          
        })
        return () => {
            unsubscribe();
        }


    }, [])

    const Authemail = { createuser, signin, signOut, logout, user, Googlesign, loading }

    return (

        <Authcontext.Provider value={Authemail}>

            {children}

        </Authcontext.Provider>
    );
};

export default Authprovider;