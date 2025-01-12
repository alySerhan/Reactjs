import React from "react";
import useFetch from "./useFetch";
import humidity from "./images/humidity.png";
import wind from "./images/wind.png";
import loading from "./images/loading.png";
import cloud from "./images/cloud.png";
import rain from "./images/rain.png";
import MobileWeather11 from "./MobileWeather2";

const MobileWeather = () => {
  const apikey = "792c9d997c447b4ee6816f5756557494";

  const urlWeather = `https://api.openweathermap.org/data/2.5/weather?q=beirut&appid=04ec91e33b00e69a6a1bafd7039b6dae&units=metric`;
  const {
    data: weather,
    error: error1,
    loading: loading1,
  } = useFetch(urlWeather);

  if (loading1) return <img width="90" src={loading} alt="loading " />;
  if (error1) return <p>Error fetching Beirut data: {error1.message}</p>;

  const rainVolume = weather.rain ? weather.rain["3h"] : null;

  const date = new Date(Date.now());
  const options = {
    weekday: "long",
    year: "numeric",
    month: "long",
    day: "numeric",
  };
  const formattedDate = date.toLocaleDateString(undefined, options);

  return (
    <div>
      {weather ? (
        <div className="weather-container-1">
          <h1 className="city-name-1">{weather.name}</h1>
          <h1 className="temperature-1">{Math.round(weather.main.temp)}° </h1>
          <p className="date-1">{formattedDate}</p>
          <div
            className="weather-icon-1"
            style={{
              backgroundImage: `url(http://openweathermap.org/img/wn/${weather.weather[0].icon}@2x.png)`,
            }}
          >
            <h3 className="icon-description-1">{weather.weather[0].main}</h3>
          </div>
          <div className="weather-details-1">
            <div className="detail-1">
              <img className="detail-icon-1" src={wind} alt="wind" />
              <p className="detail-value-1">
                {Math.round(weather.wind.speed * 3.6)} km/h
              </p>
              <p className="detail-label-1">Wind</p>
            </div>

            <div className="detail-1">
              <img className="detail-icon-1" src={humidity} alt="humidity" />
              <p className="detail-value-1">{weather.main.humidity}%</p>
              <p className="detail-label-1">Humidity</p>
            </div>

            {rainVolume && (
              <div className="detail-1">
                <img className="detail-icon-1" src={rain} alt="rain" />
                <p className="detail-value-1">{weather.main.rain}%</p>
                <p className="detail-label-1">rain</p>
              </div>
            )}

            <div className="detail-1">
              <img className="detail-icon-1" src={cloud} alt="cloud" />
              <p className="detail-value-1">{weather.clouds.all}%</p>
              <p className="detail-label-1">Cloud</p>
            </div>
          </div>{" "}
          <div className="week-1">
            <MobileWeather11 />
          </div>
        </div>
      ) : (
        <div>Loading.... </div>
      )}
    </div>
  );
};

export default MobileWeather;
