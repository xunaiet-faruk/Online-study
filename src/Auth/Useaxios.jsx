import axios from "axios";

const instance = axios.create({
    baseURL: 'https://onlice-course-backend.vercel.app',
    withCredentials: true
})
const Useaxios = () => {
    return instance;

};

export default Useaxios;