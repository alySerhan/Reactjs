// src/pages/homecomponents/bycategory/bycategory.jsx
import "./bycategory.css";
import jacket from "./img/jacket.png";
import backpacks from "./img/backpack.png";
import shoes from "./img/sneakers.png";
import shorts from "./img/short.png";
import tshirts from "./img/tshirt.png";
import tanktop from "./img/t-shirts.png";
import sports from "./img/sports.png";
import pants from "./img/man.png";
import { Link } from "react-router-dom";

const Bycategory = () => {
  const categories = [
    {
      name: "Jackets",
      link: "jackets", // Adjusted link
      pic: jacket,
    },
    {
      name: "BackPacks",
      link: "backpacks", // Adjusted link
      pic: backpacks,
    },
    {
      name: "Shoes",
      link: "shoes", // Adjusted link
      pic: shoes,
    },
    {
      name: "Pants",
      link: "pants", // Adjusted link
      pic: pants,
    },
    {
      name: "Shorts",
      link: "shorts", // Adjusted link
      pic: shorts,
    },
    {
      name: "T-Shirts",
      link: "t-shirts", // Adjusted link
      pic: tshirts,
    },
    {
      name: "Tank Tops",
      link: "tank-tops", // Adjusted link
      pic: tanktop,
    },
    {
      name: "Sports",
      link: "sports", // Adjusted link
      pic: sports,
    },
  ];

  return (
    <div className="bycategory" id="ByCategory">
      <h1>Shop By Category</h1>
      <div className="categories-container">
        {categories.map((category, index) => (
          <div className="category" key={index}>
            <Link to={`/category/${category.link}`}>
              {" "}
              {/* Updated link */}
              <img src={category.pic} alt={category.name} />
              <h2>{category.name}</h2>
            </Link>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Bycategory;
