import salonpic1 from "../../../images/salonpic2.jpeg";
import "./about1.css";
const Aboutone = () => {
  return (
    <div className="About-1">
      <div className="about-img-1">
        <img src={salonpic1} alt="salon" />
      </div>
      <div className="about-text-1">
        <h2>Our Story:</h2>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
          minim veniam, quis nostrud exercitation ullamco laboris nisi ut
          aliquip ex ea commodo consequat. Duis aute irure dolor in
          reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
          pariatur. Excepteur sint occaecat cupidatat non proident, sunt in
          culpa qui officia deserunt mollit anim id est laborum.
        </p>
      </div>
    </div>
  );
};
export default Aboutone;
