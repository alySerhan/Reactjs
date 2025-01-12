import React from "react";
import humidity from "./images/humidity.png";
import wind from "./images/wind.png";
import temp from "./images/temparature.png";
import rain from "./images/rain.png";

const MobileWeatherdet = ({ item }) => {
  const rainVolume = item.rain ? item.rain["3h"] : 0;

  return (
    <div>
      <p
        style={{
          fontSize: "1.6rem",
          textAlign: "start",
          padding: "0 0 0 1rem",
        }}
      >
        {item.weather[0].description}
      </p>
      <div className="detail-container">
        {[
          {
            img: temp,
            title: "Feels Like",
            value: Math.round(item.main.feels_like - 273.15) + " °C",
          },
          {
            img: temp,
            title: "Max Temp",
            value: Math.round(item.main.temp_max - 273.15) + " °C",
          },
          {
            img: temp,
            title: "Min Temp",
            value: Math.round(item.main.temp_min - 273.15) + " °C",
          },
          {
            img: humidity,
            title: "Humidity",
            value: item.main.humidity + " %",
          },
          {
            img: wind,
            title: "Wind Speed",
            value: Math.round(item.wind.speed * 3.6) + " km/h",
          },
          {
            img: rain,
            title: "Rain",
            value: rainVolume > 0 ? `${rainVolume} mm` : "0 mm",
          },
        ].map((detail, index) => (
          <div className="detail-card" key={index}>
            <div className="detail-title">
              <img
                src={detail.img}
                alt={detail.title}
                width="30px"
                height="30px"
              />
              <p>{detail.title}:</p>
            </div>
            <div className="detail-content">
              <p>{detail.value}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default MobileWeatherdet;
