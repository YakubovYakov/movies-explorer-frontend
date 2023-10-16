import React from "react";
import accountLogo from "../../images/accountLogo.svg";
import burgerMenuLogo from "../../images/burgerMenuLogo.svg";
import { Link, useLocation } from "react-router-dom";
// import Menu from "../../Menu/Menu";
import "./Navigation.css"

function Navigation({ onMenuPopup }) {
	const location = useLocation();

  // Функция, которая возвращает класс в зависимости от текущего URL
  const getTabClass = (tabName) => {
    return location.pathname === tabName ? "navigation__link_movies" : "navigation__link_saved-movies";
  };

  return (
    <nav className="navigation">
      <div className="navigation__pannel">
        <>
          <Link className={`navigation__links ${getTabClass("/movies")}`} to="/movies">
          Фильмы
        </Link>
        <Link className={`navigation__links ${getTabClass("/saved-movies")}`} to="/saved-movies">
          Сохраненные фильмы
        </Link>
        </>
      </div>
      <div className="navigation__link-account">
        <Link className="navigation__account-button" to="/profile">
					Аккаунт
        </Link>
        <button className="navigation__burger-menu" onClick={onMenuPopup}>
					
				</button>
      </div>
    </nav>
  );
}

export default Navigation;
