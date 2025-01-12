import { useState, useEffect } from "react";

const RealWeather = () => {
  const [weather, setweather] = useState("");

  const url = "https://weather-api138.p.rapidapi.com/weather?city_name=beirut";
  const options = {
    method: "GET",
    headers: {
      "x-rapidapi-key": "b41b429897msh9cc60363092e4e5p12ab05jsna32f47133d07",
      "x-rapidapi-host": "weather-api138.p.rapidapi.com",
    },
  };

  const fetchData = async (url, options) => {
    try {
      const response = await fetch(url);

      if (!response.ok) throw new Error(response.statusText);
      const data = await response.json();

      setweather(data.astronomy.astro);
    } catch (err) {
      console.log(err);
    }
  };

  useEffect(() => {
    fetchData(url, options);
  }, []);

  return (
    <div>
      <h2> weather data:</h2>
      <p> temparature: {weather.temp}</p>
      <p> max tem : {weather.temp_max}</p>
      <p> min tem : {weather.temp_min}</p>
      <p> name: {weather.name}</p>
    </div>
  );
};

export default RealWeather;
