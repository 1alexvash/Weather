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
    try {
      const location = await axios.get(
        "http://api.ipstack.com/46.173.121.249?access_key=80d851c0cffdc633c1a7210ef2f454e7"
      );
      fetchWeatherData(location.data.city);
    } catch (err) {
      alert(err);
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
      alert(err);
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
