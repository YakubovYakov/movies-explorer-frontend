import React from "react";
import { Link } from "react-router-dom";
import accountLogo from "../../images/accountLogo.svg";
import "./Menu.css";

function Menu({ isOpen, onClose }) {
  return (
    <div className={`menu ${isOpen ? "menu_is-opened" : ""}`}>
      <nav className="menu__container">
        <div className="menu__button-container">
          <button
            className="menu__close_button"
            type="button"
            onClick={onClose}
          />
        </div>
        <ul className="menu__links">
          <li className="menu__link-button" onClick={onClose}>
            <Link className="menu__link" to="/">
              Главная
            </Link>
          </li>
          <li className="menu__link-button" onClick={onClose}>
            <Link className="menu__link" to="/movies">
              Фильмы
            </Link>
          </li>
          <li className="menu__link-button" onClick={onClose}>
            <Link className="menu__link" to="/saved-movies">
              Сохраненные фильмы
            </Link>
          </li>
        </ul>
        <div className="menu__account">
          <Link
            className="menu__account-button"
            to="/profile"
            onClick={onClose}
          >
            Аккаунт
            <img
              className="menu__logo"
              alt="Кнопка перехода в аккаунт"
              src={accountLogo}
            />
          </Link>
        </div>
      </nav>
    </div>
  );
}

export default Menu;
