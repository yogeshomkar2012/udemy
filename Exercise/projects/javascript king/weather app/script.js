const apikey = "89fb0c99154619a764b1da3a58713073";

const weatherDataEl = document.getElementById("weather-data");

const cityInputEl = document.getElementById("city-input");

const formEl = document.querySelector("form");

formEl.addEventListener("submit", (event) => {
  event.preventDefault();
  const cityValue = cityInputEl.value;
  getWeatherData(cityValue);
});

async function getWeatherData(cityValue) {
  try {
    const response = await fetch(
      `https://api.openweathermap.org/data/2.5/weather?q=${cityValue}&appid=${apikey}&units=metric`
    );
    if (!response.ok) {
      throw new Error("Network Response Was Not Ok");
    }
    const data = await response.json();
    const temperature = Math.round(data.main.temp);
    const description = data.weather[0].description;
    const icon = data.weather[0].icon;
    const detailes = [
      `Feels like : ${data.main.feels_like}`,
      `Humidity : ${data.main.humidity}`,
      `Wind Speed : ${data.wind.speed}`,
    ];
    weatherDataEl.querySelector(".icon").innerHTML = ` <img
      src="http://openweathermap.org/img/wn/${icon}.png"
      alt="Weather Icon"
    />`;
    weatherDataEl.querySelector(
      ".temperature"
    ).textContent = `${temperature}°C`;
    weatherDataEl.querySelector(".description").textContent = description;
    weatherDataEl.querySelector(".city").textContent = data.name;
    weatherDataEl.querySelector(".details").innerHTML = detailes
      .map((deatile) => `<div>${deatile}</div>`)
      .join("");
    cityInputEl.value = "";
  } catch (error) {
    weatherDataEl.querySelector(".icon").innerHTML = "";
    weatherDataEl.querySelector(".temperature").textContent = "";
    weatherDataEl.querySelector(".description").textContent =
      "An error happened, please try again later";

    weatherDataEl.querySelector(".details").innerHTML = "";
  }
}
