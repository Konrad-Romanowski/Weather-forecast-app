const express = require('express');
const path = require('path');
const app = express();

const fetch = require('node-fetch');
const dotenv = require('dotenv');
dotenv.config();

const PORT = process.env.PORT || 3000;

const api_key = 'your api key here';
const API_KEY = process.env.API_KEY || api_key;

app.use('/public',express.static(path.join(__dirname,'assets')));

app.get('/',(req,res)=>{
    res.sendFile(path.join(__dirname,'assets','index.html'));
});

app.get('/weather/:cityName', async (req,res)=>{
    const cityName = req.params.cityName;

    const fetchData = await fetch(`http://api.openweathermap.org/data/2.5/weather?&units=metric&q=${cityName}&APPID=${API_KEY}`);
    const readableData = await fetchData.json();

    const weatherData = {
        cityName: readableData.name,
        currentDate: readableData.dt,
        currentTemp: readableData.main.temp,
        currentMinTemp: readableData.main.temp_min,
        currentMaxTemp: readableData.main.temp_max,
        currentWeatherDescription: readableData.weather[0].description,
        currentWeatherIcon: readableData.weather[0].icon
    }

    res.send(weatherData);
});


app.listen(PORT,console.log(`Server running on port ${PORT}...`));