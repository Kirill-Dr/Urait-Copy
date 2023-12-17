import React from "react";
import styles from "./Webinars.module.css";
import RightArrow from "../../images/right-arrow.svg";
import ArrowWhite from "../../images/arrow-white.svg";
import ArrowDark from "../../images/arrow-dark.svg";

export const Webinars = () => {
  return (
    <div className={styles.webinars__container}>
      <div className={styles.webinars__header}>
        <span className={styles.webinars__header__title}>
          <span>Ближайшие вебинары</span>
          <span className={styles.webinars__header__underline}></span>
        </span>
        <span className={styles.webinars__header__link}>
          Все мероприятия <img src={RightArrow} alt="RightArrow" />
        </span>
      </div>
      <div className={styles.webinars__card__container}>
        <div className={styles.webinars__card1}>
          <div className={styles.webinars__card1__title}>
            <span>
              Юрайт для администраторов и библиотекарей. Вебинар 2:
              <br />
              цифровая активность, отчетность, аккредитация
            </span>
            <button>Вебинар</button>
          </div>
          <div className={styles.webinars__card1__downBlock}>
            <span>28 ноября 10:00</span>
            <div className={styles.downBlock__description}>
              <span>Регистрация</span>
              <img src={ArrowWhite} alt="ArrowWhite" />
            </div>
          </div>
        </div>
        <div className={styles.webinars__card2}>
          <div className={styles.webinars__card2__title}>
            <span className={styles.webinars__card2__main__title}>
              Онлайн-конференция «Интерактивное оценивание и качество
              <br />
              образования»
            </span>
            <span className={styles.webinars__card2__description}>
              Методический клуб
            </span>
            <button>Онлайн-конференция</button>
          </div>
          <div className={styles.webinars__card2__downBlock}>
            <span>29 ноября 10:00</span>
            <div className={styles.downBlock__description}>
              <span>Регистрация</span>
              <img src={ArrowDark} alt="ArrowDark" />
            </div>
          </div>
        </div>
        <div className={styles.webinars__card3}>
          <div className={styles.webinars__card3__title}>
            <span className={styles.webinars__card2__main__title}>
              Онлайн-конференция «Интерактивное оценивание и качество
              <br />
              образования»
            </span>
            <button>Вебинар</button>
          </div>
          <div className={styles.webinars__card1__downBlock}>
            <span>30 ноября 10:00</span>
            <div className={styles.downBlock__description}>
              <span>Регистрация</span>
              <img src={ArrowDark} alt="ArrowDark" />
            </div>
          </div>
        </div>
      </div>
      <div className={styles.webinars__card__link}>
        <span className={styles.webinars__header__link}>
          Все мероприятия <img src={RightArrow} alt="RightArrow" />
        </span>
      </div>
    </div>
  );
};
