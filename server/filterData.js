function filterData(readableWeatherData) {
    const data = {
        cityName: readableWeatherData.name,
        currentDate: readableWeatherData.dt,
        currentTemp: Math.round(readableWeatherData.main.temp),
        currentMinTemp: Math.round(readableWeatherData.main.temp_min),
        currentMaxTemp: Math.round(readableWeatherData.main.temp_max),
        currentWeatherDescription: readableWeatherData.weather[0].description,
        currentWeatherIcon: readableWeatherData.weather[0].icon
    }

    return data;
}

module.exports = filterData;