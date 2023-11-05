import axios from "axios";

const instance =axios.create({
    baseURL:'http://localhost:5000',
    withCredentials:true
})
const Useaxios = () => {
    return instance;
    
};

export default Useaxios;