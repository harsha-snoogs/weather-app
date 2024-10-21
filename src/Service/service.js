import { getCityUrl } from './endpoints'
import {authDetails } from './authDetails'

const getWeatherDetails = (city) => {
    fetchReq(city);
}
const createCityUrlBasedOnParams = (params)=> {
    const {city,limit} = params;
    return `${getCityUrl}?q=${city}&limit=5&appid=${authDetails.apiKey}`
}

const fetchReq = async (cityName)=> {
    const params = createCityUrlBasedOnParams({city:cityName, limit: 5})
    const promiseResponse = await fetch(params);
    const parsedResponse = await promiseResponse.json();
    console.log(parsedResponse);
    return parsedResponse;
}

export default getWeatherDetails;