import "./App.css";
import {
  Header,
  Products,
  About,
  Home,
  Book,
  Service,
  Error,
} from "./Components/index.jsx";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

function App() {
  return (
    <div className="App">
      <Router>
        <Header />
        <main>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/products" element={<Products />} />
            <Route path="/about" element={<About />} />
            <Route path="/Book" element={<Book />} />
            <Route path="/service" element={<Service />} />

            <Route path="*" element={<Error />} />
          </Routes>
        </main>
      </Router>
    </div>
  );
}

export default App;
