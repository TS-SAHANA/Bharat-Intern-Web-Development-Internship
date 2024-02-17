function getWeather() {
    const apiKey = '3d705e4b300169bfd78d4a6cb34b03eb';
    const cityInput = document.getElementById('city-input');
    const cityName = cityInput.value;
    const weatherInfo = document.getElementById('weather-info');

    if (!cityName) {
        alert('Please enter a city name.');
        return;
    }

    const apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${cityName}&appid=${apiKey}&units=metric`;

    fetch(apiUrl)
        .then(response => response.json())
        .then(data => {
            const country = data.sys.country;
            document.getElementById('country').innerText = country;
            document.getElementById('temperature').innerText = data.main.temp;
            document.getElementById('description').innerText = data.weather[0].description;
            document.getElementById('humidity').innerText = data.main.humidity;
            document.getElementById('wind-speed').innerText = data.wind.speed;

            // Set weather icon
            const iconCode = data.weather[0].icon;
            const iconUrl = `http://openweathermap.org/img/wn/${iconCode}.png`;
            document.getElementById('weather-icon').src = iconUrl;

            // Show the weather-info div
            weatherInfo.style.display = 'block';
        })
        .catch(error => {
            console.error('Error fetching weather data:', error);
            alert('Error fetching weather data. Please try again.');
        });
}
