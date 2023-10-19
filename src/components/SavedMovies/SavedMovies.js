import React from "react";
import "./SavedMovies.css";
import SearchForm from "../SearchForm/SearchForm";
import { Routes, Route } from "react-router-dom";

import MoviesCardList from "../../components/MoviesCardList/MoviesCardList";
import MoviesCard from "../MoviesCard/MoviesCard";
import NotFound from "../NotFound/NotFound";
import savedMoviesList from "../../constants/savedMoviesList.js";

function SavedMovies() {
  return (
    <>
      <section className="movies">
        <SearchForm />
        <Routes>
          <Route path="/" element={<MoviesCardList showMoreButton={false} />} />
          <Route
            path="/saved-movies/*"
            element={<SavedMovies />}
          />
          <Route path="*" element={<NotFound loggedIn />} />
        </Routes>
      </section>
      <section className="saved-movies__divider" />
    </>
  );
}
export default SavedMovies;
