import React from "react";
import styles from "./PopularAuthors.module.css";

export const PopularAuthors = () => {
  return (
    <div>
      <div className={styles.popular__title__container}>
        <span>ПОПУЛЯРНЫЕ АВТОРЫ</span>
      </div>
      <div>
        <div className={styles.popular__card__container}>
          <div className={styles.popular__avatar}>
            <span>A</span>
          </div>
          <div className={styles.popular__author__container}>
            <span className={styles.up__text}>Диана Антипина</span>
            <span className={styles.down__text}>1 статья</span>
          </div>
        </div>
        <div className={styles.popular__card__container}>
          <div className={styles.popular__avatar}>
            <span>A</span>
          </div>
          <div className={styles.popular__author__container}>
            <span className={styles.up__text}>Анна Красюк</span>
            <span className={styles.down__text}>1 статья</span>
          </div>
        </div>
        <div className={styles.popular__card__container}>
          <div className={styles.popular__avatar}>
            <span>A</span>
          </div>
          <div className={styles.popular__author__container}>
            <span className={styles.up__text}>
              Анастасия Ильинична Каленкова
            </span>
            <span className={styles.down__text}>6 статья</span>
          </div>
        </div>
        <div className={styles.popular__card__container}>
          <div
            className={styles.popular__avatar}
            style={{ padding: "10px 3px" }}
          >
            <span>П. А.</span>
          </div>
          <div className={styles.popular__author__container}>
            <span className={styles.up__text}>Частова Полина Алексеевна</span>
            <span className={styles.down__text}>13 статья</span>
          </div>
        </div>
        <div className={styles.popular__card__container}>
          <div className={styles.popular__avatar}>
            <span>A</span>
          </div>
          <div className={styles.popular__author__container}>
            <span className={styles.up__text}>Матыс Ольга Игоревна</span>
            <span className={styles.down__text}>58 статья</span>
          </div>
        </div>
      </div>
      <div className={styles.popular__allAuthors__container}>
        <span>Все авторы</span>
      </div>
    </div>
  );
};
