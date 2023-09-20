import React from "react";
import "./Footer.css";

function Footer() {
  return (
    <section className="footer">
      <div className="footer__container">
        <h1 className="footer__title">
          Учебный проект Яндекс.Практикум х BeatFilm.
        </h1>
        <div className="footer__items">
          <p className="footer__date">© 2023</p>
          <ul className="footer__links">
            <li>
              <a href="https://practicum.yandex.ru/" className="footer__link">
                Яндекс.Практикум
              </a>
            </li>
            <li className="footer__link_container">
              <a href="https://github.com/yaks69" className="footer__link">
                Github
              </a>
            </li>
          </ul>
        </div>
      </div>
    </section>
  );
}

export default Footer;
