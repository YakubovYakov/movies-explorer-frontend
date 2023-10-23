import React from "react";
import { Link, useLocation } from "react-router-dom";
import "./Navigation.css";

function Navigation({ onMenuPopup, isLoggedIn }) {
  const location = useLocation();

  // Функция, которая возвращает класс в зависимости от текущего URL
  const getTabClass = (tabName) => {
    return location.pathname === tabName
      ? "navigation__link navigation__link_movies"
      : "navigation__link navigation__link_saved-movies";
  };
  // const buttonColorClass = isLoggedIn ? "navigation__button-registered" : "navigation__button-guest";

  return (
    <nav className="navigation">
      <div className="navigation__panel">
			<Link className={`${getTabClass("/movies")}`} to="/movies">
          Фильмы
        </Link>
				<Link className={`${getTabClass("/saved-movies")}`} to="/saved-movies">
          Сохраненные фильмы
        </Link>
      </div>
      <div className="navigation__link-account">
        <Link className="navigation__account-button" to="/profile">
          Аккаунт
        </Link>
        <button
          className="navigation__burger-menu"
          onClick={onMenuPopup}
        ></button>
      </div>
    </nav>
  );
}

export default Navigation;
