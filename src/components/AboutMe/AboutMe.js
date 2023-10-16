import React from "react";
import "./AboutMe.css";
import avatar from "../../images/pic__COLOR_pic.svg";

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
              Я родился и живу в Саратове, закончил факультет экономики СГУ. Я
              люблю слушать музыку, а ещё увлекаюсь бегом. Недавно начал кодить.
              С 2015 года работал в компании «СКБ Контур». После того, как
              прошёл курс по веб-разработке, начал заниматься фриланс-заказами и
              ушёл с постоянной работы.
            </p>
            <ul className="about-me__links">
              <li>
                <a className="about-me__link" target="_blank" href="https://github.com/yaks69" rel="noreferrer">Github</a>
              </li>
            </ul>
          </div>
          <img
            src={avatar}
            alt="Фото в резюме выпускника"
            className="about-me__image"
          ></img>
        </div>
      </div>
    </section>
  );
}

export default AboutMe;
