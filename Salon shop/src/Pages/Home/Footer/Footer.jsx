import "./Footer.css";
import { Link } from "react-router-dom";
const Footer = () => {
  return (
    // <footer className="text-center">
    //   {/* Section: Social media */}
    //   <section className="d-flex justify-content-center justify-content-lg-between p-4 border-bottom">
    //     {/* Left */}
    //     <div className="me-5 d-none d-lg-block">
    //       <span> Get connected with us on social networks:</span>
    //     </div>
    //     {/* Left */}

    //     {/* Right */}
    //     <div>
    //       <a href="#" className="me-4 text-reset">
    //         <i className="fab fa-facebook-f"></i>
    //       </a>
    //       <a href="#" className="me-4 text-reset">
    //         <i className="fab fa-twitter"></i>
    //       </a>
    //       <a href="#" className="me-4 text-reset">
    //         <i className="fab fa-google"></i>
    //       </a>
    //       <a href="#" className="me-4 text-reset">
    //         <i className="fab fa-instagram"></i>
    //       </a>
    //     </div>
    //     {/* Right */}
    //   </section>
    //   {/* Section: Social media */}

    //   {/* Section: Links */}
    //   <section>
    //     <div className="container text-center text-md-start mt-5">
    //       {/* Grid row */}
    //       <div className="row mt-3" id="footer-row ">
    //         {/* Grid column */}
    //         <div className="col-md-3 col-lg-4 col-xl-3 mx-auto mb-4">
    //           {/* Content */}
    //           <h6 className="text-uppercase fw-bold mb-4">
    //             <i className="fas fa-gem me-3"></i>
    //             Salon shop
    //           </h6>
    //           <p>
    //             Here you can use rows and columns to organize your footer
    //             content. Lorem ipsum dolor sit amet, consectetur adipisicing
    //             elit.
    //           </p>
    //         </div>

    //         {/* Grid column */}
    //         <div className="col-md-3 col-lg-2 col-xl-2 mx-auto mb-4">
    //           {/* Links */}
    //           <h6 className="text-uppercase fw-bold mb-4">Useful links</h6>
    //           <p>
    //             <Link to="/service" className="text-reset">
    //               Service
    //             </Link>
    //           </p>
    //           <p>
    //             <Link to="/products" className="text-reset">
    //               Products
    //             </Link>
    //           </p>
    //           <p>
    //             <Link to="/about" className="text-reset">
    //               About
    //             </Link>
    //           </p>
    //           <p>
    //             <Link to="/book" className="text-reset">
    //               Book
    //             </Link>
    //           </p>
    //         </div>
    //         {/* Grid column */}

    //         {/* Grid column */}
    //         <div className="col-md-4 col-lg-3 col-xl-3 mx-auto mb-md-0 mb-4">
    //           {/* Links */}
    //           <h6 className="text-uppercase fw-bold mb-4">Contact</h6>
    //           <p>
    //             <i className="fas fa-home me-3"></i> New York, NY 10012, US
    //           </p>
    //           <p>
    //             <i className="fas fa-envelope me-3"></i>
    //             info@example.com
    //           </p>
    //           <p>
    //             <i className="fas fa-phone me-3"></i> + 01 234 567 88
    //           </p>
    //         </div>
    //         {/* Grid column */}
    //       </div>
    //       {/* Grid row */}
    //     </div>
    //   </section>
    //   {/* Section: Links */}

    //   {/* Copyright */}
    //   <div
    //     className="text-center p-4"
    //     style={{ backgroundColor: "rgba(255, 0, 140, 0.07)" }}
    //   >
    //     ©2025 Copyright:
    //     <a
    //       className="text-reset fw-bold"
    //       href="https://www.instagram.com/aly_ser7an/?igsh=MWNhMGZjOWZpNHdwZA%3D%3D#"
    //     >
    //       &nbsp; Aly Serhan
    //     </a>
    //   </div>
    //   {/* Copyright */}
    // </footer>

    <footer>
      <section className="ftr-one">
        <div className="">
          <p> Get connected with us on social networks:</p>
        </div>
        <div>
          <a href="#" className="me-4 text-reset">
            <i className="fab fa-facebook-f"></i>
          </a>
          <a href="#" className="me-4 text-reset">
            <i className="fab fa-twitter"></i>
          </a>
          <a href="#" className="me-4 text-reset">
            <i className="fab fa-google"></i>
          </a>
          <a href="#" className="me-4 text-reset">
            <i className="fab fa-instagram"></i>
          </a>
        </div>{" "}
      </section>
      <hr />
      <section className="ftr-two">
        <div>
          <h4>Salon shop</h4>
          <p>
            Here you can use rows and columns to organize your footer content.
            Lorem ipsum dolor sit amet, consectetur adipisicing elit.
          </p>
        </div>
        <div>
          <h4>Useful links</h4>
          <p>
            <Link to="/service" className="text-reset">
              Service
            </Link>
          </p>
          <p>
            <Link to="/products" className="text-reset">
              Products
            </Link>
          </p>
          <p>
            <Link to="/about" className="text-reset">
              About
            </Link>
          </p>
          <p>
            <Link to="/book" className="text-reset">
              Book
            </Link>
          </p>
        </div>
        <div>
          <h4>Contact</h4>
          <p>
            <i className="fas fa-home me-3"></i> New York, NY 10012, US
          </p>
          <p>
            <i className="fas fa-envelope me-3"></i>
            info@example.com
          </p>
          <p>
            <i className="fas fa-phone me-3"></i> + 01 234 567 88
          </p>
        </div>
      </section>
      <hr />
      <div>
        ©2025 Copyright:
        <a
          className="text-reset fw-bold"
          href="https://www.instagram.com/aly_ser7an/?igsh=MWNhMGZjOWZpNHdwZA%3D%3D#"
        >
          &nbsp; Aly Serhan
        </a>
      </div>
    </footer>
  );
};

export default Footer;
