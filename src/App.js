import React, { useState, useEffect, Fragment } from "react";
import axios from "axios";

import Spinner from "./components/Spinner";
import WeatherIcon from "./components/WeatherIcon";
import WeatherDetails from "./components/WeatherDetails";

import "./scss/main.css";

const App = () => {
  const [state, setState] = useState({
    dataReady: false,
    icon: undefined,
    temperature: undefined,
    city: undefined,
    time: `${new Date().getHours()}:${
      new Date().getMinutes() >= 10
        ? new Date().getMinutes()
        : "0" + new Date().getMinutes()
    }`,
    status: <Spinner />
  });

  const getCity = async () => {
    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition(
        async position => {
          const lat = position.coords.latitude;
          const lon = position.coords.longitude;

          if (position === undefined) {
            setState({
              ...state,
              status: "Location data is not available"
            });
          }

          try {
            const location = await axios.get(
              `https://api.opencagedata.com/geocode/v1/json?q=${lat}%2C+${lon}&key=83cdb08ee1ff42b388fca37dd29a98a9&pretty=1`
            );
            fetchWeatherData(location.data.results[0].components.town);
          } catch (err) {
            setState({
              ...state,
              status: "Can't get location API"
            });
            console.log(err);
          }
        },
        err => {
          setState({
            ...state,
            status: "Geolocation data is not available"
          });
          console.log(err);
        }
      );
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
      setState({
        ...state,
        status: "Weather API is not available"
      });
      console.log(err);
    }
  };

  useEffect(() => {
    getCity();
    // eslint-disable-next-line
  }, []);

  const status = <Spinner />;

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
          state.status
        )}
      </div>
    </div>
  );
};

export default App;
