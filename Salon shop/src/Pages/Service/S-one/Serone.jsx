import React, { useEffect, useState } from "react";
import "./sone.css";
import haircut from "../../../images/haircut.jpg";
import haircolor from "../../../images/haircolor2.jpg";
import hairtreatment from "../../../images/hairtreatment.jpg";
import hairstyle from "../../../images/hairstyle.jpg";
import right from "../../../images/angle-right.png";
import left from "../../../images/angle-left.png";
import { Link } from "react-router-dom";

const services = [
  {
    title: "Haircuts",
    image: haircut,
    price: "10$",
    description:
      "Revitalize your look with our expert haircut services. Whether you want a trim or a dramatic change, our stylists tailor each cut to enhance your features and suit your style.",
  },
  {
    title: "Hair Coloring",
    image: haircolor,
    price: "10$",
    description:
      "Transform your hair with our vibrant coloring services. From subtle highlights to bold colors, we use high-quality products to achieve stunning, long-lasting results.",
  },
  {
    title: "Hair Treatments",
    image: hairtreatment,
    price: "10$",
    description:
      "Restore your hair’s health with our nourishing treatments. We offer deep conditioning, keratin smoothing, and scalp care to address dryness, damage, and frizz.",
  },
  {
    title: "Hairstyling",
    image: hairstyle,
    price: "10$",
    description:
      "Get the perfect look for any occasion with our professional styling services. From elegant updos to chic blowouts, we create styles that enhance your beauty and confidence.",
  },
];

const Serone = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    setIsVisible(true);
  }, []);

  return (
    <div className={`serone ${isVisible ? "fade-in" : ""}`}>
      <div className="services-title">
        <img src={left} alt="left" />
        <h1>Hair Services</h1> <img src={right} alt="right" />
      </div>

      <hr />
      <div className="service-grid-one">
        {services.map((service, index) => (
          <div className="card" key={index}>
            <img
              src={service.image}
              className="card-img-top"
              alt={service.title}
            />
            <div className="card-body">
              <div className="card-flex">
                <h5 className="card-title">{service.title}</h5>
                <p>{service.price}</p>
              </div>
              <p className="card-text">{service.description}</p>

              <div className="card-body">
                <Link to="/Book" className="card-link">
                  BOOK NOW
                </Link>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Serone;
