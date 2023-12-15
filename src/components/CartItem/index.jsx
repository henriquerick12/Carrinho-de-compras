import { useContext } from "react";

import AppContext from "../../Context";
import { BsCartDashFill } from "react-icons/bs";

import "./item.css";

const CartItem = ({ cart }) => {
  const { cartproduct, setCart } = useContext(AppContext);

  const { id, title, thumbnail, price } = cart;

  const removeItem = () => {
    const findItem = cartproduct.filter((element) => {
      return element.id !== id;
    });

    setCart(findItem);
  };

  return (
    <>
      <section className="item__container">
        <img src={thumbnail} className="item__img" alt="Item do carrinho" />
        <div className="item__info">
          <h3 className="item__title">{title}</h3>
          <h3 className="item__price">
            {price.toLocaleString("pt-br", {
              style: "currency",
              currency: "BRL",
            })}
          </h3>
          <button onClick={removeItem} type="button" className="item__button">
            <BsCartDashFill />
          </button>
        </div>
      </section>
    </>
  );
};

export default CartItem;
