import React from "react";
import { Link } from "react-router-dom";
import styles from "./WorkCourse.module.css";
import RightArrow from "../../images/right-arrow.svg";

export const WorkCourse = () => {
  return (
    <div>
      <div className={styles.course__header__container}>
        <div className={styles.course__main__container}>
          <div className={styles.course__bread__container}>
            <Link to="/" className={styles.bread__link}>
              Главная
            </Link>
            <img src={RightArrow} alt="RightArrow" />
            <span>Работа с курсами</span>
          </div>
          <div className={styles.course__title__container}>
            <span>Работа с курсами</span>
          </div>
          <div className={styles.course__description__container}>
            <p>
              Курс - это полноценный комплекс материалов по дисциплинам для
              различных направлений
              <br />
              подготовки, который включает в себя лекции, видео, тесты, задания
              и рассчитан на определенное
              <br />
              количество часов изучения.
            </p>
          </div>
          <div className={styles.course__button__container}>
            <button className={styles.button__courses}>
              Выбрать курс в каталоге
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};
