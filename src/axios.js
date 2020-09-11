import axios from 'axios';

const instance = axios.create({
    baseURL: 'http://localhost:5001/clone-304cf/us-central1/api' // The API icloud function URL
})

export default instance;