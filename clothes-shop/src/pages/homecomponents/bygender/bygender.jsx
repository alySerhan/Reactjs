import "./bygender.css";
import { Link } from "react-router-dom";
const Bygender = () => {
  const genders = [
    {
      name: "Men",
      link: "men",
      img: "https://www.freepnglogos.com/uploads/man-png/man-men-fitness-png-transparent-image-pngpix-17.png", // Replace with actual image path
    },
    {
      name: "Women",
      link: "women",
      img: "https://png.pngtree.com/png-clipart/20231117/original/pngtree-active-female-athlete-flaunting-approval-with-thumbs-up-photo-png-image_13606498.png", // Replace with actual image path
    },
    {
      name: "Kids",
      link: "kids",
      img: "https://purepng.com/public/uploads/large/little-boy-play-with-football-dcj.png", // Replace with actual image path
    },
  ];

  return (
    <div className="bygender" id="ByGender">
      <h1>Shop By Gender</h1>
      <div className="bygender-container">
        {genders.map((gender, index) => (
          <div className="gender" key={index}>
            <Link to={`/gender/${gender.link}`}>
              <div className="">
                <img src={gender.img} alt={gender.name} />
                <p>{gender.name}</p>{" "}
              </div>
            </Link>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Bygender;
