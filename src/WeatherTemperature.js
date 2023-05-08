import React, { useState } from "react";

export default function WeatherTemperature(props) {
  const [unit, setUnit] = useState("celsius");
  function convertToFahrenheit(event) {
    event.preventDefault();
    setUnit("fahrenheit");
  }
  function convertToCelsius(event) {
    event.preventDefault();
    setUnit("celsius");
  }
  if (props.unit === "celsius") {
    return (
      <div className="weatherTemperature">
        <span className="temperature">
          Temperature: {Math.round(props.celsius)}
        </span>
        <span className="unit">
          °C |
          <a href="/" onClick={convertToFahrenheit}>
            °F
          </a>
        </span>
      </div>
    );
  } else {
    let fahrenheit = props.celsius ? (props.celsius * 9) / 5 + 32 : 0;

    return (
      <div className="weatherTemperature">
        <span className="temperature">
          Temperature: {Math.round(fahrenheit)}
        </span>
        <span className="unit">
          <a href="/" onClick={convertToCelsius}>
            °C
          </a>
          | °F
        </span>
      </div>
    );
  }
}
