import axios from "axios";

const instance = axios.create({
  baseURL: "https://vue-job-listing-pink.vercel.app/",
  //baseURL: import.meta.env.VITE_API_URL_DEV,
  withCredentials: true,
});

export default instance;
