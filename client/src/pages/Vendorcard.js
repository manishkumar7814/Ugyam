import { BsFillBagFill } from "react-icons/bs";

const Vendorcard = ({ img, title, star, reviews, prevPrice, newPrice }) => {
  return (
    <>
      <section className="vcard">
        <img src={img} alt={title} className="vcard-img" />
        <div className="vcard-details">
          <h3 className="vcard-title">{title}</h3>
          <section className="vcard-reviews">
            {star} {star} {star} {star}
            <span className="total-reviews">{reviews}</span>
          </section>
          <section className="vcard-price">
            <div className="price">
              <del>{prevPrice}</del> {newPrice}
            </div>
            <div className="bag">
              <BsFillBagFill className="bag-icon" />
            </div>
          </section>
        </div>
      </section>
    </>
  );
};

export default Vendorcard;