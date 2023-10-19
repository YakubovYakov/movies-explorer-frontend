import React from "react";
import { useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import accountLogo from "../../images/accountLogo.svg";
import "./Menu.css";

function Menu({ isOpen, onClose }) {
  const location = useLocation();

  useEffect(() => {
    if (isOpen) {
      document.body.classList.add("no-scroll");
    } else {
      document.body.classList.remove("no-scroll");
    }
    return () => {
      document.body.classList.remove("no-scroll");
    };
  }, [isOpen]);

  return (
    <div className={`menu ${isOpen ? "menu_is-opened" : ""}`}>
      <nav className="menu__container">
        <div className="menu__button-container">
          <button className="menu__close-button" type="button" onClick={onClose} />
        </div>
        <ul className="menu__links">
          <li className={`menu__link-button ${location.pathname === "/" ? "menu__link-button_active" : ""}`} onClick={onClose}>
            <Link className="menu__link" to="/">
              Главная
            </Link>
          </li>
          <li className={`menu__link-button ${location.pathname === "/movies" ? "menu__link-button_active" : ""}`} onClick={onClose}>
            <Link className="menu__link" to="/movies">
              Фильмы
            </Link>
          </li>
          <li className={`menu__link-button ${location.pathname === "/saved-movies" ? "menu__link-button_active" : ""}`} onClick={onClose}>
            <Link className="menu__link" to="/saved-movies">
              Сохраненные фильмы
            </Link>
          </li>
        </ul>
        <div className="menu__account">
          <Link className="menu__account-button" to="/profile" onClick={onClose}>
            Аккаунт
          </Link>
          <img className="menu__logo" alt="Кнопка перехода в аккаунт" src={accountLogo} />
        </div>
      </nav>
    </div>
  );
}

export default Menu;
