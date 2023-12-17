import React from "react";
import styles from "./NewsHeader.module.css";
import RightArrow from "../../images/right-arrow.svg";

export const NewsHeader = () => {
  return (
    <div className={styles.newsHeader__main__container}>
      <div className={styles.newsHeader__container}>
        <div className={styles.newsHeader__bread__container}>
          <span>Главная страница</span>
          <img
            src={RightArrow}
            alt="RightArrow"
            style={{ paddingTop: "3px" }}
          />
          <span>Юрайт.Журнал</span>
        </div>
        <div className={styles.newsHeader__title__container}>
          <span>Юрайт.Журнал</span>
        </div>
        <div className={styles.newsHeader__description__container}>
          <p>
            В Юрайт.Журнале вы найдете актуальные и важные новости образования и
            науки. Здесь можно
            <br />
            узнать мнение специалистов на самые острые темы, ознакомиться с
            интервью и экспертными
            <br />
            статьями, изучить опыт коллег.
          </p>
        </div>
      </div>
    </div>
  );
};
