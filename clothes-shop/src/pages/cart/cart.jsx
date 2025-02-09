import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom"; // Import useNavigate for navigation
import { db } from "../../firebase"; // Import your Firebase setup
import { collection, addDoc } from "firebase/firestore"; // Import Firestore functions
import "./cart.css";

const Cart = () => {
  const [cartItems, setCartItems] = useState([]);
  const [showForm, setShowForm] = useState(false);
  const [formData, setFormData] = useState({
    fullName: "",
    phone: "",
    verification: false,
    delivery: false,
    city: "Beirut",
    address: "",
    buildingName: "",
    streetName: "",
  });
  const navigate = useNavigate(); // Initialize useNavigate

  useEffect(() => {
    const loadCartItems = () => {
      const savedCart = localStorage.getItem("cart");
      if (savedCart) {
        setCartItems(JSON.parse(savedCart));
      }
    };

    loadCartItems();

    window.addEventListener("storage", loadCartItems);

    return () => {
      window.removeEventListener("storage", loadCartItems);
    };
  }, []);

  const removeFromCart = (timestamp) => {
    const updatedCart = cartItems.filter(
      (item) => item.timestamp !== timestamp
    );
    setCartItems(updatedCart);
    localStorage.setItem("cart", JSON.stringify(updatedCart));
  };

  const updateQuantity = (timestamp, newQuantity) => {
    const updatedCart = cartItems.map((item) => {
      if (item.timestamp === timestamp) {
        const quantity = Math.max(1, newQuantity);
        return {
          ...item,
          quantity,
          totalPrice: item.price * quantity,
        };
      }
      return item;
    });
    setCartItems(updatedCart);
    localStorage.setItem("cart", JSON.stringify(updatedCart));
  };

  const calculateTotal = () => {
    const deliveryFee = formData.delivery ? 2 : 0; // Add delivery fee if selected
    return (
      cartItems.reduce((total, item) => total + item.totalPrice, 0) +
      deliveryFee
    );
  };

  const viewProductDetails = (productId) => {
    navigate(`/product/${productId}`); // Navigate to product details
  };

  const handleFormChange = (e) => {
    const { name, value, type, checked } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: type === "checkbox" ? checked : value,
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    // Submit form data to Firestore
    try {
      await addDoc(collection(db, "orders"), {
        ...formData,
        cartItems,
        totalPrice: calculateTotal(),
      });
      alert("Order placed successfully!");
      // Clear cart and form data after submission
      setCartItems([]);
      localStorage.removeItem("cart");
      setShowForm(false);
      setFormData({
        fullName: "",
        phone: "",
        verification: false,
        delivery: false,
        city: "Beirut",
        address: "",
        buildingName: "",
        streetName: "",
      });
    } catch (error) {
      console.error("Error submitting order: ", error);
    }
  };

  return (
    <div className="cart-container">
      <h2 className="text-2xl font-bold mb-4">Shopping Cart</h2>

      {cartItems.length === 0 ? (
        <p>Your cart is empty</p>
      ) : (
        <>
          <div className="cart-items" id="desktop-cart">
            {cartItems.map((item) => (
              <div key={item.timestamp} className="cart-item">
                <img src={item.image} alt={item.name} />
                <div className="cart-item-text">
                  <h3>{item.name}</h3>
                  <p>Size: {item.size}</p>
                  <p>Color: {item.color}</p>
                  <div className="cart-item-quantity">
                    <label className="mr-2">Quantity:</label>
                    <input
                      type="number"
                      min="1"
                      value={item.quantity}
                      onChange={(e) =>
                        updateQuantity(item.timestamp, parseInt(e.target.value))
                      }
                      className="w-16 p-1 border rounded"
                    />
                  </div>
                  <p className="mt-2">Price: ${item.totalPrice}</p>
                  <button
                    onClick={() => viewProductDetails(item.productId)}
                    className="view-details-btn"
                  >
                    View Details
                  </button>
                </div>
                <button
                  onClick={() => removeFromCart(item.timestamp)}
                  className="remove-btn"
                >
                  <i className="fa fa-trash" aria-hidden="true"></i>
                </button>
              </div>
            ))}
          </div>

          <div className="cart-items" id="desktop-cart">
            {cartItems.map((item) => (
              <div key={item.timestamp} className="cart-item">
                <img src={item.image} alt={item.name} />
                <div className="cart-item-text">
                  <h3>{item.name}</h3>
                  <p>Size: {item.size}</p>
                  <p>Color: {item.color}</p>
                  <div className="cart-item-quantity">
                    <label className="mr-2">Quantity:</label>
                    <input
                      type="number"
                      min="1"
                      value={item.quantity}
                      onChange={(e) =>
                        updateQuantity(item.timestamp, parseInt(e.target.value))
                      }
                      className="w-16 p-1 border rounded"
                    />
                  </div>
                  <p className="mt-2">Price: ${item.totalPrice}</p>
                  <button
                    onClick={() => viewProductDetails(item.productId)}
                    className="view-details-btn"
                  >
                    View Details
                  </button>
                </div>
                <button
                  onClick={() => removeFromCart(item.timestamp)}
                  className="remove-btn"
                >
                  <i className="fa fa-trash" aria-hidden="true"></i>
                </button>
              </div>
            ))}
          </div>
          <div className="cart-items-mob" id="mobile-cart">
            {cartItems.map((item) => (
              <div key={item.timestamp} className="cart-item">
                <h3>{item.name}</h3>
                <div className="mob-cart-cont">
                  <img src={item.image} alt={item.name} />
                  <div className="text-cart-mob">
                    {" "}
                    <p>Size: {item.size}</p>
                    <p>Color: {item.color}</p>{" "}
                    <div className="cart-item-quantity">
                      <label className="mr-2">Quantity:</label>
                      <input
                        type="number"
                        min="1"
                        value={item.quantity}
                        onChange={(e) =>
                          updateQuantity(
                            item.timestamp,
                            parseInt(e.target.value)
                          )
                        }
                        className="w-16 p-1 border rounded"
                      />
                    </div>
                    <p className="price">Price: ${item.totalPrice}</p>
                  </div>
                  <div className="mob-cart-btns">
                    <button
                      onClick={() => viewProductDetails(item.productId)}
                      className="view-details-btn"
                    >
                      Details
                    </button>{" "}
                    <button
                      onClick={() => removeFromCart(item.timestamp)}
                      className="remove-btn"
                    >
                      <i className="fa fa-trash" aria-hidden="true"></i>
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>

          <div className="total-cart-price">
            <p>Total: ${calculateTotal()}</p>
            <button className="cart-submit" onClick={() => setShowForm(true)}>
              Buy Now
            </button>
          </div>
          {showForm && (
            <div className="order-form">
              <div className="order-form-content">
                <h3>Order Details</h3>
                <label>
                  Full Name:
                  <input
                    type="text"
                    name="fullName"
                    value={formData.fullName}
                    onChange={handleFormChange}
                    required
                  />
                </label>
                <label>
                  Phone Number:
                  <input
                    type="tel"
                    name="phone"
                    value={formData.phone}
                    onChange={handleFormChange}
                    required
                  />
                </label>

                <label>
                  Delivery:
                  <input
                    type="checkbox"
                    name="delivery"
                    checked={formData.delivery}
                    onChange={handleFormChange}
                  />
                </label>

                {formData.delivery && (
                  <div className="delivery-details">
                    <h4>Delivery Address</h4>
                    <label>
                      Address:
                      <input
                        type="text"
                        name="address"
                        value={formData.address}
                        onChange={handleFormChange}
                        required
                      />
                    </label>
                    <label>
                      Building Name:
                      <input
                        type="text"
                        name="buildingName"
                        value={formData.buildingName}
                        onChange={handleFormChange}
                        required
                      />
                    </label>
                    <label>
                      Street Name:
                      <input
                        type="text"
                        name="streetName"
                        value={formData.streetName}
                        onChange={handleFormChange}
                        required
                      />
                    </label>
                  </div>
                )}
                <div className="buy-form-btns">
                  <button
                    type="submit"
                    className="submit-order"
                    onClick={handleSubmit}
                  >
                    Submit Order
                  </button>
                  <button
                    type="button"
                    className="cancel-order"
                    onClick={() => setShowForm(false)}
                  >
                    Cancel
                  </button>
                </div>
              </div>
            </div>
          )}
        </>
      )}
    </div>
  );
};

export default Cart;
