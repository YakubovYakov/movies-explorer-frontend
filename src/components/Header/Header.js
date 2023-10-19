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
			<header className={isMovies ? "header header_type_movies" : "header"}>
				<Link to="/">
					<img className="header__logo" src={logo} alt="Логотип" />
				</Link>
				{loggedIn ? (
					// <div className="header__content">
						<div className="header__navigation">
							<Navigation onMenuPopup={onMenuPopup} />
						</div>
					// </div>
				) : (
					// <div className="header__content">
						<div className="header__links">
							<Link
								className="header__links-item header__links-item_register"
								to="/signup"
							>
								Регистрация
							</Link>
							<Link
								to="/signin"
								className="header__links-item header__links-item_login"
							>
								Войти
							</Link>
						</div>
					// </div>
				)}
			</header>
		);
		
}

export default Header;
