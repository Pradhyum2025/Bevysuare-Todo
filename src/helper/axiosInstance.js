import axios from "axios";

const axiosInstance = axios.create();
axiosInstance.defaults.withCredentials=true
axiosInstance.defaults.baseURL='http://localhost:4040/'

export default axiosInstance;