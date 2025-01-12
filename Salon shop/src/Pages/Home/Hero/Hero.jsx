import "./Hero.css";
import { Link } from "react-router-dom";

const Hero = () => {
  return (
    <div className="hero">
      <div className="hero-content">
        <h1>Welcome to Our Salon</h1>
        <p>Your comfort is our priority.</p>
        <div className="btns-container">
          <Link to="/Book">
            {" "}
            <button className="btn1"> Book now</button>
          </Link>

          <Link to="/products">
            {" "}
            <button className="btn2"> Shop now</button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Hero;
