import React, { useState } from "react";
import "./Profile.css";
import useFormWithValidation from "../../utils/useForm";
import { Link } from "react-router-dom";

function Profile({ isDisabled = false }) {
  const [isEdited, setIsEdited] = useState(false);
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [isUserDataChanged, setIsUserDataChanged] = useState(false);

  const handleNameChange = (e) => {
    if (isEdited) {
      setName(e.target.value);
      setIsUserDataChanged(true);
    }
  };

  const handleEmailChange = (e) => {
    if (isEdited) {
      setEmail(e.target.value);
      setIsUserDataChanged(true);
    }
  };

  const handleEdit = () => {
    setIsEdited(!isEdited);
  };

  return (
    <section className="profile">
      <form className="profile__form" noValidate name="profileForm">
        <h1 className="profile__title">Привет, Виталий!</h1>
        <fieldset className="profile__fieldset">
          <label className="profile__label profile__label_type_name">
            Имя
            <input
              type="text"
              name="name"
              className="profile__input profile__input_name"
              readOnly={!isEdited}
              minLength="2"
              maxLength="30"
              placeholder="Имя"
              value={name}
              onChange={handleNameChange}
            />
          </label>

          <label className="profile__label">
            Email
            <input
              type="email"
              name="email"
              className="profile__input profile__input_email"
              readOnly={!isEdited}
              minLength="2"
              maxLength="30"
              placeholder="Email"
              value={email}
              onChange={handleEmailChange}
            />
          </label>
        </fieldset>
        <div className="profile__buttons">
          <button
            className={`profile__button profile__button_disabled ${
              !isEdited ? "" : "profile__button_type_edit"
            }`}
            onClick={handleEdit}
            type="button"
          >
            Редактировать
          </button>
          <Link to="/" className="profile__button profile__button_type_exit">
            Выйти из аккаунта
          </Link>
        </div>
      </form>
    </section>
  );
}

export default Profile;
