import { useState, useEffect } from "react";
const Weeklyweather = () => {
  const [weather, setweather] = useState([]);
  const url =
    " http://api.openweathermap.org/data/2.5/forecast?q=beirut&appid=792c9d997c447b4ee6816f5756557494";

  const fetchData = async (url) => {
    try {
      const response = await fetch(url);

      if (!response.ok) throw new Error(response.statusText);
      const data = await response.json();
      console.log(data.list);
      setweather(data.list);
    } catch (err) {
      console.log(err);
    }
  };
  useEffect(() => {
    fetchData(url);
  }, []);
  return (
    <div>
      {weather.map((item) => {
        return (
          <div key={item.dt}>
            <h3>{item.dt_txt}</h3>
            <p>Temperature: {Math.round(item.main.temp - 273.15)} c°C</p>
            <p>Feels Like:{Math.round(item.main.feels_like - 273.15)} °C</p>
            <p>Max Temperature :{Math.round(item.main.temp_max - 273.15)} °C</p>
            <p>Min Temperature:{Math.round(item.main.temp_min - 273.15)} °C</p>
            <p>Weather: {item.weather[0].description}</p>
            <p>Humidity: {item.main.humidity}%</p>
            <p>Wind Speed: {Math.round(item.wind.speed * 3.6)} km/h</p>
          </div>
        );
      })}
    </div>
  );
};

export default Weeklyweather;
