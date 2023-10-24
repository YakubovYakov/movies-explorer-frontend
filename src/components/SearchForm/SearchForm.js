import React from 'react';
import './SearchForm.css';
import FilterCheckbox from '../FilterCheckbox/FilterCheckbox';

function SearchForm({ onSearch, query, setQuery, isChecked, onChecked }) {
  const handleSubmit = (e) => {
    e.preventDefault();
    onSearch(query);
  };

  const handleChange = (e) => {
    setQuery(e.target.value);
  };

  return (
    <section className="search">
      <div className="search__items">
        <form className="search__form" name="searchForm" onSubmit={handleSubmit}>
          <div className="search__container">
            <div className="search__icon" />
            <input className="search__input" name="search" placeholder="Фильм" onChange={handleChange} value={query}></input>
            <button className="search__button" type="submit"></button>
          </div>
          <FilterCheckbox isChecked={isChecked} onChecked={onChecked} />
        </form>
      </div>
    </section>
  );
}

export default SearchForm;
