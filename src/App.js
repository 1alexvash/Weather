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
    city: undefined,
    time: new Date().getHours() + ":" + new Date().getMinutes()
  });

  const getCity = async () => {
    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition(async position => {
        const lat = position.coords.latitude;
        const lon = position.coords.longitude;

        try {
          const location = await axios.get(
            `https://api.opencagedata.com/geocode/v1/json?q=${lat}%2C+${lon}&key=83cdb08ee1ff42b388fca37dd29a98a9&pretty=1`
          );
          fetchWeatherData(location.data.results[0].components.town);
        } catch (err) {
          console.log(err);
        }
      });
    }
  };

  const fetchWeatherData = async city => {
    const appId = "4a7bba8e35b7bfadb8a039bd6b248e38";

    try {
      const weather = await axios.get(
        `https://api.openweathermap.org/data/2.5/weather?q=${city}&APPID=${appId}&units=metric`
      );
      if (weather.status === 200) {
        setState({
          ...state,
          dataReady: true,
          icon: weather.data.weather[0],
          city,
          temperature: Math.round(weather.data.main.temp)
        });
      }
    } catch (err) {
      console.log(err);
    }
  };

  useEffect(() => {
    getCity();
    // eslint-disable-next-line
  }, []);

  return (
    <div className={`App time-${new Date().getHours()}`}>
      <div className="content">
        {state.dataReady ? (
          <Fragment>
            <WeatherIcon icon={state.icon} time={state.time} />
            <WeatherDetails
              temperature={state.temperature}
              city={state.city}
              time={state.time}
            />
          </Fragment>
        ) : (
          "Loading..."
        )}
      </div>
    </div>
  );
};

export default App;