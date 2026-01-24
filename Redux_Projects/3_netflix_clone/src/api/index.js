import axios from "axios";

// api anahtarini gizlemek icin! (kimse tarafindan görülmez)
// console.log(import.meta.env);

const api = axios.create(
    {
        baseURL: "https://api.themoviedb.org/3",
        headers: {
            accept: 'application/json',
            Authorization: `Bearer ${import.meta.env.VITE_API_KEY}`
        }
    }
);

export default api;