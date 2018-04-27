import axios from 'axios';

const API_KEY = 'a6345509fd1aabb76c87ad77ea5fee3d';
const ROOT_URL = `http://api.openweathermap.org/data/2.5/forecast?`;


export const FETCH_WEATHER = 'FETCH_WEATHER';

export function fetchWeather(city){
    const url = `${ROOT_URL}&q=${city},ca&appid=${API_KEY}`;
    const request = axios.get(url);

    return {
        type: FETCH_WEATHER,
        payload: request
    };
};