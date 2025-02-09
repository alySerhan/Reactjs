import "./App.css";
import Header from "./Components/header/header";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { useEffect, useState, lazy, Suspense } from "react";
import Footer from "./Components/footer/footer";
import ScrollToTop from "./ScrollToTop";

const Home = lazy(() => import("./pages/Home/home"));
const Admin = lazy(() => import("./admin/admin"));
const Products = lazy(() => import("./pages/Products/products"));
const ProductDetails = lazy(() =>
  import("./pages/Products/productdet/productdet")
);
const Favorites = lazy(() => import("./pages/Favorites/Favorites"));
const Cart = lazy(() => import("./pages/cart/cart"));

function App() {
  const [favorites, setFavorites] = useState([]);

  useEffect(() => {
    const storedFavorites = JSON.parse(localStorage.getItem("favorites")) || [];
    setFavorites(storedFavorites);
  }, []);

  const handleUpdateFavorites = (updatedFavorites) => {
    setFavorites(updatedFavorites);
    localStorage.setItem("favorites", JSON.stringify(updatedFavorites));
  };

  return (
    <Router>
      <ScrollToTop />
      <div className="App">
        <Header favoritesCount={favorites.length} />
        <Suspense fallback={<div>Loading...</div>}>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/admin" element={<Admin />} />
            <Route path="/*" element={<h1>Error</h1>} />
            <Route path="/category/:category" element={<Products />} />
            <Route path="/brand/:brand" element={<Products />} />
            <Route path="/gender/:gender" element={<Products />} />
            <Route path="/sport/:sport" element={<Products />} />
            <Route path="/search/:searchTerm" element={<Products />} />
            <Route path="/product/:productId" element={<ProductDetails />} />
            <Route path="/cart" element={<Cart />} />
            <Route
              path="/favorites"
              element={
                <Favorites
                  favorites={favorites}
                  onUpdateFavorites={handleUpdateFavorites}
                />
              }
            />
          </Routes>
        </Suspense>
        <Footer />
      </div>
    </Router>
  );
}

export default App;
