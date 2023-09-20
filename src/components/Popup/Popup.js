import React from "react";
import "./Popup.css";
import { Link } from "react-router-dom";
import logo from "../../images/logo.svg";

function Popup({onSubmit ,title, buttonTxt, linkName, inscription, linkTo, isRegister }) {

	const [values, setValues] = React.useState({
		name: "",
		email: "",
		password: "",
	});

	const handleChange = (e) => {
		const {value, name} = e.target;
		setValues({...values, [name]: value})
	}

	const handleSubmit = (e) => {
		e.preventDefault();
		onSubmit(values);
	}

  return (
    <div className="popup">
      <Link className="popup__link-logo" to="/">
        <img className="popup__image" src={logo} alt="Логотип"></img>
      </Link>
				<h2 className="popup__title">{title}</h2>
      <form className="popup__form" onSubmit={handleSubmit}>
        {isRegister && (
          <>
            <label className="popup__label" htmlFor="name">
              Имя
            </label>
            <input
              className="popup__input popup__input_type_name"
              placeholder="Имя"
              onChange={handleChange}
							value={values.name}
              type="text"
              name="name"
              id="name"
              minLength="2"
              maxLength="40"
              required
            />
          </>
        )}
        <label className="popup__label" htmlFor="email">
          Email
        </label>
        <input
          className="popup__input popup__input_type_email"
          placeholder="Email"
					onChange={handleChange}
					value={values.email}
					type="email"
					name="email"
					id="email"
					required
        />
				<label className="popup__label" htmlFor="password">
          Пароль
        </label>
        <input
          className="popup__input popup__input_type_password"
          placeholder="Пароль"
					onChange={handleChange}
					value={values.password}
					type="password"
					name="password"
					id="password"
					minLength="6"
					required
        />
				<span className="popup__error">Что-то пошло не так...</span>
				<div className="popup__items">
					
				<button className="popup__button" type="submit">{buttonTxt}</button>
			<span className="popup__span">
				{ inscription }
				<Link className="popup__link" to={linkTo}>
					{ linkName }
				</Link>
			</span>
				</div>
      </form>
    </div>
  );
}

export default Popup;