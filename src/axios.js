import axios from "axios";

const instance = axios.create({
    baseURL: "https://api.themoviedb.org/3"
})
// so if we do instance.get('/foo-bar) - it will be like https://api.themoviedb.org/3/foo-bar

export default instance;