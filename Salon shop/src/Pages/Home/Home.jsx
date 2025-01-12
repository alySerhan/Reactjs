import "./Home.css";
import { useEffect, useState } from "react";

import Hero from "./Hero/Hero.jsx";
import Service from "./service/service.jsx";
import About from "./about/About.jsx";
import Shop from "./shop/Shop.jsx";
import Footer from "./Footer/Footer.jsx";

const Home = () => {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setLoading(false);
    }, 1500); // 3 seconds

    return () => clearTimeout(timer); // Cleanup
  }, []);

  return (
    <>
      {loading ? (
        <div className="loading-screen">
          <h1>Loading...</h1>
        </div>
      ) : (
        <div>
          <Hero />
          <Service />
          <About />
          <Shop />
          <Footer />
        </div>
      )}
    </>
  );
};

export default Home;
