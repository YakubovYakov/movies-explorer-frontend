import React, { useState, useEffect } from 'react';
import SearchForm from '../SearchForm/SearchForm.js';
import MoviesCardList from '../MoviesCardList/MoviesCardList';
import MoreButton from '../MoreButton/MoreButton';
import './Movies.css';
import { getMovies } from '../../utils/MoviesApi.js';
import * as mainApi from '../../utils/MainApi.js';
import { filterMovies } from '../../utils/utils.js';

function Movies({ savedCards, onSave, onDelete }) {
  const [activePreloader, setActivePreloader] = React.useState(false);
  const [cards, setCards] = useState(JSON.parse(localStorage.getItem('allMovies')) || []);
  const [filteredCards, setFilteredCards] = useState(JSON.parse(localStorage.getItem('filterCards')) || []);
  const [query, setQuery] = useState(localStorage.getItem('query') || '');
  const [isChecked, setIsChecked] = useState(JSON.parse(localStorage.getItem('checkBox')) || false);
  const [visibleCards, setVisibleCards] = useState(12);

  useEffect(() => {
    const resizeWindow = () => {
      const windowWidth = window.innerWidth;
      if (windowWidth >= 1280) {
        setVisibleCards(12);
      } else if (windowWidth >= 581) {
        setVisibleCards(8);
      } else if (windowWidth <= 580) {
        setVisibleCards(5);
      }

      const resizeDelay = 300;
      let resizeTimeout;

      window.addEventListener('resize', () => {
        clearTimeout(resizeTimeout);
        resizeTimeout = setTimeout(resizeWindow, resizeDelay);
      });

      return () => {
        window.removeEventListener('resize', resizeWindow);
        clearTimeout(resizeTimeout);
      };
    };

    window.addEventListener('resize', resizeWindow);
    resizeWindow();
    return () => {
      window.removeEventListener('resize', resizeWindow);
    };
  }, [setVisibleCards]);

  const handleSearch = (query) => {
    if (filteredCards.length === 0) {
      setActivePreloader(true);
      getMovies()
        .then((data) => {
          setCards(data);
          localStorage.setItem('allMovies', JSON.stringify(data));
          const filterCards = filterMovies(data, query, isChecked);
          setFilteredCards(filterCards);
          localStorage.setItem('filterCards', JSON.stringify(filterCards));
          localStorage.setItem('query', query);
          localStorage.setItem('checkBox', isChecked);
        })
        .catch((err) => {})
        .finally(() => {
          setActivePreloader(false);
        });
    } else {
      const filterCards = filterMovies(cards, query, isChecked);
      setFilteredCards(filterCards);
      localStorage.setItem('filterCards', JSON.stringify(filterCards));
      localStorage.setItem('query', query);
      localStorage.setItem('checkBox', isChecked);
    }
  };

  const handleChecked = (e) => {
    const checkBox = e.target.checked;
    setIsChecked(checkBox);
    localStorage.setItem('checkBox', checkBox);
    const storageCards = localStorage.getItem('filterCards');
    if (storageCards) {
      const filterCards = filterMovies(cards, query, checkBox);
      setFilteredCards(filterCards);
      localStorage.setItem('filterCards', JSON.stringify(filterCards));
      localStorage.setItem('query', query);
    }
  };

  return (
    <section className="movies">
      <SearchForm onSearch={handleSearch} query={query} setQuery={setQuery} isChecked={isChecked} onChecked={handleChecked} />
      <MoviesCardList
        cards={filteredCards.slice(0, visibleCards)}
        activePreloader={activePreloader}
        savedCards={savedCards}
        onSave={onSave}
        onDelete={onDelete}
      />
      {filteredCards.length > visibleCards && <MoreButton visibleCards={visibleCards} setVisibleCards={setVisibleCards} />}
    </section>
  );
}
export default Movies;
