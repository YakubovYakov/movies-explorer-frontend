import React from 'react';
import './MoviesCardList.css';
import MoviesCard from '../MoviesCard/MoviesCard';
import Preloader from '../Preloader/Preloader';

function MoviesCardList({ cards, savedCards, activePreloader, onSave, onDelete }) {
  return (
    <>
      <section className="cards">
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
