import { useContext } from "react";

import AppContext from "../../Context";
import CartItem from "../CartItem";

import "./cart.css";

const Cart = () => {
  const { isvisible,cartproduct } = useContext(AppContext);

  const totalProducts = cartproduct.reduce((acc, prev) => {
      return prev.price + acc
  }, 0);

  return (
    <>
      <section className={`${ isvisible && "cart__active"}  card__container`}>
        <div className="card__items">
          {cartproduct.map((cart, i) => {
            return <CartItem key={i} cart={cart} />;
          })}
        </div>
        <div className="card__resume">
          <p>{`Total: ${totalProducts.toLocaleString('pt-br', {
            style: 'currency',
            currency: 'BRL'
          })}`}</p>
        </div>
      </section>
    </>
  );
};

export default Cart;
