import "./Vendors.css";
import Vendorinput from "./Vendorinput";

function Category({ handleChange }) {
  return (
    <div>
      <h2 className="sidebar-title">Services</h2>

      <div>
        <label className="sidebar-label-container">
          <input onChange={handleChange} type="radio" value="" name="test" />
          <span className="checkmark"></span>All
        </label>
        <Vendorinput
          handleChange={handleChange}
          value="catering"
          title="Catering"
          name="test"
        />
        <Vendorinput
          handleChange={handleChange}
          value="flats"
          title="Decoration"
          name="test"
        />
        <Vendorinput
          handleChange={handleChange}
          value="sandals"
          title="Mandap"
          name="test"
        />
        <Vendorinput
          handleChange={handleChange}
          value="heels"
          title="Artist"
          name="test"
        />
      </div>
    </div>
  );
}

export default Category;