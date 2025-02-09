import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { db } from "../../firebase"; // Adjust the import path as necessary
import { collection, getDocs } from "firebase/firestore";
import "./products.css";
import { useNavigate } from "react-router-dom";

const Products = () => {
  const [liked, setLiked] = useState({}); // Track likes per product
  const { category, brand, gender, sport, searchTerm } = useParams(); // Get parameters
  const [products, setProducts] = useState([]);
  const [filteredProducts, setFilteredProducts] = useState([]); // State for filtered products

  useEffect(() => {
    const fetchProducts = async () => {
      try {
        const productsRef = collection(db, "products"); // Collection reference
        const querySnapshot = await getDocs(productsRef);
        const fetchedProducts = querySnapshot.docs.map((doc) => ({
          id: doc.id,
          ...doc.data(),
        }));

        setProducts(fetchedProducts); // Store all products

        // Load liked products from local storage
        const storedFavorites =
          JSON.parse(localStorage.getItem("favorites")) || [];
        const likedProducts = {};
        storedFavorites.forEach((fav) => {
          likedProducts[fav.id] = true; // Mark as liked
        });
        setLiked(likedProducts); // Set initial liked state
      } catch (error) {
        console.error("Error fetching products: ", error);
      }
    };

    fetchProducts();
  }, []); // Fetch all products on mount

  useEffect(() => {
    // Filter products based on parameters
    let filtered = products.filter((product) => product.available); // Filter for available products

    if (gender) {
      // Adjust filtering based on selected gender
      if (gender === "men") {
        filtered = filtered.filter((product) =>
          ["men", "all", "men&women"].includes(product.gender)
        );
      } else if (gender === "women") {
        filtered = filtered.filter((product) =>
          ["women", "all", "men&women"].includes(product.gender)
        );
      } else if (gender === "kids") {
        filtered = filtered.filter((product) =>
          ["kids", "all"].includes(product.gender)
        );
      }
    }

    if (brand) {
      filtered = filtered.filter((product) => product.brand === brand);
    }
    if (category) {
      filtered = filtered.filter((product) => product.category === category);
    }
    if (sport) {
      filtered = filtered.filter((product) =>
        [product.sport, "all"].includes(sport)
      );
    }
    if (searchTerm) {
      filtered = filtered.filter((product) =>
        product.name.toLowerCase().includes(searchTerm.toLowerCase())
      );
    }

    setFilteredProducts(filtered); // Update filtered products state
  }, [products, category, brand, gender, sport, searchTerm]); // Dependencies

  const navigate = useNavigate();

  const handleLikeToggle = (product) => {
    setLiked((prevLiked) => {
      const newLiked = {
        ...prevLiked,
        [product.id]: !prevLiked[product.id], // Toggle like
      };

      // Update local storage
      const favorites = Object.keys(newLiked)
        .filter((key) => newLiked[key]) // Get liked products
        .map((key) => ({
          id: key,
          ...products.find((p) => p.id === key), // Find product details
        }));

      localStorage.setItem("favorites", JSON.stringify(favorites)); // Save to local storage

      return newLiked;
    });
  };

  return (
    <div className="products">
      <h1>
        {searchTerm
          ? `Results for "${searchTerm}"`
          : category
          ? `${category} products`
          : brand
          ? `Products by ${brand}`
          : gender
          ? `Products for ${gender}`
          : "All Products"}
      </h1>
      {filteredProducts.length > 0 ? (
        <div className="products-container">
          {filteredProducts.map((product) => (
            <div className="product" key={product.id}>
              <img src={product.img} alt={product.name} />
              <div className="product-text">
                <h3 className="product-name">{product.name}</h3>
                <div className="price-offer">
                  <h4 className="product-price">{product.price}$</h4>
                  {product.offer && <p className="offer">{product.offer}$</p>}
                </div>
              </div>
              <div className="product-btns">
                <button
                  className="product-details"
                  onClick={() => navigate(`/product/${product.id}`)} // Navigate to product details
                >
                  More Details
                </button>
                <button
                  className="product-like"
                  onClick={() => handleLikeToggle(product)}
                >
                  <i
                    className={
                      liked[product.id] ? "fa fa-heart" : "fa-regular fa-heart"
                    }
                    aria-hidden="true"
                  ></i>
                </button>
              </div>
            </div>
          ))}
        </div>
      ) : (
        <p>
          No products found for this category, brand, gender, sport, or search
          term.
        </p>
      )}
    </div>
  );
};

export default Products;
