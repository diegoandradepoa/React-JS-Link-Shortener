import axios from 'axios';

export const key = '054638913ac4f38d55ace6700e78e17acb173885';

const api = axios.create({
    baseURL: 'https://api-ssl.bitly.com/v4',
    headers:{
        'Authorization': `Bearer ${key}`
    }
})

export default api;

// minha chave: 054638913ac4f38d55ace6700e78e17acb173885
