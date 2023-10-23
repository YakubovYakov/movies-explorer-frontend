import React from "react";
import "./MoviesCardList.css";
import MoviesCard from "../MoviesCard/MoviesCard";
import savedMoviesList from "../../constants/savedMoviesList";

function MoviesCardList({ cards, showMoreButton }) {
  return (
    <>
      <section className="cards">
        <ul className="cards__list">
          {savedMoviesList.map((card) => (
            <MoviesCard key={card.id || card._id} card={card} />
          ))}
        </ul>
				
      </section>
    </>
  );
}

export default MoviesCardList;
