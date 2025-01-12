import React, { useState } from "react";
import "./productdetails.css";

const ProductDetail = ({ product, onClose, onAddToCart }) => {
  const [quantity, setQuantity] = useState(1); // State to hold quantity

  if (!product) return null;

  const handleAddToCart = () => {
    if (quantity > 0) {
      onAddToCart({ ...product, quantity }); // Include quantity in the product object
      setQuantity(1); // Reset quantity after adding to cart
      onClose(); // Close the modal after adding to cart
    }
  };

  return (
    <div className="product-detail">
      <button id="btn-close" className="btn btn-secondary" onClick={onClose}>
        Close
      </button>{" "}
      <div className="det-div">
        <div className="image-det">
          <img src={product.imagepath} alt={product.name} />
        </div>
        <div className="detials-info">
          <h2>{product.name}</h2>
          <p>{product.description}</p>
          <p className="det-price">Price: ${product.price}</p>
          {/* Quantity Input */}
          <div className="quantity-btn">
            <label htmlFor="quantity">Quantity:</label>
            <button
              onClick={() => {
                setQuantity(quantity - 1);
              }}
            >
              -
            </button>
            <input
              type="number"
              id="quantity"
              value={quantity}
              min="1" // Minimum value for quantity
              onChange={(e) => setQuantity(Number(e.target.value))}
              readOnly
            />
            <button
              onClick={() => {
                setQuantity(quantity + 1);
              }}
            >
              +
            </button>
          </div>
          <div className="pro-det-btn">
            <button className="btn btn-dark" onClick={handleAddToCart}>
              Add To Cart
            </button>
          </div>{" "}
        </div>
      </div>
    </div>
  );
};

export default ProductDetail;
