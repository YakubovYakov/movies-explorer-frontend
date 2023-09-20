import React from "react";
import Popup from "../Popup/Popup";
import "./Login.css";
import { Navigate } from "react-router-dom";

function Login({ onSubmit, loggedIn, loginErrorMessage }) {
  return (
    <div className="login">
      <Popup
        title="Рады видеть !"
        buttonTxt="Войти"
        inscription="Eще не зарегистрированы"
        linkName="Регистрация"
        linkTo="/signup"
        onSubmit={onSubmit}
        errorMessage={loginErrorMessage}
      />
      {loggedIn && <Navigate to="/movies" />}
    </div>
  );
}

export default Login;
