import React, {useRef} from "react";
import "./AboutProject.css";

function AboutProject() {
	

  return (
    <section className="about-project" id="about-project" >
      <div className="about-project__container">
          <h2 className="about-project__title">О проекте</h2>
        <ul className="about-project__info">
          <li>
            <h2 className="about-project__info_text">
              Дипломный проект включал 5 этапов
            </h2>
            <p className="about-project__description">
              Составление плана, работу над бэкендом, вёрстку, добавление
              функциональности и финальные доработки.
            </p>
          </li>
          <li>
            <h2 className="about-project__info_text about-project__info_text_removed">
              На выполнение диплома ушло 5 недель
            </h2>
            <p className="about-project__description about-project__description_removed">
              У каждого этапа был мягкий и жёсткий дедлайн, которые нужно было
              соблюдать, чтобы успешно защититься.
            </p>
          </li>
        </ul>
				<div className="about-project__bar">
					<p className="about-project__back">1 неделя</p>
					<p className="about-project__front">4 недели</p>
					<p className="about-project__back_caption">Back-end</p>
					<p className="about-project__front_caption">Front-end</p>
				</div>
      </div>
    </section>
  );
}

export default AboutProject;
