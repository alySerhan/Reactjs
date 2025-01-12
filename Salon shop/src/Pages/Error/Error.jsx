import React from "react";
import "./Error.css"; // Import the CSS file

const Error = () => {
  return (
    <div className="error-container">
      <h1 className="error-title">404</h1>
      <p className="error-message">Oops! Page Not Found.</p>
      <a href="/" className="error-link">
        Go Back Home
      </a>
    </div>
  );
};

export default Error;
