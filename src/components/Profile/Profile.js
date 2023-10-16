import React, { useState } from "react";
import "./Profile.css";
import useFormWithValidation from "../../utils/useForm";

function Profile({ isDisabled = false }) {
  const {
    values,
    setValues,
    errors,
    isValid,
    setIsValid,
    handleChange,
    resetForm,
  } = useFormWithValidation();

  const [isEdited, setIsEdited] = React.useState(false);
  const [isSaveButtonActive, setIsSaveButtonActive] = React.useState(false);
  const [email, setEmail] = useState("");
  const [name, setName] = useState("");
  const [emailDirty, setEmailDirty] = useState(false);
  const [nameDirty, setNameDirty] = useState(false);
  const [emailError, setEmailError] = useState(
    "Пользователь с таким email уже существует."
  );
  const [nameError, setNameError] = useState("");
  const [isUserDataChanged, setIsUserDataChanged] = useState(false);

  function handleEdit() {
    setIsEdited(!isEdited);
    setIsSaveButtonActive(false);
  }

  return (
    <main>
      <section className="profile">
        <form className="profile__form" name="profileForm">
          <h1 className="profile__title">Привет, Виталий!</h1>
          <fieldset className="profile__fieldset">
            <label
              className="profile__label profile__label_type_name"
              htmlFor="name"
            >
              <p className="profile__placeholder">Имя</p>
              {nameDirty && nameError && (
                <div className="profile__error">{nameError}</div>
              )}
              <input
                className="profile__input profile__input_name"
                disabled={isEdited ? false : true}
                name="name"
                id="name"
                type="text"
                minLength="2"
                maxLength="40"
                required
                placeholder="Имя"
              ></input>
            </label>
            <label className="profile__label" htmlFor="email">
              <p className="profile__placeholder">Email</p>
              {emailDirty && emailError && (
                <div className="profile__error">{emailError}</div>
              )}
              <input
                className="profile__input profile__input_email"
                disabled={isEdited ? false : true}
                name="email"
                id="email"
                type="email"
                required
                placeholder="Email"
              ></input>
            </label>
          </fieldset>
          {isEdited ? (
            <div className="profile_buttons">
              <span className="profile__error">
                При обновлении профиля произошла ошибка.
              </span>
            </div>
          ) : (
            <div className="profile__buttons">
              <button
                className={`profile__button profile__button_type_edit ${
                  !isUserDataChanged || !isValid
                    ? "profile__button_disabled"
                    : ""
                }`}
                onClick={handleEdit}
                type="submit"
              >
                Редактировать
              </button>
              <button
                className="profile__button profile__button_type_exit"
                type="button"
              >
                Выйти из аккаунта
              </button>
            </div>
          )}
        </form>
      </section>
    </main>
  );
}

export default Profile;
