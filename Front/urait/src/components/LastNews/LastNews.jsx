import React from "react";
import styles from "./LastNews.module.css";
import RightArrow from "../../images/right-arrow.svg";
import ArrowDark from "../../images/arrow-dark.svg";

export const LastNews = () => {
  return (
    <div className={styles.news__container}>
      <div className={styles.news__container__title}>
        <div>
          <span className={styles.news__title}>Последние новости</span>
          <div className={styles.underline}></div>
        </div>
        <div className={styles.all__news__span}>
          <span>Все новости</span>
          <img
            src={RightArrow}
            alt="RightArrow"
            style={{ marginLeft: "10px" }}
          />
        </div>
      </div>
      <div className={styles.news__cards__container}>
        <div className={styles.news__card}>
          <div>
            <div className={styles.news__date}>
              <span>27 ноября 2023</span>
            </div>
            <div className={styles.news__info}>
              <span>
                Отвечаем на 7 частых вопросов про
                <br />
                Тотальный экзамен
              </span>
            </div>
            <div className={styles.news__description}>
              <p>
                Свыше 14 000 прохождений Тотального
                <br />
                экзамена за две недели поставили 7
                <br />
                методических и организационных вопросов.
                <br />
                Отвечает академический директор
              </p>
            </div>
          </div>
          <div className={styles.read__container}>
            <div>
              <span>Читать</span>
            </div>
            <div className={styles.arrow__block}>
              <img src={ArrowDark} alt="ArrowDark" />
            </div>
          </div>
        </div>
        <div className={styles.news__card}>
          <div>
            <div className={styles.news__date}>
              <span>23 ноября 2023</span>
            </div>
            <div className={styles.news__info}>
              <span>
                Успейте оформить подписку до
                <br />
                подорожания!
              </span>
            </div>
          </div>
          <div className={styles.read__container}>
            <div>
              <span>Читать</span>
            </div>
            <div className={styles.arrow__block}>
              <img src={ArrowDark} alt="ArrowDark" />
            </div>
          </div>
        </div>
        <div className={styles.news__card}>
          <div>
            <div className={styles.news__date}>
              <span>23 ноября 2023</span>
            </div>
            <div className={styles.news__info}>
              <span>
                Юрайт и Тюмень объединяют усилия для прогресса в цифровом
                образовании
              </span>
            </div>
            <div className={styles.news__description}>
              <p>
                Ведущий куратор партнерских программ
                <br />
                Образовательной платформы «Юрайт» Ольга
                <br />
                Подколодняя провела ряд встреч в учебных
                <br />
                заведениях региона и рассказала о сервисах...
              </p>
            </div>
          </div>
          <div className={styles.read__container}>
            <div>
              <span>Читать</span>
            </div>
            <div className={styles.arrow__block}>
              <img src={ArrowDark} alt="ArrowDark" />
            </div>
          </div>
        </div>
      </div>
      <div className={styles.all__news__span} style={{ marginBottom: "70px" }}>
        <span>Все новости</span>
        <img src={RightArrow} alt="RightArrow" style={{ marginLeft: "10px" }} />
      </div>
    </div>
  );
};
