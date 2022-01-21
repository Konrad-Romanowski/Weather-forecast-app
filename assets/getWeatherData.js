export default async function getWeatherData(cityName) {
    const fetchData = await fetch(`/weather/${cityName}`);
    const weatherData = await fetchData.json();

    return weatherData;
}