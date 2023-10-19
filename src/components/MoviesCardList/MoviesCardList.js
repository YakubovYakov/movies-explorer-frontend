import React from "react";
import "./MoviesCardList.css";
import MoviesCard from "../MoviesCard/MoviesCard";
import savedMoviesList from "../../constants/savedMoviesList";

function MoviesCardList({ showMoreButton }) {
  return (
    <>
      <section className="cards">
        {savedMoviesList.map(({ id, nameRU, duration, image }) => (
          <MoviesCard
						key={id}
            cardTitle={nameRU}
            cardImage={image}
            cardDuration={duration}
          />
        ))}
      </section>
			{showMoreButton && (

      <section className="cards__section">
        <button type="button" className="cards__button" showMoreButton={true}>
          Еще
        </button>
      </section>
			)}
    </>
  );
}

export default MoviesCardList;
