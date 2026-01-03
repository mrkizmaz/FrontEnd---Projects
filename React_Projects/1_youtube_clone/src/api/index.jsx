import axios from "axios";

const api = axios.create({
    baseURL: "https://yt-api.p.rapidapi.com",
    params: {
        geo: "TR",
        lang: "tr",
    },
    headers: {
        // 'x-rapidapi-key': 'b810de1a72mshbb44498f9ade78cp17adc3jsn5403ff1183c1',
        // 'x-rapidapi-host': 'yt-api.p.rapidapi.com'

        'x-rapidapi-key': 'a2e52a88fcmsh1f5f12c656d5790p1fb180jsn737d6a123b1f',
        'x-rapidapi-host': 'yt-api.p.rapidapi.com'
    },
});


export default api;