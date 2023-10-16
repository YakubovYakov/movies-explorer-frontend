import React, { useRef } from "react";
import "./Promo.css";
import logo from '../../images/Planet.png';

function Promo() {
  const ref = useRef(null);

  const scrollToSection = () => {
    ref.current.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section className="promo">
      <div className="promo__container">
        <div className="promo__box">
          <div className="promo__description">
            <h1 className="promo__title">
              Учебный проект студента факультета 
							Веб-разработки.
            </h1>
            <p className="promo__text">
              Листайте ниже, чтобы узнать больше про этот проект и его
              создателя.
            </p>
          </div>
          <img alt="Логотип земной шар" className="promo__image" src={logo}></img>
        </div>
        
        <button
          type="button"
          className="promo__button"
					ref={ref}
          onClick={scrollToSection}
        >
          Узнать больше
        </button>
        
      </div>
    </section>
  );
}

export default Promo;
