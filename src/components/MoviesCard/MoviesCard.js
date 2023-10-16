import React, { useState } from "react";
import "./MoviesCard.css";
import card from "../../images/card.svg";
import savedMoviesList from "../../constants/savedMoviesList.js";
import delete_button from "../../images/delete-movie-button.svg";

// import films from "../../vendor/savedMoviesList";

function MoviesCard({ isSaved, cardImage, cardTitle, cardDuration }) {
  const [isFavorite, setIsFavorite] = useState(false);

  const toggleOnCardFavorite = () => setIsFavorite(true);
  const toggleOffCardFavorite = () => setIsFavorite(false);

  return (
    <article className="card">
      <ul className="card__container">
        <li className="card__list">
          <div className="card__info">
            <figcaption className="card__items">
              <h1 className="card__title">{cardTitle}</h1>
              <p className="card__duration">{cardDuration}</p>
            </figcaption>
            {isSaved ? (
              <button className="card__button-delete"></button>
            ) : isFavorite ? (
              <button
                onClick={toggleOffCardFavorite}
                className="card__button card__button-like"
              ></button>
            ) : (
              <button
                onClick={toggleOnCardFavorite}
                className="card__button card__button-disabled"
                type="button"
              ></button>
            )}
          </div>
          <a
            className="card__link"
            href={cardImage}
            target="_blank"
            rel="noreferrer"
          >
            <img className="card__image" src={card} alt="Трейлер фильма"></img>
          </a>
        </li>
      </ul>
    </article>
  );
}

export default MoviesCard;
