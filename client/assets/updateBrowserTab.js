function updateWebsiteTitle(weatherData) {
    const {cityName,currentTemp} = weatherData.data
    document.title = `Weather forecast | ${cityName} ${currentTemp + String.fromCharCode(176)}`;
}

function updateFavicon(weatherData) {
    const {currentWeatherIcon} = weatherData.data;

    const documentHead = document.getElementsByTagName('head')[0];
    let newFaviconLink = document.createElement('link');
    let currentFaviconLink = document.querySelector("link[rel~='icon']");

    newFaviconLink.rel = 'shortcut icon';
    newFaviconLink.href = `http://openweathermap.org/img/wn/${currentWeatherIcon}.png`;

    if(currentFaviconLink) documentHead.removeChild(currentFaviconLink);
    document.head.appendChild(newFaviconLink);
}

export default function updateBrowserTab(weatherData) {
    updateWebsiteTitle(weatherData);
    updateFavicon(weatherData);
}