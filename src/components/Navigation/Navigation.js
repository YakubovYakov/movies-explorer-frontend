import React from "react";
import { Link, useLocation } from "react-router-dom";
import "./Navigation.css";

function Navigation({ onMenuPopup }) {
  const location = useLocation();

  const getTabClass = (tabName) => {
    if (
      tabName === "/saved-movies" &&
      (location.pathname === "/movies" || location.pathname === "/saved-movies")
    ) {
      return "navigation__link navigation__link_active";
    }
    return location.pathname === tabName
      ? "navigation__link navigation__link_active"
      : "navigation__link";
  };

  const isMainPage = location.pathname === "/";

  const accountButtonClass = isMainPage
    ? "navigation__account-button_main"
    : "navigation__account-button";

  return (
    <nav className="navigation">
      <div className="navigation__panel">
        <Link
          className={` ${
            isMainPage ? "navigation__link_main" : ""
          } ${getTabClass("/movies")}`}
          to="/movies"
        >
          Фильмы
        </Link>
        <Link
          className={` ${
            isMainPage ? "navigation__link_main" : ""
          } ${getTabClass("/saved-movies")}`}
          to="/saved-movies"
        >
          Сохраненные фильмы
        </Link>
      </div>
      <div className="navigation__link-account">
        <Link className={accountButtonClass} to="/profile">
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
