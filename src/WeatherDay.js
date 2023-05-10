import React from "react";
import WeatherIcon from "./WeatherIcon";
import "./WeatherForecast.css";

export default function WeatherDay(props) {
  function day() {
    let date = new Date(props.data.dt * 1000);
    let day = date.getDay();
    let days = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"];
    return days[day];
  }
  function maxTemperature() {
    let temperature = Math.round(props.data.temp.max);
    return `${temperature}`;
  }
  function minTemperature() {
    let temperature = Math.round(props.data.temp.min);
    return `${temperature}`;
  }
  return (
    <div>
      <div className="weekDay">{day()}</div>
      <WeatherIcon code={props.data.weather[0].icon} size={36} />
      <div>
        <span className="forecastTemperature-max">{maxTemperature()}°</span>
        <span className="forecastTemperature-min">{minTemperature()}°</span>
      </div>
    </div>
  );
}
