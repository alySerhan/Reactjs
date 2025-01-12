import Desktopweather1 from "./desktopweather1";
import Desktopweather2 from "./Desktopweather2";
const Weatherhome1 = () => {
  return (
    <div className="Desktop-1">
      <div className="right1">
        {" "}
        <Desktopweather1 />{" "}
      </div>
      <div className="left1">
        {" "}
        <Desktopweather2 />
      </div>
    </div>
  );
};

export default Weatherhome1;
