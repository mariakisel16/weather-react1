import React, { useState } from "react";
import axios from "axios";

export default function Weather() {
  let [city, setCity] = useState(" ");

  let [temperature, setTemperature] = useState(null);
  let [description, setDescription] = useState(null);
  let [humidity, setHumidity] = useState(null);
  let [wind, setWind] = useState(null);
  let [icon, setIcon] = useState(" ");

  function handleSubmit(event) {
    event.preventDefault();

    let url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=9eca7aac0b071aa16e3cb063adba0785&units=metric`;
    axios.get(url).then(showWeather);
  }

  function updateCity(event) {
    setCity(event.target.value);
  }
  function showWeather(response) {
    setTemperature(response.data.main.temp);
    setDescription(response.data.weather[0].main);
    setHumidity(response.data.main.humidity);
    setWind(response.data.wind.speed);
    setIcon(
      `http://openweathermap.org/img/wn/${response.data.weather[0].icon}@2x.png`
    );
  }

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <input type="search" placeholder="Type a city" onChange={updateCity} />
        <input type="submit" value="Search" />
      </form>

      <span className="weather-info">
        <ul>
          <li> Temperature: {Math.round(temperature)}°C </li>
          <li> Description: {description}</li>
          <li> Humidity: {humidity}%</li>
          <li> Wind: {Math.round(wind)}km/h</li>
          <li>
            <img src={icon} alt={description} />{" "}
          </li>
        </ul>
      </span>
      <span>
        The project is{" "}
        <a
          href="https://github.com/mariakisel16/weather-react1"
          target="_blank"
        >
          open-sourced
        </a>
        , and it was built by Maria Kisel
      </span>
    </div>
  );
}
