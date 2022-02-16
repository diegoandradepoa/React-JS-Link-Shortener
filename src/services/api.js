import axios from 'axios';

import authorization from './key';

const api = axios.create({
    baseURL: 'https://api-ssl.bitly.com/v4',
    headers:{
        'Authorization': `Bearer ${authorization()}`
    }
})

export default api;

