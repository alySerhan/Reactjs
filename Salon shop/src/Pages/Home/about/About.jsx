import "./about.css";
import image1 from "../../../images/salonpic.jpg";
import { Link } from "react-router-dom";
const About = () => {
  return (
    <div className="about">
      <div className="img-cont">
        <img src={image1} alt="salonpic " />
      </div>
      <div className="text-cont">
        <div className="texts">
          <h2 className="h-home-serv">Our Story</h2>
          <p className="text-home-serv">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim
            ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut
            aliquip ex ea commodo consequat. Duis aute irure dolor in
            reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
            pariatur. Excepteur sint occaecat cupidatat non proident, sunt in
            culpa qui officia deserunt mollit anim id est laborum.
          </p>
        </div>
        <Link to="/about">Learn More</Link>
      </div>
    </div>
  );
};

export default About;
