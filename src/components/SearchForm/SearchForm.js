import React from "react";
import "./SearchForm.css";
import find from "../../images/find.svg";
import FilterCheckbox from "../FilterCheckbox/FilterCheckbox";

function SearchForm() {
  return (
    <section className="search">
      <div className="search__items">
        <form className="search__form" name="searchForm">
          <div className="search__container">
            <div className="search__icon" />
            <input
              className="search__input"
              name="search"
              placeholder="Фильм"
            ></input>
            <button className="search__button" type="submit"></button>
          </div>
          <FilterCheckbox />
        </form>
      </div>
    </section>
  );
}

export default SearchForm;
