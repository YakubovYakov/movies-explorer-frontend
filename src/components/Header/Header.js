import React from "react";
import logo from "../../images/logoHeader.svg";
import "./Header.css";
import { Link } from "react-router-dom";
import Navigation from "../Navigation/Navigation";

function Header({ loggedIn, onMenuPopup }) {
  const isMovies =
    window.location.pathname === "/movies" ||
    window.location.pathname === "/saved-movies" ||
    window.location.pathname === "/profile";

  return (
    <header className={isMovies ? "header header__movies" : "header"}>
      <Link to="/">
        <img className="header__logo" src={logo} alt="Логотип"></img>
      </Link>
      {loggedIn ? (
        <div className="header__navigation">
          <Navigation onMenuPopup={onMenuPopup} />
        </div>
      ) : (
        <div className="header__links">
          <>
            <Link className="header__register" to="/signup">
              Регистрация
            </Link>
            <Link to="/signin" className="header__login-button">
              Войти
            </Link>
          </>
        </div>
      )}
    </header>
  );
}

export default Header;
