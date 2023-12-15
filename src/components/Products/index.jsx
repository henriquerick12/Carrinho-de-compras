import { useContext, useEffect } from "react";

import ProductCard from "../ProductCard/index";
import Loading from "../Loading/index";
 
import fetchProductos from "../../api/api";
import AppContext from "../../Context";

import "./product.css";

const Products = () => {
  const { products, setProducts, isload, setLoad } = useContext(AppContext);

  useEffect(() => {
    fetchProductos("iphone").then((response) => {
      setProducts(response);
      setLoad(false);
    });
  }, []);

  return (
    <>
      {(isload && <Loading />) || (
        <section className="products__container container">
          {products.map((product) => {
            return <ProductCard key={product.id} product={product} />;
          })}
        </section>
      )}
    </>
  );
};

export default Products;
