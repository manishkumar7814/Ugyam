import "./Vendors.css";

const Recommended = () => {
  return (
    <>
      <div>
        <div className="recommended-flex">
        <label for="rchoice">category</label>
          <select id="rchoice">
          <option value=""> -- Select category --</option>
          <option value="photographer"> Photographer</option>
          <option value="catering"> catering</option>
          <option value="Decoration"> Decoration</option>
          </select>
          <label for="rchoice">Price</label>
          <select id="rchoice">
          <option value=""> -- Select Price Range --</option>
          <option value="20000">Under 20000</option>
          <option value="50000"> 20000 - 50000</option>
          <option value="100000">50000- 100000</option>
          <option value="500000">Above 100000</option>
          </select>
          <label for="rchoice">Location</label>
          <select id="rchoice">
          <option value=""> --Select Location --</option>
          <option value="Jaipur">Jaipur</option>
          <option value="Delhi">Delhi</option>
          <option value="Patna">Patna</option>
          </select>
          </div>
        </div>
    </>
  );
};

export default Recommended;