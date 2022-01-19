import convertDate from "./convertDate.js";

export default function populateTemplate(weatherData) {
    const {cityName,currentDate,currentTemp,currentMinTemp,currentMaxTemp,currentWeatherDescription,currentWeatherIcon} = weatherData.data;

    document.getElementById('weather-city-name').innerText = cityName;
    document.getElementById('date').innerText = convertDate(currentDate);
    document.getElementById('current-weather-icon').setAttribute('src',`http://openweathermap.org/img/wn/${currentWeatherIcon}.png`);
    document.getElementById('current-weather-temperature').innerText = currentTemp + String.fromCharCode(176);
    document.getElementById('current-weather-description').innerText = currentWeatherDescription;
    document.getElementById('current-min').innerText = currentMinTemp + String.fromCharCode(176);
    document.getElementById('current-max').innerText = currentMaxTemp + String.fromCharCode(176);
}