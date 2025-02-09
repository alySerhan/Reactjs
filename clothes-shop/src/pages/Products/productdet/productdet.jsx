import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { db } from "../../../firebase";
import { doc, getDoc } from "firebase/firestore";
import "./product.css";

const ProductDetails = () => {
  const { productId } = useParams();
  const [product, setProduct] = useState(null);
  const [loading, setLoading] = useState(true);
  const [mainImg, setMainImg] = useState("");
  const [showCartForm, setShowCartForm] = useState(false);
  const [cartForm, setCartForm] = useState({
    size: "",
    color: "",
    quantity: 1,
  });

  const handleImageClick = (img) => {
    if (img) {
      setMainImg(img);
    }
  };

  const calculateTotal = () => {
    return (product?.price || 0) * cartForm.quantity;
  };

  const handleQuantityChange = (e) => {
    const value = Math.max(1, parseInt(e.target.value) || 1);
    setCartForm((prev) => ({ ...prev, quantity: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    const cartItem = {
      productId,
      name: product.name,
      size: cartForm.size,
      color: cartForm.color,
      quantity: cartForm.quantity,
      price: product.price,
      totalPrice: calculateTotal(),
      timestamp: Date.now(),
      image: mainImg,
    };

    const existingCart = JSON.parse(localStorage.getItem("cart")) || [];
    existingCart.push(cartItem);
    localStorage.setItem("cart", JSON.stringify(existingCart));

    console.log("Item saved to cart:", cartItem);
    setShowCartForm(false);
  };

  useEffect(() => {
    const fetchProductDetails = async () => {
      try {
        const productRef = doc(db, "products", productId);
        const docSnap = await getDoc(productRef);

        if (docSnap.exists()) {
          const fetchedProduct = { id: docSnap.id, ...docSnap.data() };
          setProduct(fetchedProduct);
          setMainImg(fetchedProduct.img);
        } else {
          console.log("No such document!");
        }
      } catch (error) {
        console.error("Error fetching product details: ", error);
      } finally {
        setLoading(false);
      }
    };

    fetchProductDetails();
  }, [productId]);

  if (loading) {
    return <div>Loading...</div>;
  }

  if (!product) {
    return <div>No product found.</div>;
  }
  return (
    <div className="pro-det">
      <div className="pro-det-container">
        <div className="pro-det-1" id="for-desktop2">
          {product.img1 && (
            <div
              className="div1"
              onClick={() => handleImageClick(product.img1)}
            >
              <img src={product.img1} alt={product.name} />
            </div>
          )}
          {product.img2 && (
            <div
              className="div2"
              onClick={() => handleImageClick(product.img2)}
            >
              <img src={product.img2} alt={product.name} />
            </div>
          )}
          {product.img3 && (
            <div
              className="div3"
              onClick={() => handleImageClick(product.img3)}
            >
              <img src={product.img3} alt={product.name} />
            </div>
          )}
          {product.img4 && (
            <div
              className="div4"
              onClick={() => handleImageClick(product.img4)}
            >
              <img src={product.img4} alt={product.name} />
            </div>
          )}
          <div className="div6">
            <img src={mainImg} alt={product.name} />
          </div>
        </div>
        <div className="pro-det-1" id="for-mobile2">
          <div className="main-img">
            <div className="div6">
              <img src={mainImg} alt={product.name} />
            </div>
          </div>
          <div className="secondory-imgs">
            {product.img1 && (
              <div
                className="div1"
                onClick={() => handleImageClick(product.img1)}
              >
                <img src={product.img1} alt={product.name} />
              </div>
            )}
            {product.img2 && (
              <div
                className="div2"
                onClick={() => handleImageClick(product.img2)}
              >
                <img src={product.img2} alt={product.name} />
              </div>
            )}
            {product.img3 && (
              <div
                className="div3"
                onClick={() => handleImageClick(product.img3)}
              >
                <img src={product.img3} alt={product.name} />
              </div>
            )}
            {product.img4 && (
              <div
                className="div4"
                onClick={() => handleImageClick(product.img4)}
              >
                <img src={product.img4} alt={product.name} />
              </div>
            )}
          </div>
        </div>
        <div className="pro-det-2">
          <h2>{product.name}</h2>
          <p className="pro-description">{product.description}</p>
          <div className="size-color-cont">
            <div className="colors">
              <h5>Colors</h5>
              <div className="colors-det">
                {product.colors.map((color, index) => (
                  <div
                    key={index}
                    className="color"
                    style={{
                      backgroundColor: color,
                    }}
                  ></div>
                ))}
              </div>
            </div>
            <div className="sizes">
              <h5>Size</h5>
              <div className="size-cont">
                {product.sizes.map((size, index) => (
                  <div className="sizess" key={index}>
                    {size}
                  </div>
                ))}
              </div>
            </div>
          </div>
          <div className="prices-det">
            <p>{product.price}$</p>
            <p>{product.brand}</p>
          </div>
          <button className="adding-cart" onClick={() => setShowCartForm(true)}>
            Add To Cart
          </button>
          <br />
          <button className="back" onClick={() => window.history.back()}>
            Go Back
          </button>
        </div>
      </div>

      {showCartForm && (
        <div className="cart-form-overlay">
          <div className="cart-form-modal">
            <form onSubmit={handleSubmit} className="cart-form">
              <h3>Add to Cart</h3>

              <div className="form-group">
                <label>Size:</label>
                <select
                  value={cartForm.size}
                  onChange={(e) =>
                    setCartForm((prev) => ({ ...prev, size: e.target.value }))
                  }
                  required
                >
                  <option value="">Select size</option>
                  {product.sizes.map((size, index) => (
                    <option key={index} value={size}>
                      {size}
                    </option>
                  ))}
                </select>
              </div>

              <div className="form-group">
                <label>Color:</label>
                <select
                  value={cartForm.color}
                  onChange={(e) =>
                    setCartForm((prev) => ({ ...prev, color: e.target.value }))
                  }
                  required
                >
                  <option value="">Select color</option>
                  {product.colors.map((color, index) => (
                    <option
                      key={index}
                      value={color}
                      style={{ backgroundColor: color, color: "white" }}
                    >
                      {color}
                    </option>
                  ))}
                </select>
              </div>

              <div className="form-group">
                <label>Quantity:</label>
                <input
                  type="number"
                  min="1"
                  value={cartForm.quantity}
                  onChange={handleQuantityChange}
                  required
                />
              </div>

              <div className="price-details">
                <p>Price: ${product.price}</p>
                <p>Total: ${calculateTotal()}</p>
              </div>

              <div className="form-actions">
                <button type="submit" className="save-button">
                  Save to Cart
                </button>
                <button
                  type="button"
                  className="cancel-button"
                  onClick={() => setShowCartForm(false)}
                >
                  Cancel
                </button>
              </div>
            </form>
          </div>
        </div>
      )}
    </div>
  );
};

export default ProductDetails;
