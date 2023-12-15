import { useState } from "react";
import AppContext from "./index";

const Provider = ({ children }) => {
  const [products, setProducts] = useState([]);
  const [cartproduct, setCart] = useState([]);
  const [isload, setLoad] = useState(true);
  const [isvisible, setVisible] = useState(false);

  const value = {
    products,
    setProducts,
    isload,
    setLoad,
    cartproduct,
    setCart,
    isvisible,
    setVisible,
  };

  return (
    <>
      <AppContext.Provider value={value}>{children}</AppContext.Provider>
    </>
  );
};

export default Provider;
