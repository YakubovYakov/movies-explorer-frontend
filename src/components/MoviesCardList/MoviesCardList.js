import React from 'react';
import './MoviesCardList.css';
import MoviesCard from '../MoviesCard/MoviesCard';
import Preloader from '../Preloader/Preloader';

function MoviesCardList({ cards, savedCards, activePreloader, onSave, onDelete, isEmptySearchError }) {
  return (
    <>
      <section className="cards">
        <span className={`cards__search-error ${isEmptySearchError ? 'cards__search-error_active' : ''}`}>{isEmptySearchError}</span>
        {activePreloader ? (
          <Preloader />
        ) : (
          <ul className="cards__list">
            {cards.map((card) => (
              <MoviesCard key={card.id || card._id} card={card} savedCards={savedCards} onSave={onSave} onDelete={onDelete} />
            ))}
          </ul>
        )}
      </section>
    </>
  );
}

export default MoviesCardList;
