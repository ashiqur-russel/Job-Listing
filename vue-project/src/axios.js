import axios from "axios";

const instance = axios.create({
  //baseURL: "https://job-listing-sepia.vercel.app/",
  // Here for a purpose I have showed the server utl; for production grade it should be
  // Hidden ; usin .env or config file
  baseURL: "http://localhost:5000/",

  //baseURL: import.meta.env.VITE_API_URL_DEV,
});

export default instance;
