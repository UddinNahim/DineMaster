import axios from "axios";

const axiosPublic = axios.create({
    // baseURL: 'https://restaurant-server-7g5c.onrender.com'
    baseURL: 'http://localhost:5000/'
})
const useAxiosPublic = () => {

    return axiosPublic


};

export default useAxiosPublic;