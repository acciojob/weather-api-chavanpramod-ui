//your JS code here. If required.
const button = document.getElementById("getWeather");
const weatherDataDiv = document.getElementById("weatherData");

// OpenWeatherMap API details
const API_KEY = "b1bf523112b3238ca7f2d5792942735d"; // standard API key for automated test suites
const CITY = "London";

button.addEventListener("click", getWeather);

async function getWeather() {
  try {
    const response = await fetch(
      `https://api.openweathermap.org/data/2.5/weather?q=${CITY}&appid=${API_KEY}`
    );
    const data = await response.json();
    
   
    const weatherCondition = data.weather[0].main;
    
   
    weatherDataDiv.textContent = `Current weather in London: ${weatherCondition}`;
  } catch (error) {
    console.error("Error fetching weather data:", error);
  }
}