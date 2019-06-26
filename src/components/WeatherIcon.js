import React from "react";

const WeatherIcon = ({ icon }) => {
  const dayOrNight = icon.icon[icon.icon.length - 1];

  return (
    <div className="icon">
      <i className={`owf owf-${icon.id}-${dayOrNight}`} />
    </div>
  );
};

export default WeatherIcon;
