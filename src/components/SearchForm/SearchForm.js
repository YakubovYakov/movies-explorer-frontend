import React from "react";
import "./SearchForm.css";
import search from "../../images/search-icon.svg";
import find from "../../images/find.svg";
import FilterCheckbox from "../Movies/FilterCheckbox/FilterCheckbox.js";

function SearchForm() {
  return (
    <section className="search">
      <div className="search__items">
        <form className="search__form">
          <div className="search__container">
            <img className="search__icon" src={search} alt="кнопка поиска" />
            <input
              className="search__input"
              name="search"
              placeholder="Фильм"
            ></input>
            <button className="search__button" type="submit">
              <img alt="Кнопка найти" src={find}></img>
            </button>
          </div>
          <FilterCheckbox />
        </form>
      </div>
    </section>
  );
}

export default SearchForm;
