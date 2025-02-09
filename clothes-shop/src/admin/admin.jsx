import Adminform from "./form/form";
import Showproducts from "./showproducts/showproducts";
import Showorders from "./showorders/showorders";
const Admin = () => {
  return (
    <div className="">
      <Adminform />
      <Showproducts />
      <Showorders />
    </div>
  );
};

export default Admin;
