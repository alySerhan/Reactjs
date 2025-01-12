import React, { useState } from "react";
import "./Cart.css"; // Optional: Add styles for the cart
import arrow from "../../../images/arrow.png";
import bin from "../../../images/bin.png";
import { db } from "../../Admin/firebase"; // Import Firebase database
import { collection, addDoc } from "firebase/firestore"; // Import Firestore functions

const Cart = ({
  cartItems,
  onRemove,
  onClose,
  onUpdateQuantity,
  onClearCart,
}) => {
  const [username, setUsername] = useState("");
  const [phone, setPhoneNumber] = useState("");
  const [notes, setNotes] = useState("");
  const [showOrderForm, setShowOrderForm] = useState(false); // New state for order form visibility

  const totalPrice = cartItems.reduce(
    (total, item) => total + (parseFloat(item.price) * item.quantity || 0),
    0
  );

  const handleOrderSubmit = async (e) => {
    e.preventDefault();
    try {
      const orderData = {
        username,
        phone,
        notes,
        items: cartItems,
        totalPrice,
        createdAt: new Date(),
      };
      const ordersCollectionRef = collection(db, "orders");
      await addDoc(ordersCollectionRef, orderData);
      alert("Order placed successfully!");
      onClearCart(); // Clear cart after placing order
      setShowOrderForm(false); // Hide order form after submission
    } catch (error) {
      console.error("Error placing order:", error);
    }
  };

  const handlePhoneNumberChange = (e) => {
    const value = e.target.value;

    // Allow only numeric input and limit to 8 characters
    if (/^\d*$/.test(value) && value.length <= 8) {
      setPhoneNumber(value);
    }
  };
  return (
    <div className="cart">
      <button className="btn btn-danger" onClick={onClose}>
        <img src={arrow} alt="back" width="16" />
      </button>
      <h2>Your Cart</h2>
      {cartItems.length === 0 ? (
        <p>Your cart is empty.</p>
      ) : (
        <>
          {!showOrderForm ? (
            <>
              <table className="table">
                <thead>
                  <tr>
                    <th scope="col" colSpan="2">
                      Product
                    </th>
                    <th scope="col">Price</th>
                    <th scope="col">Quantity</th>
                    <th scope="col" id="mobile-none">
                      Total
                    </th>
                    <th scope="col">Actions</th>
                  </tr>
                </thead>
                <tbody>
                  {cartItems.map((item) => (
                    <tr key={item.id}>
                      <td>
                        <img
                          src={item.imagepath}
                          alt={item.name}
                          className="table-img"
                        />
                      </td>
                      <td className="align-middle">{item.name}</td>
                      <td className="align-middle">
                        ${parseFloat(item.price).toFixed(2)}
                      </td>
                      <td className="align-middle">
                        <input
                          type="number"
                          value={item.quantity}
                          min="1"
                          onChange={(e) =>
                            onUpdateQuantity(item.id, Number(e.target.value))
                          }
                          style={{ width: "60px" }} // Optional: Set input width
                        />
                      </td>
                      <td className="align-middle" id="mobile-none">
                        ${(parseFloat(item.price) * item.quantity).toFixed(2)}
                      </td>
                      <td className="align-middle">
                        <button
                          onClick={() => onRemove(item.id)}
                          className="btn btn-danger"
                        >
                          <img src={bin} alt="" />
                        </button>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>

              <div className="cart-summary">
                <h2>Order Summary</h2>
                <h3>
                  <span>Total Price:</span> ${totalPrice.toFixed(2)}
                </h3>
                <br />
                <button onClick={onClearCart} className="btn btn-danger">
                  Clear Cart
                </button>
                <button
                  onClick={() => setShowOrderForm(true)}
                  className="btn btn-primary"
                >
                  Continue
                </button>
              </div>
            </>
          ) : (
            <div className="orderform">
              <button
                onClick={() => setShowOrderForm(false)}
                className="btn btn-secondary mb-3"
              >
                Back
              </button>
              <form onSubmit={handleOrderSubmit} className="order-form">
                <h3>Place Your Order</h3>
                <div className="mb-3">
                  <input
                    type="text"
                    className="form-control"
                    placeholder="Full name"
                    value={username}
                    onChange={(e) => setUsername(e.target.value)}
                    required
                  />
                </div>
                <div className="mb-3">
                  <input
                    type="tel"
                    className="form-control"
                    placeholder="Phone Number"
                    value={phone}
                    onChange={handlePhoneNumberChange}
                    required
                  />
                </div>
                <div className="mb-3">
                  <textarea
                    className="form-control"
                    placeholder="Notes"
                    value={notes}
                    onChange={(e) => setNotes(e.target.value)}
                  />
                </div>
                <button type="submit" className="btn btn-success">
                  Place Order
                </button>
              </form>
            </div>
          )}
        </>
      )}
    </div>
  );
};

export default Cart;
