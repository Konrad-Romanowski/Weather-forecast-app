const searchBtn = document.getElementById('submit-button');
const cityNameInput = document.getElementById('search-input');
let cityName = localStorage.getItem('cityName') || 'Warsaw';

window.onload = async function (){
    const weatherData = await getWeatherData(cityName);
    populateTemplate(weatherData);
}

searchBtn.addEventListener('click',async e=>{
    e.preventDefault();

    cityName = cityNameInput.value;
    if(cityName.length < 1) return;
    cityNameInput.value = '';
    localStorage.setItem('cityName',cityName);

    const weatherData = await getWeatherData(cityName);

    populateTemplate(weatherData);
});

async function getWeatherData(cityName) {
    const fetchData = await fetch(`/weather/${cityName}`);
    const weatherData = await fetchData.json();

    return weatherData;
}