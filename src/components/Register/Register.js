import React from "react";
import Popup from "../Popup/Popup";
import "./Register.css";
import { Navigate } from 'react-router-dom';

function Register({onSubmit, loggedIn, registerErrorMessage}) {

	return(
		<div className="register">
			<Popup
			title="Добро пожаловать!"
			buttonTxt="Зарегистрироваться"
			inscription='Уже зарегистрированы?'
			linkName="Войти"
			linkTo='/signin'
			onSubmit={onSubmit}
			isRegister={true}
			errorMessage={registerErrorMessage}
			/>
			{loggedIn && <Navigate to='/movies' />}
		</div>
	)
};

export default Register;