import React from "react";
import { Link } from "react-router-dom";
import styles from "./GroupStudents.module.css";
import RightArrow from "../../images/right-arrow.svg";

export const GroupStudents = () => {
  return (
    <div>
      <div className={styles.group__header__container}>
        <div className={styles.group__main__container}>
          <div className={styles.group__bread__container}>
            <Link to="/" className={styles.bread__link}>
              Главная
            </Link>
            <img src={RightArrow} alt="RightArrow" />
            <span>Преподавателям - Группы студентов</span>
          </div>
          <div className={styles.group__title__container}>
            <span>Группы студентов</span>
          </div>
          <div className={styles.group__description__container}>
            <p>
              Создание групп поможет вам в обучении и аттестации
              <br />
              студентов на нашей платформе
            </p>
          </div>
          <div className={styles.group__button__container}>
            <button className={styles.button__groups}>Перейти к группам</button>
            <button className={styles.create__groups}>
              Как создать группу студентов
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};
