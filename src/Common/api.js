import axios from 'axios';
import { APIURL } from './Constants';

const api = axios.create({
    baseURL: 'https://api.themoviedb.org/3/',
    params: {
        api_key: '0a62ef0ec3549085576597d8277503f9',
        language: 'en-US'
    }
})

export const movieApi = {
    nowPlaying: () => api.get(APIURL.MOVIE.NOWPLAYING),
    upcoming: () => api.get(APIURL.MOVIE.UPCOMING),
    popular: () => api.get(APIURL.MOVIE.POPULAR)
}

export const tvApi = {
    topRated: () => api.get(APIURL.TV.TOPRATED),
    popular: () => api.get(APIURL.TV.POPULAR),
    airingToday: () => api.get(APIURL.TV.AIRINGTODAY)
}