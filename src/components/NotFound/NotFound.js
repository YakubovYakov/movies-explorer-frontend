import React from 'react';
import { useNavigate } from 'react-router-dom';
import './NotFound.css'; // Подключаем стили

function NotFound() {
  const navigate = useNavigate();

  return (
    <main>
      <section className="not-found">
        <h1 className="not-found__title">404</h1>
        <p className="not-found__description">Страница не найдена</p>
        <button
          className="not-found__link"
          type="button"
          onClick={() => {
            navigate(-1);
          }}>
          Назад
        </button>
      </section>
    </main>
  );
}

export default NotFound;
