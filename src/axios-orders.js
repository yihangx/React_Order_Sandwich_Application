import axios from 'axios';

const instance = axios.create({
    baseURL: 'https://order-sandwich-51dc1.firebaseio.com/'
});

export default instance;
