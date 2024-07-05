document.getElementById('search-form').addEventListener('submit', function (event) {
    event.preventDefault();
    const city = document.getElementById('city').value;

    // Replace 'YOUR_API_KEY' with your actual API key from a weather service provider
    fetch(`https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=bc196ad46ff55ae6010be75e989bb44a&units=metric`)
        .then(response => response.json())
        .then(data => {
            const { main, weather } = data;

            // Update weather tab
            document.getElementById('weather-data').textContent = weather[0].main;

            // Update description tab
            document.getElementById('description-data').textContent = weather[0].description;

            // Update temperature tab
            document.getElementById('temperature-data').textContent = `${Math.round(main.temp)}°C`;

            // Update highest temperature tab
            document.getElementById('highest-data').textContent = `${Math.round(main.temp_max)}°C`;

            // Update lowest temperature tab
            document.getElementById('lowest-data').textContent = `${Math.round(main.temp_min)}°C`;
            document.getElementById('feel-data').textContent = `${Math.round(main.feels_like)}°C`;

            // Display weather information by default
            document.getElementById('weather').style.display = 'block';
            document.getElementById('description').style.display = 'block';
            document.getElementById('temperature').style.display = 'block';
            document.getElementById('highest').style.display = 'none';
            document.getElementById('lowest').style.display = 'none';
            document.getElementById('feels-like').style.display = 'block';


        })
        .catch(error => {
            console.error('Error fetching weather data:', error);
            document.getElementById('weather-info').innerHTML = '<p>Weather information not available. Please try again later.</p>';
        });
});
