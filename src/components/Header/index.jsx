import SearchBar from "../SearchBar";
import Cart from "../CartButton";

import "./header.css";

const Header = () => {
  return (
    <>
      <header className="header__container">
        <div className="header__content container">
          <SearchBar />
          <Cart />
        </div>
      </header>
    </>
  );
};

export default Header;
