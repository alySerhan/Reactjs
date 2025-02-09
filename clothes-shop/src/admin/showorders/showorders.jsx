import { useState, useEffect } from "react";
import { db } from "../../firebase";
import { Link } from "react-router-dom";
import {
  collection,
  getDocs,
  doc,
  deleteDoc,
  updateDoc,
} from "firebase/firestore";

const Showorders = () => {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const querySnapshot = await getDocs(collection(db, "orders"));
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
        await deleteDoc(doc(db, "orders", id)); // Change to "orders" collection
        setData(data.filter((item) => item.id !== id));
      } catch (err) {
        setError(err.message);
      }
    }
  };

  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error: {error}</p>;

  return (
    <div className="">
      <div className="">
        <table className="table">
          <thead>
            <tr>
              <th scope="col">Name</th>
              <th scope="col">Phone</th>
              <th scope="col">Total Price</th>
              <th scope="col">Cart Items</th>
              <th scope="col">Delivery</th>
              <th scope="col">Actions</th> {/* Added Actions column */}
            </tr>
          </thead>
          <tbody>
            {data.map((item) => (
              <tr key={item.id}>
                <td>{item.fullName}</td>
                <td>{item.phone}</td>
                <td>{item.totalPrice}</td>
                <td>
                  {item.cartItems.map((i) => (
                    <li key={i.productId}>
                      <Link to={`/product/${i.productId}`}>Go to product</Link>
                      <p>Size: {i.size}</p>
                      <p>Color: {i.color}</p>
                      <p>Quantity: {i.quantity}</p>
                    </li>
                  ))}
                </td>
                <td>
                  {item.delivery ? (
                    <>
                      {item.city} {item.address}, {item.streetName},{" "}
                      {item.buildingName}
                    </>
                  ) : (
                    "none"
                  )}
                </td>
                <td>
                  <button
                    onClick={() => handleDelete(item.id)}
                    className="btn btn-danger"
                  >
                    <i className="fa fa-trash"></i>
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default Showorders;
