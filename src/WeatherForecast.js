import React, { useEffect, useState } from "react";
import WeatherIcon from "./WeatherIcon";
import WeatherDay from "./WeatherDay";
import "./WeatherForecast.css";
import axios from "axios";

export default function WeatherForecast(props) {
  let [loaded, setLoaded] = useState(false);
  let [forecast, setForecast] = useState([]);

  useEffect(() => {
    setLoaded(false);
  }, [props.coordinates]);

  function handleForecast(response) {
    setForecast(response.data.daily);
    setLoaded(true);
  }

  if (loaded) {
    return (
      <div className="weatherForecast">
        <div className="row">
          {forecast.slice(0, 5).map((dailyForecast, index) => (
            <div className="col" key={index}>
              <div className="weekDay">
                <WeatherDay data={dailyForecast} />
              </div>
            </div>
          ))}

          <div className="forecastIcon">
            <WeatherIcon code={forecast[0].weather[0].icon} size={50} />
          </div>
          <span className="forecastTemperature-max">
            {Math.round(forecast[0].temp.max)}°
          </span>
          <span className="forecastTemperature-min">
            {Math.round(forecast[0].temp.min)}°
          </span>
        </div>
      </div>
    );
  } else {
    let longitude = props.coordinates.lon;
    let latitude = props.coordinates.lat;
    let apiKey = `9eca7aac0b071aa16e3cb063adba0785`;
    let apiUrl = `https://api.openweathermap.org/data/2.5/onecall?lat=${latitude}&lon=${longitude}&appid=${apiKey}&units=metric`;
    axios.get(apiUrl).then(handleForecast);

    return null;
  }
}
