import React from 'react';
import { useState } from 'react';
import Popup from '../Popup/Popup';
import './Register.css';
import { Navigate } from 'react-router-dom';

function Register({ onSubmit, loggedIn, isErrorMessage, setIsErrorMessage }) {
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
          onSubmit={onSubmit}
          isErrorMessage={isErrorMessage}
          setIsErrorMessage={setIsErrorMessage}
        />
        {loggedIn && <Navigate to="/movies" />}
      </div>
    </main>
  );
}

export default Register;
