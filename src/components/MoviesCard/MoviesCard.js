import React, { useState } from 'react';
import { useLocation } from 'react-router-dom';
import './MoviesCard.css';
import { BASE_URL } from '../../utils/constants';
import { duration } from '../../utils/utils';

function MoviesCard({ card, savedCards, onSave, onDelete, isSaved, isSavedMoviesPage }) {
  const [isFavorite, setIsFavorite] = useState(false);

  const toggleOnCardFavorite = () => {
    onSave(card);
    setIsFavorite(true);
  };
  const toggleOffCardFavorite = () => {
    onDelete(savedCards.filter((m) => m.movieId === card.id)[0]);
    setIsFavorite(false);
  };

  const location = useLocation();

  const changeButtonBg = location.pathname === '/saved-movies';
  const urlImg = card.image.url ? `${BASE_URL}${card.image.url}` : card.image;

  return (
    <li className="card">
      <figure className="card__info">
        <div className="card__items">
          <h2 className="card__title">{card.nameRU}</h2>
          <p className="card__duration">{duration(card.duration)}</p>
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
        <img className="card__image" src={urlImg} alt="Трейлер фильма" />
      </a>
    </li>
  );
}

export default MoviesCard;
