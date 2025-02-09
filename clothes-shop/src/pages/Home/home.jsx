import "./home.css";
import Bycategory from "../homecomponents/bycategory/bycategory";
import Bygender from "../homecomponents/bygender/bygender";
import Bybrand from "../homecomponents/bybrand/bybrand";
import Bysports from "../homecomponents/bysports/bysports";
const Home = () => {
  return (
    <div className="home">
      <Bycategory />
      <Bygender />
      <Bybrand />
      <Bysports />
    </div>
  );
};

export default Home;
