import axios from "axios";

const api = axios.create({
    baseURL: 'https://text-translator2.p.rapidapi.com',
    headers: {
        'x-rapidapi-key': 'b810de1a72mshbb44498f9ade78cp17adc3jsn5403ff1183c1',
        'x-rapidapi-host': 'text-translator2.p.rapidapi.com'
    },
});

export default api;