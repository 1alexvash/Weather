import React, { useState, useEffect, Fragment } from "react";
import axios from "axios";

import WeatherIcon from "./components/WeatherIcon";
import WeatherDetails from "./components/WeatherDetails";

import "./scss/main.css";

const App = () => {
  const [state, setState] = useState({
    dataReady: false,
    icon: undefined,
    temperature: undefined,
    time: new Date().getHours() + ":" + new Date().getMinutes()
  });

  const fetchWeatherData = async (lat, lon) => {
    const city = "Lutsk";
    const appId = "4a7bba8e35b7bfadb8a039bd6b248e38";

    const weather = await axios.get(
      `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&APPID=${appId}&units=metric`
    );

    console.log(weather);
    if (weather.status === 200) {
      setState({
        ...state,
        dataReady: true,
        icon: weather.data.weather[0],
        temperature: Math.round(weather.data.main.temp)
      });
    }
    console.log(weather.data);
  };

  useEffect(() => {
    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition(async position => {
        const lat = position.coords.latitude;
        const lon = position.coords.longitude;
        fetchWeatherData(lat, lon);
      });
    }
    // eslint-disable-next-line
  }, []);

  return (
    <div className={`App time-${new Date().getHours()}`}>
      <div className="content">
        {state.dataReady ? (
          <Fragment>
            <WeatherIcon icon={state.icon} time={state.time} />
            <WeatherDetails temperature={state.temperature} time={state.time} />
          </Fragment>
        ) : (
          "Loading..."
        )}
      </div>
    </div>
  );
};

export default App;
