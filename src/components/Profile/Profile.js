import React, { useContext, useEffect, useState } from 'react';
import './Profile.css';
import useFormWithValidation from '../../hooks/useForm';
import { Link } from 'react-router-dom';
import { CurrentUserContext } from '../../context/CurrentUserContext';
import { NAME_REGEX, EMAIL_REGEX } from '../../utils/constants';

function Profile({ handleUpdateProfile, handleLogout, isErrorMessage, setIsErrorMessage }) {
  const { values, setValues, handleChange, errors, isValid, resetForm } = useFormWithValidation();
  const currentUser = useContext(CurrentUserContext);
  const [isSuccessMessage, setIsSuccessMessage] = useState('');

  const initialValues = values.name !== currentUser.name || values.email !== currentUser.email;

  const handleSubmit = (e) => {
    e.preventDefault();
    handleUpdateProfile(values);
    setIsSuccessMessage('Данные успешно обновлены.');
  };

  const handleChangeInput = (e) => {
    handleChange(e);
    setIsErrorMessage('');
    setIsSuccessMessage('');
  };

  useEffect(() => {
    if (currentUser) {
      resetForm();
      setValues(currentUser);
      setIsErrorMessage('');
    }
  }, [currentUser, resetForm, setIsErrorMessage, setValues]);

  return (
    <section className="profile">
      <form className="profile__form" name="profileForm" onSubmit={handleSubmit} noValidate>
        <h1 className="profile__title">Привет, {currentUser.name}!</h1>
        <fieldset className="profile__fieldset">
          <label className="profile__label profile__label_type_name">
            Имя
            <input
              type="text"
              name="name"
              pattern={NAME_REGEX}
              className="profile__input profile__input_name"
              minLength="2"
              maxLength="30"
              placeholder="Имя"
              value={values.name || ''}
              onChange={handleChangeInput}
            />
          </label>
          {errors.name && <span className="profile__error">{errors.name || ''}</span>}

          <label className="profile__label">
            Email
            <input
              type="email"
              name="email"
              pattern={EMAIL_REGEX}
              className="profile__input profile__input_email"
              minLength="2"
              maxLength="30"
              placeholder="Email"
              value={values.email || ''}
              onChange={handleChangeInput}
            />
          </label>
          {errors.email && <span className="profile__error">{errors.email || ''}</span>}
        </fieldset>
        <div className="profile__buttons">
          {isSuccessMessage && <span className="popup__server-error">{isSuccessMessage}</span>}
          <button className="profile__button" type="submit" disabled={!isValid || !initialValues}>
            Редактировать
          </button>
          <Link to="/" className="profile__button profile__button_type_exit" onClick={handleLogout}>
            Выйти из аккаунта
          </Link>
        </div>
      </form>
    </section>
  );
}

export default Profile;
