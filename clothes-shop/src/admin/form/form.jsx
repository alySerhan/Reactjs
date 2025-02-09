import { useState } from "react";
import { db } from "../../firebase"; // Adjust the path as necessary
import { collection, addDoc } from "firebase/firestore";
import "./form.css";

const Adminform = () => {
  const [formData, setFormData] = useState({
    name: "",
    img: "",
    img1: "",
    img2: "",
    img3: "",

    price: "",
    offer: "",
    gender: "men",
    category: "",
    brand: "",
    sport: "",
    sizes: [], // Initialize as an array
    colors: [], // Initialize as an array
    available: false,
    newarrival: false,
    description: "",
  });

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    if (name === "size") {
      setFormData((prevData) => {
        const sizes = checked
          ? [...prevData.sizes, value]
          : prevData.sizes.filter((size) => size !== value);
        return { ...prevData, sizes };
      });
    } else if (name === "colors") {
      setFormData((prevData) => ({
        ...prevData,
        [name]: value.split(",").map((color) => color.trim()), // Split and trim to create an array
      }));
    } else {
      setFormData((prevData) => ({
        ...prevData,
        [name]: type === "checkbox" ? checked : value,
      }));
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    console.log("Form submitted:", formData); // Log the form data

    try {
      const docRef = await addDoc(collection(db, "products"), {
        ...formData,
        sizes: formData.sizes, // Save sizes as an array
        colors: formData.colors, // Save colors as an array
      });
      console.log("Document written with ID: ", docRef.id); // Log the document ID
      alert("Product added successfully!");
      setFormData({
        name: "",
        img: "",
        img1: "",
        img2: "",
        img3: "",
        price: "",
        offer: "",
        gender: "men",
        category: "",
        brand: "",
        sport: "",
        sizes: [],
        colors: [],
        available: false,
        newarrival: false,
        description: "",
      });
    } catch (error) {
      console.error("Error adding product: ", error.message);
      alert("Error adding product: " + error.message);
    }
  };

  return (
    <div className="admin-form">
      <h1 className="form-heading">Add New Product</h1>
      <form onSubmit={handleSubmit}>
        {/* Form fields */}
        <div className="form-div">
          <label htmlFor="name">
            <p>Product Name:</p>
            <input
              type="text"
              name="name"
              value={formData.name}
              onChange={handleChange}
              required
            />
          </label>
        </div>
        <div className="form-div">
          <label htmlFor="img">
            <p>Image Path</p>
            <small>Paste the link of the image</small>
            <input
              type="text"
              name="img"
              value={formData.img}
              onChange={handleChange}
              required
            />
          </label>
        </div>

        <div className="form-div">
          <label htmlFor="img1">
            <p>Image Path 2</p>
            <small>Paste the link of the image</small>
            <input
              type="text"
              name="img1"
              value={formData.img1}
              onChange={handleChange}
            />
          </label>
        </div>
        <div className="form-div">
          <label htmlFor="img2">
            <p>Image Path 3</p>
            <small>Paste the link of the image</small>
            <input
              type="text"
              name="img2"
              value={formData.img2}
              onChange={handleChange}
            />
          </label>
        </div>
        <div className="form-div">
          <label htmlFor="img3">
            <p>Image Path 4</p>
            <small>Paste the link of the image</small>
            <input
              type="text"
              name="img3"
              value={formData.img3}
              onChange={handleChange}
            />
          </label>
        </div>
        <div className="form-div">
          <label htmlFor="price">
            <p>Price:</p>
            <input
              type="number"
              name="price"
              value={formData.price}
              onChange={handleChange}
              required
            />
          </label>
        </div>
        <div className="form-div">
          <label htmlFor="offer">
            <p>
              Offer <small>("if there is an offer")</small>
            </p>
            <input
              type="number"
              name="offer"
              value={formData.offer}
              onChange={handleChange}
            />
          </label>
        </div>
        <div className="form-div">
          <label htmlFor="gender">
            <p>Gender:</p>
            <select
              name="gender"
              value={formData.gender}
              onChange={handleChange}
              required
            >
              <option value="men">Men</option>
              <option value="women">Women</option>
              <option value="kids">Kids</option>
              <option value="all">All</option>
              <option value="men&women">Men & Women</option>
            </select>
          </label>
        </div>
        <div className="form-div">
          <label htmlFor="category">
            <p>Category:</p>
            <select
              name="category"
              value={formData.category}
              onChange={handleChange}
              required
            >
              <option value=""></option>
              <option value="jackets">Jackets</option>
              <option value="backpacks">Backpacks</option>
              <option value="shoes">Shoes</option>
              <option value="pants">Pants</option>
              <option value="shorts">Shorts</option>
              <option value="t-shirts">T-Shirts</option>
              <option value="tank-tops">Tank Tops</option>
              <option value="sports">Sports</option>
            </select>
          </label>
        </div>
        <div className="form-div">
          <label htmlFor="brand">
            <p>Brand:</p>
            <select name="brand" value={formData.brand} onChange={handleChange}>
              <option value=""></option>
              <option value="Addidas">Addidas</option>
              <option value="Nike">Nike</option>
              <option value="north-face">North Face</option>
              <option value="Puma">Puma</option>
              <option value="under-armour">Under Armour</option>
            </select>
          </label>
        </div>
        <div className="form-div">
          <label htmlFor="sport">
            <p>Sport:</p>
            <select name="sport" value={formData.sport} onChange={handleChange}>
              <option value=""></option>
              <option value="football">Football</option>
              <option value="basketball">Basketball</option>
            </select>
          </label>
        </div>
        <div className="form-div">
          <label htmlFor="sizes">
            <p>Size:</p>
            <div className="checkbox-div">
              {["xs", "s", "m", "l", "xl", "xxl"].map((size) => (
                <label key={size}>
                  {size}{" "}
                  <input
                    type="checkbox"
                    name="size"
                    value={size}
                    checked={formData.sizes.includes(size)}
                    onChange={handleChange}
                  />
                </label>
              ))}
            </div>
            <small>or: ("38, 39,45...")</small>
            <input
              type="text"
              name="sizesText" // New name for the text input
              placeholder="Enter sizes, separated by commas"
              value={formData.sizes.join(", ")} // Display selected sizes as a string
              onChange={(e) => {
                const sizesArray = e.target.value
                  .split(",")
                  .map((s) => s.trim());
                setFormData((prevData) => ({
                  ...prevData,
                  sizes: sizesArray, // Update sizes state directly from text input
                }));
              }}
            />
          </label>
        </div>
        <div className="form-div">
          <label htmlFor="colors">
            <p>Colors:</p>
            <input
              type="text"
              name="colors"
              id="colors"
              placeholder="Enter colors, separated by commas"
              value={formData.colors.join(", ")} // Show colors as a string
              onChange={handleChange}
            />
          </label>
        </div>
        <div className="form-div">
          <label htmlFor="available">
            Available
            <input
              type="checkbox"
              name="available"
              checked={formData.available}
              onChange={handleChange}
            />
          </label>
        </div>
        <div className="form-div">
          <label htmlFor="newarrival">
            New Arrival:
            <input
              type="checkbox"
              name="newarrival"
              checked={formData.newarrival}
              onChange={handleChange}
            />
          </label>
        </div>
        <div className="form-div">
          <label htmlFor="description">
            Description:
            <textarea
              name="description"
              onChange={handleChange}
              value={formData.description} // Corrected this line
            ></textarea>
          </label>
        </div>
        <button type="submit">Add Product</button>
      </form>
    </div>
  );
};

export default Adminform;
