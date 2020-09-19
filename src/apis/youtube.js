import axios from 'axios';
import config from '../config/keys';

export async function searchVideos(term) {
    const response = await axios.get('https://www.googleapis.com/youtube/v3/search',{
        params:{
            part: 'snippet',
            type: 'video',
            q: term,
            maxResults: 50,
            key: config.ACCESSKEY
        }
    });
    return response.data.items;
}