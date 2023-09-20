import React from "react";
import "./Portfolio.css";

function Portfolio() {
  return (
    <section className="portfolio">
      <div className="portfiolio__container">
        <h2 className="portfolio__title">Портфолио</h2>
        <ul className="portfolio__items">
          <li className="portfiolio__links">
            <a
              className="portfolio__link"
              href="https://github.com/yaks69/how-to-learn"
              target="_blank"
              rel="noreferrer"
            >
              Статичный сайт
            </a>
          </li>
          <li className="portfiolio__links">
            <a
              className="portfolio__link"
              href="https://github.com/yaks69/russian-travel"
              target="_blank"
              rel="noreferrer"
            >
              Адаптивный сайт
            </a>
          </li>
          <li className="portfiolio__links">
            <a
              className="portfolio__link"
              href="https://github.com/yaks69/react-mesto-api-full-gha"
              target="_blank"
              rel="noreferrer"
            >
              Одностраничное приложение
            </a>
          </li>
        </ul>
      </div>
    </section>
  );
}

export default Portfolio;
