import MobileWeather from "./MobileWeather1";
import Weatherhome1 from "./weatherhome1";
import "./App.css";
const OpenWheather = () => {
  return (
    <div className="Home-one">
      <div className="mobile-div">
        <MobileWeather />
      </div>

      <div className="desktopcon">
        <Weatherhome1 />
      </div>
    </div>
  );
};

export default OpenWheather;
