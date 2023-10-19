import React from "react";
import "./FilterCheckbox.css";

function FilterCheckbox() {
  return (
   <label className="filter-checkbox">
  <div className="filter-checkbox__container">
    <div className="filter-checkbox__toggle">
      <input type="checkbox" className="filter-checkbox__invisible" />
      <span className="filter-checkbox__visible" />
    </div>
  </div>
  <span className="filter-checkbox__span">Короткометражки</span>
</label>

  );
}


export default FilterCheckbox;
