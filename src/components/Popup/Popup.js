import React from 'react';
import './Popup.css';
import { Link } from 'react-router-dom';
import logo from '../../images/logo.svg';
import useFormWithValidation from '../../hooks/useForm';
import { NAME_REGEX, EMAIL_REGEX } from '../../utils/constants';
function Popup({ onSubmit, title, buttonTxt, linkName, inscription, linkTo, isRegister, isErrorMessage, setIsErrorMessage }) {
  const { values, handleChange, errors, isValid, resetForm } = useFormWithValidation();

  const handleSubmit = (e) => {
    e.preventDefault();
    onSubmit(values);
  };

  const handleChangeInput = (e) => {
    handleChange(e);
    setIsErrorMessage('');
  };

  React.useEffect(() => {
    resetForm();
    setIsErrorMessage('');
  }, [resetForm, setIsErrorMessage]);

  return (
    <div className="popup">
      <Link className="popup__link-logo" to="/">
        <img className="popup__image" src={logo} alt="Логотип"></img>
      </Link>
      <h1 className="popup__title">{title}</h1>
      <form className="popup__form" name="popupForm" onSubmit={handleSubmit}>
        {isRegister && (
          <>
            <label className="popup__label popup__label_type_name" htmlFor="name">
              Имя
            </label>
            <input
              className={`popup__input popup__input_type_name ${errors.name && 'popup__input_error'}`}
              placeholder="Имя"
              onChange={handleChangeInput}
              value={values.name || ''}
              type="text"
              name="name"
              pattern={NAME_REGEX}
              id="name"
              minLength="2"
              maxLength="40"
              required
            />
            {errors.name && <span className="popup__error">{errors.name || ''}</span>}
          </>
        )}
        <label className="popup__label" htmlFor="email">
          E-mail
        </label>
        <input
          className={`popup__input popup__input_type_email ${errors.email && 'popup__input_error'}`}
          placeholder="Email"
          onChange={handleChangeInput}
          value={values.email || ''}
          type="email"
          name="email"
          pattern={EMAIL_REGEX}
          id="email"
          required
        />
        {errors.email && <span className="popup__error">{errors.email || ''}</span>}
        <label className="popup__label" htmlFor="password">
          Пароль
        </label>
        <input
          className={`popup__input popup__input_type_password ${errors.password && 'popup__input_error'}`}
          placeholder="Пароль"
          onChange={(e) => handleChange(e)}
          value={values.password || ''}
          type="password"
          name="password"
          id="password"
          minLength="6"
          required
        />
        {errors.password && <span className="popup__error">{errors.password || ''}</span>}

        {isErrorMessage && <span className="popup__server-error">{isErrorMessage}</span>}
        {/* {isRegister && (
          <span className="popup__error">Что-то пошло не так...</span>
        )}{" "} */}
        {/* <div className="popup__items"> */}
        <button className={`popup__button ${!isValid && 'popup__button_disabled'}`} disabled={!isValid} type="submit">
          {buttonTxt}
        </button>
      </form>
      <span className="popup__span">
        {inscription}
        <Link className="popup__link" to={linkTo}>
          {linkName}
        </Link>
      </span>
      {/* </div> */}
    </div>
  );
}

export default Popup;
