import React from "react";
import { useNavigate } from "react-router-dom";
import "./NotFound.css"; // Подключаем стили

function NotFound({ loggedIn }) {
  console.log(loggedIn);

  const navigate = useNavigate();

  return (
    <section className="not-found">
      <h1 className="not-found__title">404</h1>
      <p className="not-found__description">Страница не найдена</p>
      <button
        className="not-found__link"
        type="button"
        onClick={() => {
          loggedIn ? navigate(-1) : navigate("/");
        }}
      >
        Назад
      </button>
    </section>
  );
}

export default NotFound;
