import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import "./favorite.css";

const Favorites = () => {
  const [favorites, setFavorites] = useState([]);

  useEffect(() => {
    const storedFavorites = JSON.parse(localStorage.getItem("favorites")) || [];
    setFavorites(storedFavorites);
  }, []);

  const handleRemoveFavorite = (productId) => {
    const updatedFavorites = favorites.filter(
      (product) => product.id !== productId
    );
    setFavorites(updatedFavorites);
    localStorage.setItem("favorites", JSON.stringify(updatedFavorites)); // Update local storage
  };

  // Function to count the number of favorites
  const countFavorites = () => {
    return favorites.length;
  };

  return (
    <div className="favorites">
      <h1>Your Favorites</h1>

      {favorites.length > 0 ? (
        <div className="favorites-container">
          {favorites.map((product) => (
            <div className="product" key={product.id}>
              <img src={product.img} alt={product.name} />
              <div className="product-text">
                <h3 className="product-name">{product.name}</h3>
                <div className="price-offer">
                  <h4 className="product-price">{product.price}$</h4>
                  {product.offer && <p className="offer">{product.offer}$</p>}
                </div>
                <div className="product-btns">
                  <Link
                    className="product-details"
                    to={`/product/${product.id}`}
                  >
                    View Details
                  </Link>
                  <button
                    className="product-like"
                    onClick={() => handleRemoveFavorite(product.id)} // Remove from favorites
                  >
                    <i className="fa fa-heart" aria-hidden="true"></i>
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      ) : (
        <p>No favorites added yet.</p>
      )}
    </div>
  );
};

export default Favorites;
