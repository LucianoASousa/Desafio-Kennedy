import axios from 'axios';

const api = axios.create({
    baseURL: 'https://lively-moss-nudxlqdclfnd.vapor-farm-c1.com/api'
})

export default api;