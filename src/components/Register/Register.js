import React from "react";
import Popup from "../Popup/Popup";
import "./Register.css";
import { Navigate } from "react-router-dom";

function Register({ onSubmit, loggedIn, registerErrorMessage }) {
  return (
    <main>
      <div className="register">
        <Popup
          title="Добро пожаловать!"
          buttonTxt="Зарегистрироваться"
          inscription="Уже зарегистрированы?"
          linkName="Войти"
          linkTo="/signin"
          isRegister={true}
          errorMessage={registerErrorMessage}
        />
        {loggedIn && <Navigate to="/movies" />}
      </div>
    </main>
  );
}

export default Register;
