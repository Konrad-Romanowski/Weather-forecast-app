const fetch = require('node-fetch');
const dotenv = require('dotenv');
dotenv.config();

const filterData = require('./filterData');

const api_key = 'your api key here';
const API_KEY = process.env.API_KEY || api_key;

async function getWeatherDataFromAPI(cityName) {
    const fetchData = await fetch(`http://api.openweathermap.org/data/2.5/weather?&units=metric&q=${cityName}&APPID=${API_KEY}`);
    const readableData = await fetchData.json();

    const success = readableData.cod === 200;
    let data = {}
    
    if(success) data = filterData(readableData);

    const weatherData = {
        success,
        data
    }

    return weatherData;
}

module.exports = getWeatherDataFromAPI
