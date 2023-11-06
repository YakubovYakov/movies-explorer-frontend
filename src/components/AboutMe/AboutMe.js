import React from "react";
import "./AboutMe.css";

function AboutMe() {
  return (
    <section className="about-me">
      <div className="about-me__container">
        <h2 className="about-me__title">Студент</h2>
        <div className="about-me__items">
          <div className="about-me__info">
            <h3 className="about-me__subtitle">Яков</h3>
            <p className="about-me__description">
              Фронтенд-разработчик, 22 года
            </p>
            <p className="about-me__text">
              Я родился в городе Пятигорск, а живу в Москве, учусь на факультете
              инженерных технологий в Северо-Кавказском федеральном
              университете. Я готовлю вкусную еду и люблю слушать музыку. Долго
              работал на кухне в ресторанах, после пошёл на курс по
              веб-разработке. Программирование изучаю чуть меньше года. 
            </p>
            <ul className="about-me__links">
              <li>
                <a
                  className="about-me__link"
                  target="_blank"
                  href="https://github.com/yaks69"
                  rel="noreferrer"
                >
                  Github
                </a>
              </li>
            </ul>
          </div>
          <img alt="Фото в резюме выпускника" className="about-me__image"></img>
        </div>
      </div>
    </section>
  );
}

export default AboutMe;
