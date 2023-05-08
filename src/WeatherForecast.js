import React from "react";
import WeatherIcon from "./WeatherIcon";
import "./WeatherForecast.css";

export default function WeatherForecast() {
  return (
    <div className="weatherForecast">
      <div className="row">
        <div className="col">
          <div className="weekDay">Mon</div>
          <div className="forecastIcon">
            <WeatherIcon code="01d" size={50} />
          </div>
          <span className="forecastTemperature-max">19°</span>
          <span className="forecastTemperature-min">10°</span>
        </div>
      </div>
    </div>
  );
}
