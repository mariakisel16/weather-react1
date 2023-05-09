import React, { useState, useEffect } from "react";
import axios from "axios";
import WeatherIcon from "./WeatherIcon";
import WeatherTemperature from "./WeatherTemperature";
import WeatherForecast from "./WeatherForecast";

export default function Weather() {
  let [city, setCity] = useState(" ");

  let [weatherData, setWeatherData] = useState({});

  function handleSubmit(event) {
    event.preventDefault();
    let apiKey = "9eca7aac0b071aa16e3cb063adba0785";
    let url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric`;
    axios.get(url).then(showWeather);
  }

  function updateCity(event) {
    setCity(event.target.value);
  }
  function showWeather(response) {
    setWeatherData({
      coordinates: response.data.coord,
      temperature: response.data.main.temp,
      description: response.data.weather[0].main,
      humidity: response.data.main.humidity,
      wind: response.data.wind.speed,
      icon: response.data.weather[0].icon,
    });
  }

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <span className="searchbar">
          <input
            type="search"
            placeholder="Type a city"
            onChange={updateCity}
          />
        </span>
        <input type="submit" className="btn btn-primary" value="Search" />
      </form>
      <span className="weather-info">
        <div className="row">
          <div className="col-6">
            <ul>
              <li>
                <WeatherTemperature celsius={weatherData.temperature || " "} />
              </li>
              <li> Description: {weatherData.description}</li>
              <li> Humidity: {weatherData.humidity}%</li>
              <li>
                {" "}
                Wind: {weatherData.wind ? Math.round(weatherData.wind) : ""}km/h
              </li>
            </ul>
          </div>
          <div className="col-6 align-items-center">
            <WeatherIcon code={weatherData.icon} size={80} />
          </div>
          <div>
            <WeatherForecast coordinates={weatherData.coordinates} />{" "}
          </div>
        </div>
      </span>
      <span>
        The project is{" "}
        <a
          href="https://github.com/mariakisel16/weather-react1"
          target="_blank"
          rel="noopener noreferrer"
        >
          open-sourced
        </a>
        , and it was built by Maria Kisel
      </span>
    </div>
  );
}
