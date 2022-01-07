const searchBtn = document.getElementById('submit-button');
const cityNameInput = document.getElementById('search-input');
let cityName = localStorage.getItem('cityName') || 'Warsaw';

window.onload = updateWeatherData(cityName);

searchBtn.addEventListener('click', e =>{
    e.preventDefault();

    cityName = cityNameInput.value;
    if(cityName.length < 1) return;
    cityNameInput.value = '';
    localStorage.setItem('cityName',cityName);

    updateWeatherData(cityName);
});

async function updateWeatherData(cityName) {
    const fetchData = await fetch(`/weather/${cityName}`);
    const weatherData = await fetchData.json();

    populateTemplate(weatherData);
}