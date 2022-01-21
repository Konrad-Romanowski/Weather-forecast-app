const express = require('express');
const path = require('path');
const app = express();
const getWeatherDataFromAPI = require('./getWeatherDataFromAPI');

const dotenv = require('dotenv');
dotenv.config();

const PORT = process.env.PORT || 3000;

app.use('/public',express.static(path.join(__dirname,'assets')));

app.get('/',(req,res)=>{
    res.sendFile(path.join(__dirname,'assets','index.html'));
});

app.get('/weather/:cityName', async (req,res)=>{
    const cityName = req.params.cityName;
    const weatherData = await getWeatherDataFromAPI(cityName);

    res.send(weatherData);
});


app.listen(PORT,console.log(`Server running on port ${PORT}...`));