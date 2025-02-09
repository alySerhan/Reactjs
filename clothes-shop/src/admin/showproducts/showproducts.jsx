import React, { useEffect, useState } from "react";
import "./showproducts.css";
import { db } from "../../firebase";
import {
  collection,
  getDocs,
  doc,
  deleteDoc,
  updateDoc,
} from "firebase/firestore";

const Showproducts = () => {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [editableRow, setEditableRow] = useState(null);
  const [formData, setFormData] = useState({
    sizes: [], // Initialize as an empty array
    colors: [], // Initialize as an empty array
  });

  useEffect(() => {
    const fetchData = async () => {
      try {
        const querySnapshot = await getDocs(collection(db, "products"));
        const items = querySnapshot.docs.map((doc) => ({
          id: doc.id,
          ...doc.data(),
        }));
        setData(items);
      } catch (err) {
        setError(err.message);
      } finally {
        setLoading(false);
      }
    };

    fetchData();
  }, []);

  const handleDelete = async (id) => {
    const isConfirmed = window.confirm(
      "Are you sure you want to delete this item?"
    );
    if (isConfirmed) {
      try {
        await deleteDoc(doc(db, "products", id));
        setData(data.filter((item) => item.id !== id));
      } catch (err) {
        setError(err.message);
      }
    }
  };

  const handleEdit = (item) => {
    setEditableRow(item.id);
    setFormData({
      ...item,
      sizes: item.sizes || [],
      colors: item.colors || [],
    }); // Ensure sizes and colors are arrays
  };

  const handleCancel = () => {
    setEditableRow(null);
    setFormData({ sizes: [], colors: [] }); // Reset correctly
  };

  const handleSave = async (id) => {
    try {
      await updateDoc(doc(db, "products", id), formData);
      setData(
        data.map((item) => (item.id === id ? { ...item, ...formData } : item))
      );
      setEditableRow(null);
    } catch (err) {
      setError(err.message);
    }
  };

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    setFormData((prevFormData) => ({
      ...prevFormData,
      [name]: type === "checkbox" ? checked : value,
    }));

    // Handle sizes and colors as arrays
    if (name === "sizes" || name === "colors") {
      const arrayValues = value.split(",").map((item) => item.trim());
      setFormData((prevFormData) => ({
        ...prevFormData,
        [name]: arrayValues,
      }));
    }
  };

  if (loading) {
    return <div>Loading...</div>;
  }

  if (error) {
    return <div>Error: {error}</div>;
  }

  return (
    <div className="show-products">
      <div className="table-cont">
        <table className="table">
          <thead>
            <tr>
              <th scope="col">Name</th>
              <th scope="col">Category</th>
              <th scope="col">Brand</th>
              <th scope="col">Gender</th>
              <th scope="col">Colors</th>
              <th scope="col">Sizes</th>
              <th scope="col">Price</th>
              <th scope="col">Offer</th>
              <th scope="col">Available</th>
              <th scope="col">New</th>
              <th scope="col">Sport</th>
              <th scope="col">Description</th>
              <th scope="col">Images</th>
              <th scope="col">Actions</th>
            </tr>
          </thead>
          <tbody>
            {data.map((item) => (
              <tr key={item.id}>
                {editableRow === item.id ? (
                  <>
                    <td>
                      <input
                        name="name"
                        value={formData.name}
                        onChange={handleChange}
                      />
                    </td>
                    <td>
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
                    </td>
                    <td>
                      <select
                        name="brand"
                        value={formData.brand}
                        onChange={handleChange}
                      >
                        <option value=""></option>
                        <option value="Addidas">Addidas</option>
                        <option value="Nike">Nike</option>
                        <option value="north-face">North Face</option>
                        <option value="Puma">Puma</option>
                        <option value="under-armour">Under Armour</option>
                      </select>
                    </td>
                    <td>
                      <select
                        name="gender"
                        value={formData.gender}
                        onChange={handleChange}
                      >
                        <option value="men">Men</option>
                        <option value="women">Women</option>
                        <option value="kids">Kids</option>
                        <option value="all">All</option>
                        <option value="men&women">Men & Women</option>
                      </select>
                    </td>
                    <td>
                      <input
                        name="colors"
                        value={formData.colors.join(", ")}
                        onChange={handleChange}
                      />
                    </td>
                    <td>
                      <input
                        name="sizes"
                        value={formData.sizes.join(", ")}
                        onChange={handleChange}
                      />
                    </td>
                    <td>
                      <input
                        name="price"
                        type="number"
                        value={formData.price}
                        onChange={handleChange}
                      />
                    </td>
                    <td>
                      <input
                        name="offer"
                        value={formData.offer}
                        onChange={handleChange}
                      />
                    </td>
                    <td>
                      <input
                        name="available"
                        type="checkbox"
                        checked={formData.available}
                        onChange={handleChange}
                      />
                    </td>
                    <td>
                      <input
                        name="newarrival"
                        type="checkbox"
                        checked={formData.newarrival}
                        onChange={handleChange}
                      />
                    </td>
                    <td>
                      <select
                        name="sport"
                        value={formData.sport}
                        onChange={handleChange}
                      >
                        <option value=""></option>
                        <option value="football">Football</option>
                        <option value="basketball">Basketball</option>
                      </select>
                    </td>
                    <td>
                      <input
                        name="description"
                        value={formData.description}
                        onChange={handleChange}
                      />
                    </td>
                    <td>
                      {formData.img} {formData.img1} {formData.img2}{" "}
                      {formData.img3}
                    </td>
                    <td>
                      <button onClick={() => handleSave(item.id)}>Save</button>
                      <button onClick={handleCancel}>Cancel</button>
                    </td>
                  </>
                ) : (
                  <>
                    <td>{item.name}</td>
                    <td>{item.category}</td>
                    <td>{item.brand}</td>
                    <td>{item.gender}</td>
                    <td>{item.colors.join(", ")}</td>
                    <td>{item.sizes.join(", ")}</td>
                    <td>{item.price}</td>
                    <td>{item.offer}</td>
                    <td>{item.available ? "Yes" : "No"}</td>
                    <td>{item.newarrival ? "Yes" : "No"}</td>
                    <td>{item.sport}</td>
                    <td>{item.description}</td>
                    <td>
                      <a href={item.img}>{item.img}</a>
                      <a href={item.img1}>{item.img1}</a>
                      <a href={item.img2}>{item.img2}</a>
                      <a href={item.img3}>{item.img3}</a>
                    </td>
                    <td>
                      <button onClick={() => handleEdit(item)}>Edit</button>
                      <button
                        className="btn btn-danger"
                        onClick={() => handleDelete(item.id)}
                      >
                        <i className="fa fa-trash"></i>
                      </button>
                    </td>
                  </>
                )}
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default Showproducts;
