import axios from 'axios';

const KEY = 'AIzaSyAhm8MLCjeY-m1Yeh8bjDzzfcZ6XfGaNK0';

export default axios.create({
    baseURL: 'https://www.googleapis.com/youtube/v3',
    params: {
        part: 'snippet',
        maxResults: 5,
        key: KEY
    }
})