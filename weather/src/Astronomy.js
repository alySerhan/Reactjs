import { useState, useEffect } from "react";

const Astronomy = () => {
  const [astro, setAstro] = useState(null);
  const url = `https://weatherapi-com.p.rapidapi.com/astronomy.json?q=Lebanon`;
  const options = {
    method: "GET",
    headers: {
      "x-rapidapi-key": "b41b429897msh9cc60363092e4e5p12ab05jsna32f47133d07",
      "x-rapidapi-host": "weatherapi-com.p.rapidapi.com",
    },
  };

  const fetchData = async (url, options) => {
    try {
      const response = await fetch(url);

      if (!response.ok) throw new Error(response.statusText);
      const data = await response.json();

      setAstro(data.astronomy.astro);
    } catch (err) {
      console.log(err);
    }
  };

  useEffect(() => {
    fetchData(url, options);
  }, []);

  if (!astro) {
    return <div>Loading...</div>;
  }

  return (
    <div>
      <h2>Astronomy Data</h2>
      <p>
        <strong>Sunrise:</strong> {astro.sunrise}
      </p>
      <p>
        <strong>Sunset:</strong> {astro.sunset}
      </p>
      <p>
        <strong>Moonrise:</strong> {astro.moonrise}
      </p>
      <p>
        <strong>Moonset:</strong> {astro.moonset}
      </p>
      <p>
        <strong>Moon Phase:</strong> {astro.moon_phase}
      </p>
      <p>
        <strong>Moon Illumination:</strong> {astro.moon_illumination}%
      </p>
      <p>
        <strong>Is Moon Up:</strong> {astro.is_moon_up ? "Yes" : "No"}
      </p>
      <p>
        <strong>Is Sun Up:</strong> {astro.is_sun_up ? "Yes" : "No"}
      </p>
    </div>
  );
};

export default Astronomy;
