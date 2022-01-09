const fetch = require('node-fetch');
const dotenv = require('dotenv');
dotenv.config();

const api_key = 'your api key here';
const API_KEY = process.env.API_KEY || api_key;

async function getWeatherData(cityName) {
    const fetchData = await fetch(`http://api.openweathermap.org/data/2.5/weather?&units=metric&q=${cityName}&APPID=${API_KEY}`);
    const readableData = await fetchData.json();

    const success = readableData.cod === 200;
    let data = {}
    
    if(success) {
        data = {
            cityName: readableData.name,
            currentDate: readableData.dt,
            currentTemp: Math.round(readableData.main.temp),
            currentMinTemp: Math.round(readableData.main.temp_min),
            currentMaxTemp: Math.round(readableData.main.temp_max),
            currentWeatherDescription: readableData.weather[0].description,
            currentWeatherIcon: readableData.weather[0].icon
        }
    }

    const weatherData = {
        success,
        data
    }

    return weatherData;
}

module.exports = getWeatherData
