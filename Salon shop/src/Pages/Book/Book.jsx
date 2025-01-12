import React, { useState } from "react";
import { db } from "../Admin/firebase"; // Adjust the path as needed
import { collection, addDoc } from "firebase/firestore";
import "./Book.css";

const BookingForm = () => {
  const [fullName, setFullName] = useState("");
  const [phoneNumber, setPhoneNumber] = useState("");
  const [dateTime, setDateTime] = useState("");
  const [notes, setNotes] = useState("");
  const [service, setService] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await addDoc(collection(db, "book"), {
        fullName,
        phoneNumber,
        dateTime,
        notes,
        service,
      });
      alert("Booking saved successfully!");
      // Reset the form
      setFullName("");
      setPhoneNumber("");
      setDateTime("");
      setNotes("");
      setService("");
    } catch (error) {
      console.error("Error adding document: ", error);
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
    <div className="container" id="booking-form">
      <h2>Booking Form</h2>
      <form onSubmit={handleSubmit}>
        <div className="mb-3">
          <label className="form-label">Full Name:</label>
          <input
            type="text"
            className="form-control"
            value={fullName}
            onChange={(e) => setFullName(e.target.value)}
            required
          />
        </div>
        <div className="mb-3">
          <label className="form-label">Phone Number:</label>
          <input
            type="tel"
            className="form-control"
            value={phoneNumber}
            onChange={handlePhoneNumberChange}
            required
            placeholder="ex: 70703483"
          />
        </div>
        <div className="mb-3">
          <label className="form-label">Date and Time:</label>
          <input
            type="datetime-local"
            className="form-control"
            value={dateTime}
            onChange={(e) => setDateTime(e.target.value)}
            required
          />
        </div>
        <div className="mb-3">
          <label className="form-label">Notes:</label>
          <textarea
            className="form-control"
            value={notes}
            onChange={(e) => setNotes(e.target.value)}
          />
        </div>
        <div className="mb-3">
          <label className="form-label">Service:</label>
          <select
            className="form-select"
            value={service}
            onChange={(e) => setService(e.target.value)}
            required
          >
            <option value="">Select a service</option>
            <option value="Hair Cut">Hair Cut</option>
            <option value="Hair Style">Hair Style</option>
            <option value="Waxing">Waxing</option>
            <option value="Facial">Facial</option>
            <option value="Manicure">Manicure</option>
            {/* Add more services as needed */}
          </select>
        </div>
        <button type="submit" className="btn btn-primary">
          Book Now
        </button>
      </form>
    </div>
  );
};

export default BookingForm;
