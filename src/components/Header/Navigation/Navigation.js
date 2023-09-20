import React from "react";
import accountLogo from "../../../images/accountLogo.svg";
import burgerMenuLogo from "../../../images/burgerMenuLogo.svg";
import { Link } from "react-router-dom";
// import Menu from "../../Menu/Menu";
import "./Navigation.css"

function Navigation({ onMenuPopup }) {
  return (
    <nav className="navigation">
      <div className="navigation__pannel">
        <>
          <Link
            className="navigation__links navigation__link_movies"
            to="/movies"
          >
            Фильмы
          </Link>
          <Link className="navigation__links navigation__link_saved-movies" to="/saved-movies">
            Сохраненные фильмы
          </Link>
        </>
      </div>
      <div className="navigation__link-account">
        <Link className="navigation__account-button" to="/profile">
					Аккаунт
          <img
            className="navigation__logo"
            src={accountLogo}
            alt="Кнопка входа в аккаунт"
          />
        </Link>
        <button className="navigation__burger-menu" onClick={onMenuPopup}>
					
				</button>
      </div>
    </nav>
  );
}

export default Navigation;
