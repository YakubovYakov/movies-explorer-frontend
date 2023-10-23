import React from 'react';
import SearchForm from '../SearchForm/SearchForm.js';
import MoviesCardList from '../MoviesCardList/MoviesCardList';
import Preloader from '../Preloader/Preloader';
import MoreButton from "../MoreButton/MoreButton";

import './Movies.css';

function Movies({ loggedIn }) {
  const [activePreloader, setActivePreloader] = React.useState(false);

  return (
    <section className="movies">
      <SearchForm />
      {activePreloader && <Preloader />}
      <MoviesCardList  />
			<MoreButton />
    </section>
  );
}
export default Movies;
