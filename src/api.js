import axios from 'axios';

export default axios.create ({
    baseURL: 'https://api.unsplash.com/',
    headers: {
        Authorization: 'Client-ID ko_0ax1-WhH5vImIcvIJozv9NVyLGMWjnmQ8L81FECU'
    }
})
