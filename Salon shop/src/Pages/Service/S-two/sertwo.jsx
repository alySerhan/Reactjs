import React, { useEffect, useState } from "react";
import "../S-one/sone.css";
import nail from "../../../images/nail1.jpg";
import Pedicures from "../../../images/pedicure3.jpg";
import { Link } from "react-router-dom";
import right from "../../../images/angle-right.png";
import left from "../../../images/angle-left.png";

const services = [
  {
    title: "Manicures",
    image: nail,
    price: "10$",
    description:
      " Pamper your hands with our luxurious manicure services. Enjoy nail shaping, cuticle care, and a relaxing hand massage, finished with your choice of polish for a polished and vibrant look.",
  },
  {
    title: "Pedicures",
    image: Pedicures,
    price: "10$",
    description:
      "Indulge your feet with our rejuvenating pedicure services. Experience exfoliation, nail care, and a soothing foot massage, topped off with your favorite polish for beautifully refreshed feet..",
  },
];

const Sertwo = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    setIsVisible(true);
  }, []);

  return (
    <div className={`serone ${isVisible ? "fade-in" : ""}`}>
      <div className="services-title">
        <img src={left} alt="left" />
        <h1>Nail Services</h1> <img src={right} alt="right" />
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

export default Sertwo;
