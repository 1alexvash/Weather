import React, { Fragment } from "react";

const WeatherDetails = ({ temperature, time }) => (
  <Fragment>
    <div className="temp">{temperature} °C</div>
    <div className="time">{time}</div>
  </Fragment>
);

export default WeatherDetails;
