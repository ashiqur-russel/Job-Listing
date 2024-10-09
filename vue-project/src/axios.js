import axios from "axios";

const instance = axios.create({
  baseURL: import.meta.env.VITE_API_URL,
  //baseURL: import.meta.env.VITE_API_URL_DEV,
});

export default instance;
