import "./footer.css";
import { Link } from "react-router-dom";
const Footer = () => {
  return (
    // Remove the container if you want to extend the Footer to full width.

    <footer
      className="text-center text-lg-start text-white"
      style={{ backgroundColor: "#090000" }}
    >
      {/* Section: Social media */}
      <section className="footer-1" style={{ backgroundColor: "  #c30000" }}>
        {/* Left */}
        <div className="me-5">
          <span>Get connected with us on social networks:</span>
        </div>

        <div className="icons-footer">
          <a href="" className="text-white me-4">
            <i className="fab fa-whatsapp"></i>
          </a>
          <a href="#" className="text-white me-4">
            <i className="fab fa-facebook-f"></i>
          </a>
          {/* <a href="#" className="text-white me-4">
            <i className="fab fa-twitter"></i>
          </a> */}
          <a href="#" className="text-white me-4">
            <i className="fab fa-google"></i>
          </a>
          <a href="#" className="text-white me-4">
            <i className="fab fa-instagram"></i>
          </a>
          {/* <a href="#" className="text-white me-4">
            <i className="fab fa-linkedin"></i>
          </a>
          <a href="#" className="text-white me-4">
            <i className="fab fa-github"></i>
          </a> */}
        </div>
      </section>

      {/* Section: Social media */}

      {/* Section: Links  */}
      <section>
        <div className="container text-center text-md-start mt-5">
          {/* Grid row */}
          <div className="row mt-3">
            {/* Grid column */}
            <div className="col-md-3 col-lg-4 col-xl-3 mx-auto mb-4">
              {/* Content */}
              <h6 className="text-uppercase fw-bold">Logo </h6>
              <hr
                className="mb-4 mt-0 d-inline-block mx-auto"
                style={{
                  height: "2px",
                }}
              />
              <p>
                Here you can use rows and columns to organize your footer
                content. Lorem ipsum dolor sit amet, consectetur adipisicing
                elit.
              </p>
            </div>
            {/* Grid column */}

            {/* Grid column */}
            <div className="col-md-2 col-lg-2 col-xl-2 mx-auto mb-4">
              {/* Links */}
              <h6 className="text-uppercase fw-bold">Products</h6>
              <hr
                className="mb-4 mt-0 d-inline-block mx-auto"
                style={{
                  height: "2px",
                }}
              />
              <p>
                <a href="#ByCategory" className="text-white">
                  ByCategory
                </a>
              </p>
              <p>
                <a href="#ByGender" className="text-white">
                  ByGender
                </a>
              </p>
              <p>
                <a href="#ByBrand" className="text-white">
                  ByBrand
                </a>
              </p>
              <p>
                <a href="#BySport" className="text-white">
                  BySport
                </a>
              </p>
            </div>
            {/* Grid column */}

            {/* Grid column */}
            <div className="col-md-3 col-lg-2 col-xl-2 mx-auto mb-4">
              {/* Links */}
              <h6 className="text-uppercase fw-bold">Useful links</h6>
              <hr
                className="mb-4 mt-0 d-inline-block mx-auto"
                style={{
                  height: "2px",
                }}
              />
              <p>
                <Link to="/cart" className="text-white">
                  Your Cart
                </Link>
              </p>
              <p>
                <Link to="/favorites" className="text-white">
                  Your Wishlist
                </Link>
              </p>
              <p>
                <a href="#!" className="text-white">
                  About Us
                </a>
              </p>
              <p>
                <a href="#!" className="text-white">
                  Help
                </a>
              </p>
            </div>
            {/* Grid column */}

            {/* Grid column */}
            <div className="col-md-4 col-lg-3 col-xl-3 mx-auto mb-md-0 mb-4">
              {/* Links */}
              <h6 className="text-uppercase fw-bold">Contact</h6>
              <hr
                className="mb-4 mt-0 d-inline-block mx-auto"
                style={{
                  height: "2px",
                }}
              />
              <p>
                <i className="fas fa-home mr-3"></i> New York, NY 10012, US
              </p>
              <p>
                <i className="fas fa-envelope mr-3"></i> info@example.com
              </p>
              <p>
                <i className="fas fa-phone mr-3"></i> + 01 234 567 88
              </p>
              <p>
                <i className="fas fa-print mr-3"></i> + 01 234 567 89
              </p>
            </div>
            {/* Grid column */}
          </div>
          {/* Grid row */}
        </div>
      </section>
      {/* Section: Links  */}

      {/* Copyright */}
      <div
        className="text-center p-3"
        style={{ backgroundColor: "rgba(0, 0, 0, 0.2)" }}
      >
        {" "}
        <hr />© 2025 Copyright:
        <a className="text-white" href="https://alyserhan.netlify.app/">
          {" "}
          Aly Serhan
        </a>
      </div>
      {/* Copyright */}
    </footer>
  );
};

export default Footer;
