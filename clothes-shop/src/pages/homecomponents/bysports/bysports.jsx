import football from "./football.jpeg";
import basketball from "./basketball.jpeg";
import { Link } from "react-router-dom";
import "./bysports.css";
const Bysports = () => {
  const sports = [
    {
      name: "Football",
      img: football,
      link: "football",
    },
    {
      name: "Basketball",
      img: basketball,
      link: "basketball",
    },
  ];
  return (
    <div className="bysports" id="BySport">
      <h1>Shop By Sport</h1>
      <div className="bysports-container">
        {sports.map((sport, i) => (
          <Link to={`/sport/${sport.link}`} key={i}>
            {" "}
            <div className="sport">
              <img src={sport.img} alt={sport.name} />
              <button> {sport.name}</button>
            </div>{" "}
          </Link>
        ))}
      </div>
    </div>
  );
};

export default Bysports;
