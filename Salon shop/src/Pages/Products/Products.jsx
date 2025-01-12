import React from "react";
import Getproduct from "./getproduct/getpro.jsx";
import "./products.css";

const Products = () => {
  return (
    <div className="Product-main">
      <h1>Our Products</h1>
      <hr />
      <div className="products-list">
        <div className="products-types"></div>
      </div>
      <Getproduct />
    </div>
  );
};

export default Products;
