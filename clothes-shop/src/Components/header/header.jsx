import { useState, useEffect } from "react"; // Import useState
import { useNavigate, Link } from "react-router-dom"; // Import useNavigate and Link
import "./header.css";

const Header = ({ favoritesCount }) => {
  const [searchTerm, setSearchTerm] = useState(""); // State for search input
  const navigate = useNavigate(); // Initialize navigate

  const handleSearchSubmit = (e) => {
    e.preventDefault(); // Prevent default form submission
    if (searchTerm) {
      navigate(`/search/${searchTerm}`); // Navigate to search results page
    }
  };

  return (
    <div className="nav1">
      <div className="marquee">
        <div className="moving-text">
          <p>Welcome to Our Shop,{"    "} </p>
          <p>
            {"  "}
            For assistance or modifications, please contact Customer Care at 00
            000 000
          </p>
        </div>
      </div>
      <div className="nav2" style={{ position: "sticky" }}>
        <nav id="nav" className="navbar navbar-expand-lg sticky-top">
          <Link className="navbar-brand" to="/">
            LOGO
          </Link>
          <button
            className="navbar-toggler"
            type="button"
            data-toggle="collapse"
            data-target="#navbarSupportedContent"
            aria-controls="navbarSupportedContent"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <i className="fa fa-bars"></i>
          </button>
          <div className="nav-btns" id="for-mobile">
            <div className="cart-icon">
              <Link to="/cart">
                <i className="fa fa-shopping-cart"></i>
                {/* <span className="item-count">0</span> */}
              </Link>
            </div>
            <div className="cart-icon">
              <Link to="/favorites">
                <i className="fa fa-heart"></i>
                {/* <span className="item-count">{favoritesCount}</span>{" "} */}
                {/* Display favorites count */}
              </Link>
            </div>
            <form onSubmit={handleSearchSubmit}>
              <input
                className="form-control"
                type="search"
                placeholder="Search"
                aria-label="Search"
                value={searchTerm} // Set input value
                onChange={(e) => setSearchTerm(e.target.value)} // Update state on change
              />
              <button
                className="btn btn-outline my-2 my-sm-0"
                type="submit"
                aria-label="Search"
              >
                <i className="fa fa-search" aria-hidden="true"></i>
              </button>
            </form>
          </div>
          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav mr-auto">
              <li className="nav-item active">
                <Link className="nav-link" to="/">
                  Home <span className="sr-only">(current)</span>
                </Link>
              </li>
              <li className="nav-item">
                <a
                  className="nav-link"
                  href="/"
                  onClick={() => {
                    alert("about us page isn't available now");
                  }}
                >
                  About us
                </a>
              </li>
            </ul>
          </div>
          <div className="nav-btns" id="for-desktop">
            <div className="cart-icon">
              <Link to="/cart">
                <i className="fa fa-shopping-cart"></i>
                {/* <span className="item-count">0</span> */}
              </Link>
            </div>
            <div className="cart-icon">
              <Link to="/favorites">
                <i className="fa fa-heart"></i>
                {/* <span className="item-count">{favoritesCount}</span>{" "} */}
                {/* Display favorites count */}
              </Link>
            </div>
            <form onSubmit={handleSearchSubmit}>
              <input
                className="form-control"
                type="search"
                placeholder="Search"
                aria-label="Search"
                value={searchTerm} // Set input value
                onChange={(e) => setSearchTerm(e.target.value)} // Update state on change
              />
              <button
                className="btn btn-outline my-2 my-sm-0"
                type="submit"
                aria-label="Search"
              >
                <i className="fa fa-search" aria-hidden="true"></i>
              </button>
            </form>
          </div>
        </nav>
      </div>
    </div>
  );
};

export default Header;
