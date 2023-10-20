import React from "react";
import "./MoviesCardList.css";
import MoviesCard from "../MoviesCard/MoviesCard";
import savedMoviesList from "../../constants/savedMoviesList";

function MoviesCardList({ showMoreButton }) {
  return (
    <>
      <section className="cards">
        <ul className="cards__list">
          {savedMoviesList.map(({ id, nameRU, duration, image }) => (
            <MoviesCard
              key={id}
              cardTitle={nameRU}
              cardImage={image}
              cardDuration={duration}
            />
          ))}
        </ul>
        {showMoreButton && (
					      <section className="cards">
          <div className="cards__section">
            <button
              type="button"
              className="cards__button"
              onClick={() => showMoreButton()}
            >
              Еще
            </button>
          </div>
					</section>
        )}
      </section>
    </>
  );
}

export default MoviesCardList;
