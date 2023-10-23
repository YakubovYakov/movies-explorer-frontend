import React from "react";
import "./SavedMovies.css";
import SearchForm from "../SearchForm/SearchForm";
import MoviesCardList from "../../components/MoviesCardList/MoviesCardList";
import Header from "../Header/Header";
import Navigation from "../Navigation/Navigation";

function SavedMovies() {
  return (
    <>
      <section className="movies">
        <SearchForm />
        <MoviesCardList />
      </section>
      <section className="saved-movies__divider" />
    </>
  );
}
export default SavedMovies;
