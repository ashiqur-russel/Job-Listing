import axios from "axios";

const instance = axios.create({
  baseURL: "https://job-listing-sepia.vercel.app/",
  headers: {
    "Content-Type": "application/json",
  },
  withCredentials: true,
  //baseURL: import.meta.env.VITE_API_URL_DEV,
});

export default instance;
