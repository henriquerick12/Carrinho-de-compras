import { useContext } from "react";

import AppContext from "../../Context";
import { AiOutlineShoppingCart } from "react-icons/ai";

import "./cart.css";

const Cart = () => {
  const { isvisible, setVisible,cartproduct } = useContext(AppContext);
  return (
    <>
      <button onClick={() => setVisible(!isvisible)} className="button__container">
        <AiOutlineShoppingCart />
        {cartproduct.length > 0 && (
          <span className="button__status">{cartproduct.length}</span>
        )}
      </button>
    </>
  );
};

export default Cart;
