import Button from "./Button";
import "./Vendors.css";

const Recommended = ({ handleClick }) => {
  return (
    <>
      <div>
        <h2 className="recommended-title">Events</h2>
        <div className="recommended-flex">
          <Button onClickHandler={handleClick} value="" title="All Events" />
          <Button onClickHandler={handleClick} value="Small Party" title="Small Party" />
          <Button onClickHandler={handleClick} value="Adidas" title="Medium Events" />
          <Button onClickHandler={handleClick} value="Puma" title="Big Events" />
          <Button onClickHandler={handleClick} value="Vans" title="Marriage" />
        </div>
      </div>
    </>
  );
};

export default Recommended;