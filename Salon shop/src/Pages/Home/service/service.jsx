import "./service.css";
import { Link } from "react-router-dom";
import image1 from "../../../images/hairdresser.png";
import image2 from "../../../images/facial-mask.png";
import image3 from "../../../images/nail-polish.png";
const Service = () => {
  return (
    <div className="serviceSection">
      <h1> Our Services</h1>
      <hr />
      <div className="service-cont">
        <div className="serv-divs">
          <img src={image1} alt="image1" />
          <h2>Hair Styling</h2>
        </div>
        <div className="serv-divs">
          <img src={image2} alt="image2" />
          <h2>Skin Care</h2>
        </div>
        <div className="serv-divs">
          <img src={image3} alt="image3" />
          <h2>Nail Care</h2>
        </div>
      </div>
      <div className="servicebtn">
        <h6>
          {" "}
          Discover beauty tailored for everyone, with services designed to meet
          every unique style and preference!
        </h6>
        <Link to="/service">View Service Menu</Link>
      </div>
    </div>
  );
};
export default Service;
