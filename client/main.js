const searchBtn = document.getElementById('submit-button');
const cityNameInput = document.getElementById('search-input');
let cityName = localStorage.getItem('cityName') || 'Warsaw';

import getWeatherData from './assets/getWeatherData.js';
import populateTemplate from './assets/populateTemplate.js';
import updadeBrowserTab from './assets/updateBrowserTab.js';

window.onload = async function() {
    const weatherData = await getWeatherData(cityName);
    populateTemplate(weatherData);
    updadeBrowserTab(weatherData);
}

searchBtn.addEventListener('click', async e =>{

    e.preventDefault(); 
    
    cityName = cityNameInput.value;
    if(cityName.length < 1) return;
    cityNameInput.value = '';

    const weatherData = await getWeatherData(cityName);
    if(weatherData.success) {
        localStorage.setItem('cityName',cityName);
        populateTemplate(weatherData);
        updadeBrowserTab(weatherData);
    }
});