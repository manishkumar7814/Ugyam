import "./Vendors.css";
import Vendorinput from "./Vendorinput";

const Colors = ({ handleChange }) => {
  return (
    <>
      <div>
        <h2 className="sidebar-title color-title">City</h2>
        <label className="sidebar-label-container">
          <input onChange={handleChange} type="radio" value="" name="test1" />
          <span className="checkmark all"></span>
          All
        </label>

        <Vendorinput
          handleChange={handleChange}
          value="black"
          title="Jaipur"
          name="test1"
          // color="black"
        />

        <Vendorinput
          handleChange={handleChange}
          value="blue"
          title="Delhi"
          name="test1"
          // color="blue"
        />

        <Vendorinput
          handleChange={handleChange}
          value="red"
          title="Kolkata"
          name="test1"
          // color="red"
        />

        <Vendorinput
          handleChange={handleChange}
          value="green"
          title="Patna"
          name="test1"
          // color="green"
        />

        {/* <label className="sidebar-label-container">
          <input
            onChange={handleChange}
            type="radio"
            value="white"
            name="test1"
          />
          <span
            className="checkmark"
            style={{ background: "white", border: "2px solid black" }}
          ></span>
          White
        </label> */}
      </div>
    </>
  );
};

export default Colors;