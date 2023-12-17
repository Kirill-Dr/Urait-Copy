import React from "react";
import styles from "./InfoStudents.module.css";
import InfoCard1 from "../../images/info-card1.png";
import InfoCard2 from "../../images/info-card2.png";
import InfoCard3 from "../../images/info-card3.png";
import InfoCard4 from "../../images/info-card4.png";
import InfoCard5 from "../../images/info-card5.png";
import BlueArrow from "../../images/blue-arrow.svg";

export const InfoStudents = () => {
  return (
    <div className={styles.info__container}>
      <div className={styles.info__title__container}>
        <span>Для чего нужна группа студентов?</span>
      </div>
      <div className={styles.info__cards__container}>
        <div className={styles.info__card__item} style={{ gridArea: "a" }}>
          <div className={styles.info__card__information}>
            <img src={InfoCard1} alt="InfoCard1" />
            <div className={styles.info__card__description}>
              <span>
                Назначать курс для изучения
                <br />
                группе студентов
              </span>
            </div>
          </div>
          <div className={styles.info__link__container}>
            <span>Подробнее о назначении курса</span>
            <img src={BlueArrow} alt="BlueArrow" />
          </div>
        </div>
        <div className={styles.info__card__item} style={{ gridArea: "b" }}>
          <div className={styles.info__card__information}>
            <img src={InfoCard2} alt="InfoCard2" />
            <div className={styles.info__card__description}>
              <span>
                Получать результаты тестов студентов
                <br />
                по назначенным курсам
              </span>
            </div>
          </div>
          <div className={styles.info__link__container}>
            <span>Подробнее о тестах</span>
            <img src={BlueArrow} alt="BlueArrow" />
          </div>
        </div>
        <div className={styles.info__card__item} style={{ gridArea: "c" }}>
          <div className={styles.info__card__information}>
            <img src={InfoCard3} alt="InfoCard3" />
            <div className={styles.info__card__description}>
              <span>
                Провоодить промежуточную
                <br />
                аттестацию и назначать группе
                <br />
                экзамен
              </span>
            </div>
          </div>
          <div className={styles.info__link__container}>
            <span>Подробнее об экзамене</span>
            <img src={BlueArrow} alt="BlueArrow" />
          </div>
        </div>
        <div className={styles.info__card__item} style={{ gridArea: "d" }}>
          <div className={styles.info__card__information}>
            <img src={InfoCard4} alt="InfoCard4" />
            <div className={styles.info__card__description}>
              <span>Выдавать студентам задания</span>
            </div>
          </div>
          <div className={styles.info__link__container}>
            <span>Подробнее о заданиях</span>
            <img src={BlueArrow} alt="BlueArrow" />
          </div>
        </div>
        <div className={styles.info__card__item} style={{ gridArea: "e" }}>
          <div className={styles.info__card__information}>
            <img src={InfoCard5} alt="InfoCard5" />
            <div className={styles.info__card__description}>
              <span>
                Смотреть цифровую активность
                <br />
                студентов на платформе
              </span>
            </div>
          </div>
          <div className={styles.info__link__container}>
            <span>Подробнее о назначении курса</span>
            <img src={BlueArrow} alt="BlueArrow" />
          </div>
        </div>
      </div>
    </div>
  );
};
