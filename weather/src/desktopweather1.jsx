import useFetch from "./useFetch";
import loading from "./images/loading.png";
import error from "./images/error.png";

const Desktopweather1 = () => {
  const apikey = "792c9d997c447b4ee6816f5756557494";

  const urlWeather = `https://api.openweathermap.org/data/2.5/weather?q=beirut&appid=04ec91e33b00e69a6a1bafd7039b6dae&units=metric`;
  const {
    data: weather,
    error: error1,
    loading: loading1,
  } = useFetch(urlWeather);

  const astronomy =
    "https://api.sunrisesunset.io/json?lat=33.89332&lng=35.50157";
  const {
    data: Astronomy,
    error: error11,
    loading: loading11,
  } = useFetch(astronomy);

  if (loading1 || loading11) return <img src={loading} alt="loading" />;
  if (error1)
    return (
      <div>
        {" "}
        <p>Error fetching Beirut data: {error1.message}</p>
        <img src={error} alt="error" />{" "}
      </div>
    );
  if (error11)
    return (
      <div>
        {" "}
        <p>Error fetching astronomy data: {error11.message}</p>
        <img src={error} alt="error" />{" "}
      </div>
    );

  const getCurrentTime = () => {
    const now = new Date();
    const hours = String(now.getHours()).padStart(2, "0");
    const minutes = String(now.getMinutes()).padStart(2, "0");
    return `${hours}:${minutes}`;
  };

  return (
    <div>
      <div className="cont-des-1">
        <div className="temp-title">
          <h1>{Math.round(weather.main.temp)}°</h1>
        </div>

        <div className="temp-det">
          <p>{weather.weather[0].description}</p>
          <p>
            feels like {Math.round(weather.main.feels_like)}
            <sup>° </sup>
          </p>
        </div>

        {Astronomy && Astronomy.results ? (
          <div className="astromy">
            <p>Sunrise: {Astronomy.results.sunrise}</p>
            <p>Sunset: {Astronomy.results.sunset}</p>
          </div>
        ) : (
          <p>Loading sunrise data...</p>
        )}
        <div className="date">
          <p> Last checked : {getCurrentTime()}</p>
        </div>
      </div>
    </div>
  );
};

export default Desktopweather1;
