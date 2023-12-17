import React from "react";
import { Link } from "react-router-dom";
import styles from "./RPDHeader.module.css";
import RightArrow from "../../images/right-arrow.svg";

export const RPDHeader = () => {
  return (
    <div>
      <div className={styles.course__header__container}>
        <div className={styles.course__main__container}>
          <div className={styles.course__bread__container}>
            <Link to="/" className={styles.bread__link}>
              Главная
            </Link>
            <img src={RightArrow} alt="RightArrow" />
            <span>О компании</span>
          </div>
          <div className={styles.course__title__container}>
            <span>
              Шаблон рабочей программы
              <br />
              по дисциплине (РПД)
            </span>
          </div>
          <div className={styles.course__description__container}>
            <p style={{ marginBottom: "30px" }}>
              На Образовательной платформе «Юрайт» есть сервис, позволяющий
              <br />
              максимально быстро получить качественный шаблон рабочей программы
              <br />
              дисциплины к самым популярным и востребованным курсам и учебникам.
            </p>
            <span className={styles.without__text}>
              Сервис доступен без подписки на платформу!
            </span>
          </div>
          <div className={styles.course__button__container}>
            <button className={styles.button__courses}>
              Сформировать шаблон РПД
            </button>
            <button className={styles.button__courses_2}>
              Инструкция, как сформировать РПД
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};
