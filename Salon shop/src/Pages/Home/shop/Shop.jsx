import "./shop.css";
import { Link } from "react-router-dom";
import React, { useState, useEffect } from "react";
import { db } from "../../Admin/firebase"; // Adjust the path as needed
import { collection, getDocs } from "firebase/firestore";
const Shop = () => {
  const [products, setProducts] = useState([]);

  const productsCollectionRef = collection(db, "products");

  const getProducts = async () => {
    try {
      const data = await getDocs(productsCollectionRef);
      setProducts(data.docs.map((doc) => ({ ...doc.data(), id: doc.id })));
    } catch (error) {
      console.error("Error fetching products:", error);
    }
  };

  useEffect(() => {
    getProducts();
  }, []);

  // Select only the first three products
  const featuredProducts = products.slice(0, 3);

  return (
    <div className="shop">
      <h1>Shop</h1>
      <hr />
      <div className="shop-menu">
        {featuredProducts.map((product) => (
          <Link to={`/products/`} key={product.id} className="product-item">
            <div className="img-con">
              <img src={product.imagepath} alt={product.name} />
            </div>
            <h3>{product.name}</h3>
            <p>${product.price}</p>
          </Link>
        ))}
      </div>
      <Link to="/products">Shop All</Link>
    </div>
  );
};

export default Shop;
