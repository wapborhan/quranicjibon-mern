import axios from "axios";

const axiosPublic = axios.create({
  baseURL: `${import.meta.env.VITE_BAKEND_URL}/api`,
});

const useAxiosPublic = () => {
  return axiosPublic;
};

export default useAxiosPublic;
