import React, { useState, useEffect } from 'react';
import './SavedMovies.css';
import SearchForm from '../SearchForm/SearchForm';
import MoviesCardList from '../../components/MoviesCardList/MoviesCardList';
import * as mainApi from '../../utils/MainApi';
import { filterMovies } from '../../utils/utils.js';

function SavedMovies({ savedCards, setSavedCards, onDelete }) {
  const [query, setQuery] = useState('');
  const [isChecked, setIsChecked] = useState(false);
  const [isEmptySearchError, setIsEmptySearchError] = useState('');

  useEffect(() => {
    const jwt = localStorage.getItem('jwt');
    mainApi
      .getSavedMovies(jwt)
      .then((data) => {
        setSavedCards(data);
        localStorage.setItem('savedMovies', JSON.stringify(data));
      })
      .catch((err) => {
        console.error(err);
      });
  }, []);

  const saveMoviesFromStorage = JSON.parse(localStorage.getItem('savedMovies'));

  const handleSearch = (query) => {
    const filterCards = filterMovies(saveMoviesFromStorage, query, isChecked);
    setSavedCards(filterCards);
    if (filterCards.length === 0) {
      setIsEmptySearchError(`По запросу '${query}' ничего не найдено`);
    } else {
      setIsEmptySearchError('');
    }
  };

  const handleChecked = (e) => {
    const checkBox = e.target.checked;
    setIsChecked(checkBox);
    const filterCards = filterMovies(saveMoviesFromStorage, query, checkBox);
    setSavedCards(filterCards);
    if (filterCards.length === 0) {
      setIsEmptySearchError(`По запросу '${query}' ничего не найдено`);
    } else {
      setIsEmptySearchError('');
    }
  };

  return (
    <>
      <section className="movies">
        <SearchForm onSearch={handleSearch} query={query} setQuery={setQuery} isChecked={isChecked} onChecked={handleChecked} />
        <MoviesCardList cards={savedCards} savedCards={savedCards} onDelete={onDelete} isEmptySearchError={isEmptySearchError} />
      </section>
      <section className="saved-movies__divider" />
    </>
  );
}
export default SavedMovies;
