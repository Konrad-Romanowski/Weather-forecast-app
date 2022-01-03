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
    console.log(`Got request, city name: ${req.params.cityName}`);
    const cityName = req.params.cityName;

    const fetchData = await fetch(`http://api.openweathermap.org/data/2.5/weather?&units=metric&q=${cityName}&APPID=${API_KEY}`);
    const readableData = await fetchData.json();

    console.log(readableData);


});


app.listen(PORT,console.log(`Server running on port ${PORT}...`));