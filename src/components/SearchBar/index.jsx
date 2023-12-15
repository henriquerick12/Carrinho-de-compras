import { useState, useContext } from "react";
import AppContext from "../../Context/index";

import { BsSearch } from "react-icons/bs";
import fetchProductos from "../../api/api";
import "./search.css";

const SearchBar = () => {
  const { setProducts, setLoad } = useContext(AppContext);
  const [search, setSearch] = useState("");

  const handleSubmitForm = async (e) => {
    e.preventDefault();
    setLoad(true);
    const data = await fetchProductos(search);
    setProducts(data);
    setLoad(false);
    setSearch("");
  };

  return (
    <form className="form__container" onSubmit={(e) => handleSubmitForm(e)}>
      <input
        type="search"
        placeholder="Buscar produtos"
        className="search__input"
        required
        onChange={(e) => setSearch(e.target.value)}
        value={search}
      />

      <button type="submit" className="search__button">
        <BsSearch />
      </button>
    </form>
  );
};

export default SearchBar;
