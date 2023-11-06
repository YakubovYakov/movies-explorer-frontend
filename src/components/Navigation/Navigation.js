import React from 'react';
import { Link, useLocation, NavLink } from 'react-router-dom';

import './Navigation.css';

function Navigation({ onMenuPopup }) {
  const location = useLocation();

 const isMainPage = location.pathname === '/';

  const accountButtonClass = isMainPage ? 'navigation__account-button_main' : 'navigation__account-button';

  return (
    <nav className="navigation">
      <div className="navigation__panel">
        <NavLink
          className={({ isActive }) =>
            isActive
              ? `navigation__link navigation__link_active ${!isMainPage ? 'navigation__link_color_black' : ''}`
              : `navigation__link ${!isMainPage ? 'navigation__link_color_black' : ''}`
          }
          to="/movies">
          Фильмы
        </NavLink>
        <NavLink
          className={({ isActive }) =>
            isActive
              ? `navigation__link navigation__link_active ${!isMainPage ? 'navigation__link_color_black' : ''}`
              : `navigation__link ${!isMainPage ? 'navigation__link_color_black' : ''}`
          }
          to="/saved-movies">
          Сохраненные фильмы
        </NavLink>
      </div>
      <div className={`navigation__link ${!isMainPage ? 'navigation__link_color_black' : ''}`}>
        <Link className={accountButtonClass} to="/profile">
          Аккаунт
        </Link>
        <button className="navigation__burger-menu" onClick={onMenuPopup}></button>
      </div>
    </nav>
  );
}

export default Navigation;
