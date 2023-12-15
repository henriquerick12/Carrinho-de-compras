import { useContext } from "react";
import propTypes from "prop-types";

import AppContext from "../../Context";
import { BsFillCartPlusFill } from "react-icons/bs";

import "./cart.css";

const ProductCard = ({ product }) => {
  const { cartproduct, setCart } = useContext(AppContext);
  const { thumbnail, price, title } = product;

  const handleCartItem = () => {
    setCart([...cartproduct, product]);
  };

  return (
    <>
      <section className="product__card">
        <img src={thumbnail.replace(/\w\.jpg/gi, "W.jpg")} />
        <div className="product__infos">
          <h2>
            {price.toLocaleString("pt-br", {
              style: "currency",
              currency: "BRL",
            })}
          </h2>
          <h2>{title}</h2>
        </div>
        <button onClick={handleCartItem} type="button">
          <BsFillCartPlusFill />
        </button>
      </section>
    </>
  );
};

export default ProductCard;

ProductCard.propTypes = {
  product: propTypes.shape({}),
}.isRequerid;
