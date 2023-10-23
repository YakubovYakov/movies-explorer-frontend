import React, { useState } from 'react';
import { useLocation } from 'react-router-dom';

import './MoviesCard.css';
import card from '../../images/card.svg';

function MoviesCard({ card, isSaved, isSavedMoviesPage, cardImage, cardTitle, cardDuration }) {
  const [isFavorite, setIsFavorite] = useState(false);

  const toggleOnCardFavorite = () => setIsFavorite(true);
  const toggleOffCardFavorite = () => setIsFavorite(false);

  const location = useLocation();

  const changeButtonBg = location.pathname === '/saved-movies';

  return (
    <li className="card">
      <figure className="card__info">
        <div className="card__items">
          <h2 className="card__title">{card.nameRU}</h2>
          <p className="card__duration">{card.duration}</p>
        </div>
        {changeButtonBg ? (
          <button className="card__button-delete"></button>
        ) : isFavorite ? (
          <button onClick={toggleOffCardFavorite} className="card__button card__button-like"></button>
        ) : (
          <button onClick={toggleOnCardFavorite} className="card__button card__button-disabled" type="button"></button>
        )}
      </figure>
      <a className="card__link" href={card.trailerLink} target="_blank" rel="noreferrer">
        <img className="card__image" src={card} alt="Трейлер фильма" />
      </a>
    </li>
  );
}

export default MoviesCard;
