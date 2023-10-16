import React from "react";
import "./FilterCheckbox.css";

function FilterCheckbox() {
  return (
    <label className="filtercheckbox">
      <div className="filtercheckbox__container">
        <div className="filtercheckbox__toggle">
          <input type="checkbox" className="filtercheckbox__invisible" />
          <span className="filtercheckbox__visible" />
        </div>
      </div>
      <span className="filtercheckbox__span">Короткометражки</span>
    </label>
  );
}


export default FilterCheckbox;
