const searchBtn = document.getElementById('submit-button');
const cityNameInput = document.getElementById('search-input');
let cityName;

searchBtn.addEventListener('click',e=>{
    e.preventDefault();

    cityName = cityNameInput.value;
    if(cityName.length < 1) return;
    cityNameInput.value = '';

    console.log("Search button clicked!", cityName);
    fetch(`/weather/${cityName}`);
});