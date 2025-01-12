import React, { useState } from "react";
import useFetch from "./useFetch";

import MobileWeatherdet from "./Mobileweatherdet";

const MobileWeather11 = () => {
  const apikey = "04ec91e33b00e69a6a1bafd7039b6dae";
  const urlWeather2 = ` https://api.openweathermap.org/data/2.5/forecast?q=beirut&appid=${apikey} `;

  const [visibleDetails, setVisibleDetails] = useState({});

  const {
    data: weather2,
    error: error2,
    loading: loading2,
  } = useFetch(urlWeather2);

  const today = (() => {
    const date = new Date();
    const options = { weekday: "long" };
    const dayName = date.toLocaleDateString("en-US", options);
    const dayNumber = date.getDate();
    return `${dayName} ${dayNumber}`;
  })();

  if (loading2) return <p>Loading...</p>;

  if (error2) return <p>Error fetching Beirut data: {error2.message}</p>;

  return (
    <div
      className="week"
      style={{
        justifyContent: "flex-start", // Align items to the start of the container
        textAlign: "center",
        display: "flex",
        flexDirection: "row",
        color: "white",
        overflowX: "auto",
        width: "100%",
        whiteSpace: "nowrap", // Prevents wrapping of child elements
      }}
    >
      {weather2.list
        .reduce((acc, item) => {
          const date = new Date(item.dt * 1000);
          const optionsDate = { weekday: "long", day: "numeric" };
          const formattedDate = date.toLocaleDateString(undefined, optionsDate);
          const dayKey = date.toDateString(); // Unique key for each day

          // Check if the day's title is already added
          if (!acc.some((entry) => entry.key === dayKey)) {
            acc.push({ key: dayKey, date: formattedDate, items: [] });
          }

          // Find the corresponding day entry and add the weather item
          acc.find((entry) => entry.key === dayKey).items.push(item);
          return acc;
        }, [])
        .map((day) => (
          <div
            key={day.key}
            className="divvy"
            style={{
              display: "inline-block",
              width: "100vw", // Make each day take full viewport width
              padding: "1rem", // Use padding for spacing instead of margins
              boxSizing: "border-box", // Include padding in width
            }}
          >
            <h2>{day.date === today ? "Today" : day.date}</h2>

            {day.items.map((item) => {
              const date = new Date(item.dt * 1000);
              const optionsTime = {
                hour: "2-digit",
                minute: "2-digit",
                hour12: false,
              };
              const formattedTime = date.toLocaleTimeString(
                undefined,
                optionsTime
              );

              return (
                <div key={item.dt}>
                  <div
                    className="weekly-container"
                    style={{
                      display: "flex",
                      justifyContent: "space-between",
                      margin: "0 auto",

                      borderTop: "1px  solid white",
                      borderBottom: "1px solid white",
                      width: "90vw", // Use 100% to fill the parent div
                    }}
                  >
                    <div>
                      <h3>{formattedTime}</h3>
                    </div>
                    <div>
                      <img
                        src={`https://openweathermap.org/img/wn/${item.weather[0].icon}@2x.png`}
                        alt={item.weather[0].description}
                        width="75%"
                      />
                    </div>
                    <div>
                      <p style={{ fontSize: "1.5rem", fontWeight: "bolder" }}>
                        {Math.round(item.main.temp - 273.15)} °
                      </p>
                    </div>
                    <div>
                      <button
                        className="btn-det"
                        onClick={() =>
                          setVisibleDetails((prev) => ({
                            ...prev,
                            [item.dt]: !prev[item.dt],
                          }))
                        }
                      >
                        {visibleDetails[item.dt] ? "Hide ▲" : "Show ▼"}
                      </button>
                    </div>
                  </div>
                  {visibleDetails[item.dt] && <MobileWeatherdet item={item} />}
                </div>
              );
            })}
          </div>
        ))}
    </div>
  );
};

export default MobileWeather11;
