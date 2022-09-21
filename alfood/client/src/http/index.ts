import axios from "axios";

const httpAdmin = axios.create({
    baseURL: 'http://localhost:8000/api/v2/'
});

export default httpAdmin;
