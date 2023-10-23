import React from 'react';
import Popup from '../Popup/Popup';
import './Login.css';
import { Navigate } from 'react-router-dom';

function Login({ onSubmit, loggedIn, isErrorMessage, setIsErrorMessage }) {
  return (
    <main>
      <div className="login">
        <Popup
          title="Рады видеть!"
          buttonTxt="Войти"
          inscription="Eще не зарегистрированы"
          linkName="Регистрация"
          linkTo="/signup"
          onSubmit={onSubmit}
          isErrorMessage={isErrorMessage}
          setIsErrorMessage={setIsErrorMessage}
        />
        {loggedIn && <Navigate to="/movies" />}
      </div>
    </main>
  );
}

export default Login;
