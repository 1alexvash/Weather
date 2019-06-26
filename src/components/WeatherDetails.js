import React, { Fragment } from "react";

const WeatherDetails = ({ temperature, city, time }) => (
  <Fragment>
    <div className="temp">{temperature} °C</div>
    <div className="city">{city}</div>
    <div className="time">{time}</div>
  </Fragment>
);

export default WeatherDetails;
