import React from "react";
import "./SavedMovies.css";
import delete_button from "../../../images/delete-movie-button.svg";
import SearchForm from "../../SearchForm/SearchForm";
import MoviesCard from "../MoviesCard/MoviesCard";
import savedMoviesList from "../../../vendor/savedMoviesList";

function SavedMovies() {
  return (
    <>
      <SearchForm />
      <section className="cards">
        {savedMoviesList.map(({ id, nameRU, duration, image }) => (
          <MoviesCard
            cardTitle={nameRU}
            cardImage={image}
            cardDuration={duration}
            isSaved={true}
          />
        ))}
      </section>
      <section className="saved-movies__divider" />
    </>
  );
}
export default SavedMovies;
