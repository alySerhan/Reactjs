import React, { useState, useEffect } from "react";
import { db } from "../../Admin/firebase";
import { collection, getDocs } from "firebase/firestore";
import "./getpro.css";
import ProductDetail from "../productdetail/productdetail"; // Import the ProductDetail component
import Cart from "./Cart"; // Import Cart component

const Getproduct = () => {
  const [products, setProducts] = useState([]);
  const [selectedProduct, setSelectedProduct] = useState(null);
  const [cartItems, setCartItems] = useState([]); // State for cart items
  const [isCartOpen, setIsCartOpen] = useState(false); // State to manage cart visibility
  const [loading, setLoading] = useState(true); // State for loading
  const [error, setError] = useState(null); // State for error handling

  const productsCollectionRef = collection(db, "products");

  const getProducts = async () => {
    try {
      setLoading(true);
      setError(null); // Reset error state before fetching

      if (!navigator.onLine) {
        throw new Error(
          "You are offline. Please check your internet connection."
        );
      }

      const data = await getDocs(productsCollectionRef);
      setProducts(data.docs.map((doc) => ({ ...doc.data(), id: doc.id })));
    } catch (error) {
      console.error("Error fetching products:", error);
      setError(
        error.message || "Failed to load products. Please try again later."
      );
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    getProducts();

    // Load cart items from localStorage on component mount
    const savedCart = JSON.parse(localStorage.getItem("cartItems"));
    if (savedCart) {
      setCartItems(savedCart);
    }
  }, []);

  useEffect(() => {
    // Save cart items to localStorage whenever they change
    localStorage.setItem("cartItems", JSON.stringify(cartItems));
  }, [cartItems]);

  const handleProductClick = (product) => {
    setSelectedProduct(product);
  };

  const handleCloseDetail = () => {
    setSelectedProduct(null);
  };

  const handleAddToCart = (product) => {
    setCartItems((prevItems) => {
      const existingItem = prevItems.find((item) => item.id === product.id);

      if (existingItem) {
        return prevItems.map((item) =>
          item.id === product.id
            ? { ...item, quantity: item.quantity + product.quantity }
            : item
        );
      } else {
        return [...prevItems, { ...product, quantity: product.quantity }];
      }
    });
  };

  const handleRemoveFromCart = (id) => {
    setCartItems((prevItems) => prevItems.filter((item) => item.id !== id));
  };

  const handleUpdateQuantity = (id, quantity) => {
    setCartItems((prevItems) =>
      prevItems.map((item) =>
        item.id === id ? { ...item, quantity: Math.max(quantity, 1) } : item
      )
    );
  };

  const handleClearCart = () => {
    setCartItems([]); // Clear the cart items
  };

  const toggleCart = () => {
    setIsCartOpen(!isCartOpen);
  };

  if (loading) {
    return <div>Loading products...</div>; // Loading state
  }

  if (error) {
    return <div>Error: {error}</div>; // Error state
  }

  return (
    <div className="container">
      <div className="cart-btn">
        <button className="cart-btn-btn" onClick={toggleCart}>
          <i className="fa-solid fa-cart-shopping"> {cartItems.length} </i>
        </button>
      </div>
      <div className="pro-grid">
        {products.map((product) => (
          <div
            className="product-item"
            key={product.id}
            onClick={() => handleProductClick(product)}
          >
            <div className="img-con">
              <img src={product.imagepath} alt={product.name} />
            </div>
            <h3>{product.name}</h3>
            <p>${product.price}</p>
          </div>
        ))}
      </div>
      {selectedProduct && (
        <ProductDetail
          product={selectedProduct}
          onClose={handleCloseDetail}
          onAddToCart={handleAddToCart}
        />
      )}
      {isCartOpen && (
        <Cart
          cartItems={cartItems}
          onRemove={handleRemoveFromCart}
          onUpdateQuantity={handleUpdateQuantity}
          onClose={toggleCart}
          onClearCart={handleClearCart} // Pass the clear cart function
        />
      )}
    </div>
  );
};

export default Getproduct;
