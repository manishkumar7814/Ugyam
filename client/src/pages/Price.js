import Vendorinput from "./Vendorinput";
import "./Vendors.css";

const Price = ({ handleChange }) => {
  return (
    <>
      <div className="ml">
        <h2 className="sidebar-title price-title">Range</h2>

        <label className="sidebar-label-container">
          <input onChange={handleChange} type="radio" value="" name="test2" />
          <span className="checkmark"></span>All
        </label>

        <Vendorinput
          handleChange={handleChange}
          value={50}
          title="Rs.0 - 50000"
          name="test2"
        />

        <Vendorinput
          handleChange={handleChange}
          value={100}
          title="Rs.50000 - 100000"
          name="test2"
        />

        <Vendorinput
          handleChange={handleChange}
          value={150}
          title="Rs.100000 - $300000"
          name="test2"
        />

        <Vendorinput
          handleChange={handleChange}
          value={200}
          title="Over 300000"
          name="test2"
        />
      </div>
    </>
  );
};

export default Price;