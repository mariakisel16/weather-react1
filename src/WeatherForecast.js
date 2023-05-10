import React, { useEffect, useState } from "react";

import WeatherDay from "./WeatherDay";
import "./WeatherForecast.css";
import axios from "axios";

export default function WeatherForecast(props) {
  const [loaded, setLoaded] = useState(false);
  const [forecast, setForecast] = useState([]);

  useEffect(() => {
    setLoaded(false); // Reset flag when props change
  }, [props.coordinates]);

  console.log({ props });
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
        </div>
      </div>
    );
  } else {
    if (!props.coordinates) return;
    let apiKey = "9eca7aac0b071aa16e3cb063adba0785";
    let apiUrl = `https://api.openweathermap.org/data/2.5/onecall?lat=${props.coordinates.lat}&lon=${props.coordinates.lon}&appid=${apiKey}&units=metric`;
    axios.get(apiUrl).then((response) => {
      setForecast(response.data.daily);
      setLoaded(true);
    });
    return null;
  }
}
