import React from "react";
import "./Profile.css";

function Profile() {
  const [isEdited, setIsEdited] = React.useState(false);

  function handleEdit() {
    setIsEdited(!isEdited);
  }

  return (
    <section className="profile">
      <form className="profile__form">
        <h2 className="profile__title">Привет, Виталий!</h2>
        <label className="profile__label profile__label_type_name" htmlFor="name">
          Имя
          <input
            className="profile__input profile__input_name"
            disabled={isEdited ? "" : "true"}
            name="name"
            id="name"
            type="text"
            minLength="2"
            maxLength="40"
            required
          ></input>
        </label>
        <label className="profile__label" htmlFor="email">
          Email
          <input
            className="profile__input profile__input_email"
            disabled={isEdited ? "" : "true"}
            name="email"
            id="email"
            type="email"
            required
          ></input>
        </label>
        {isEdited ? (
          <div className="profile_buttons">
            <span className="profile__error">
              При обновлении профиля произошла ошибка.
            </span>
          </div>
        ) : (
          <div className="profile_buttons">
            <button
              className="profile__button profile__button_type_edit"
              onClick={handleEdit}
              type="button"
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
  );
}

export default Profile;
