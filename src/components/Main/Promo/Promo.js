import React from "react";
import "./Promo.css";
import logo from "../../../images/main logo.svg";

function Promo() {
  return (
    <section className="promo">
      <div className="promo__container">
        <div className="promo__box">
          <div className="promo__description">
            <h1 className="promo__title">
              Учебный проект студента факультета Веб-разработки.
            </h1>
            <p className="promo__text">
              Листайте ниже, чтобы узнать больше про этот проект и его
              создателя.
            </p>
          </div>
          <img
            src={logo}
            alt="Логотип земной шар"
            className="promo__image"
          ></img>
        </div>
        <button type="button" className="promo__button">
          Узнать больше
        </button>
      </div>
    </section>
  );
}

export default Promo;
