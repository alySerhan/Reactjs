import logo1 from "../../images/logo1.png";
import "./Header.css";
import { Link } from "react-router-dom";
import { useState } from "react";

const Header = () => {
  const [isOpen, setIsOpen] = useState(false);

  const handleToggle = () => setIsOpen(!isOpen);

  const handleLinkClick = () => {
    setIsOpen(false); // Close the navbar on link click
  };

  return (
    <nav className="navbar navbar-expand-lg navbar-light">
      <div className="container-fluid">
        <Link className="navbar-brand" to="/">
          {/* <img src={logo1} alt="logo" width="120" /> */}
          <b> Logo</b>
        </Link>

        <button
          className="navbar-toggler"
          type="button"
          onClick={handleToggle}
          aria-controls="navbarNavAltMarkup"
          aria-expanded={isOpen}
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>

        <div
          className={`collapse navbar-collapse ${isOpen ? "show" : ""}`}
          id="navbarNavAltMarkup"
        >
          <div className="navbar-nav">
            <Link
              className="nav-link active"
              aria-current="page"
              to="/"
              onClick={handleLinkClick}
            >
              Home
            </Link>
            <Link className="nav-link" to="/service" onClick={handleLinkClick}>
              Services
            </Link>
            <Link className="nav-link" to="/products" onClick={handleLinkClick}>
              Products
            </Link>
            <Link className="nav-link" to="/about" onClick={handleLinkClick}>
              About Us
            </Link>
            <Link className="nav-link" to="/Book" onClick={handleLinkClick}>
              Book
            </Link>
          </div>
        </div>
      </div>
      {/* <div className="cart-div">
        <i className="fa-solid fa-cart-shopping" style={{ color: "#333333" }}></i>
      </div> */}
    </nav>
  );
};

export default Header;
