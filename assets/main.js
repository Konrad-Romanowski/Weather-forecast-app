const searchBtn = document.getElementById('submit-button');
const cityNameInput = document.getElementById('search-input');
let cityName;

searchBtn.addEventListener('click',async e=>{
    e.preventDefault();

    cityName = cityNameInput.value;
    if(cityName.length < 1) return;
    cityNameInput.value = '';

    const fetchData = await fetch(`/weather/${cityName}`);
    const weatherData = await fetchData.json();

    populateTemplate(weatherData);
});