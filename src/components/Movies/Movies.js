import React from "react";
import { Routes, Route } from "react-router-dom";
import SearchForm from "../SearchForm/SearchForm.js";
import MoviesCardList from "./MoviesCardList/MoviesCardList";
import MoviesCard from "./MoviesCard/MoviesCard";
import NotFound from "../NotFound/NotFound";
import Preloader from "./Preloader/Preloader";
import SavedMovies from "./SavedMovies/SavedMovies";

import "./Movies.css";

export function Movies({loggedIn}) {
  const [activePreloader, setActivePreloader] = React.useState(false);

  return (
    <section className="movies">
      <SearchForm />
      {activePreloader && <Preloader />}
      <Routes>
        <Route path="/" element={<MoviesCardList />} />
        <Route path="/saved-movies" element={<SavedMovies />} />
				<Route path="*" element={<NotFound loggedIn/>} />
      </Routes>
    </section>
  );
}

