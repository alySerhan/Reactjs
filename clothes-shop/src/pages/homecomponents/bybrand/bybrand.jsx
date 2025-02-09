// src/pages/homecomponents/bybrand/bybrand.jsx
import "./bybrand.css";
import Addidas from "./img/adidas.svg";
import nike from "./img/nike.svg";
import north from "./img/north.svg";
import puma from "./img/puma.svg";
import under from "./img/under-armour.svg";
import { Link } from "react-router-dom";

const Bybrand = () => {
  const brands = [
    {
      name: "Addidas",
      link: "Addidas", // Adjusted link
      img: Addidas,
    },
    {
      name: "Nike",
      link: "Nike", // Adjusted link
      img: nike,
    },
    {
      name: "North Face",
      link: "north-face", // Adjusted link
      img: north,
    },
    {
      name: "Puma",
      link: "Puma", // Adjusted link
      img: puma,
    },
    {
      name: "Under Armour",
      link: "under-armour", // Adjusted link
      img: under,
    },
  ];

  return (
    <div className="bybrand" id="ByBrand">
      <h1>Shop By Brand</h1>
      <div className="bybrands-container">
        {brands.map((brand, i) => (
          <div className="brand" key={i}>
            <Link to={`/brand/${brand.link}`}>
              {" "}
              {/* Updated link */}
              <img src={brand.img} alt={brand.name} />
            </Link>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Bybrand;
