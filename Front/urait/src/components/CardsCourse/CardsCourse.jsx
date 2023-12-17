import React from "react";
import styles from "./CardsCourse.module.css";
import CourseCard1 from "../../images/course-card1.png";
import CourseCard2 from "../../images/course-card2.png";
import CourseCard3 from "../../images/course-card3.png";
import CourseCard4 from "../../images/course-card4.png";
import CourseCard5 from "../../images/course-card5.png";
import InfoCard1 from "../../images/info-card1.png";
import InfoCard2 from "../../images/info-card2.png";
import InfoCard3 from "../../images/info-card3.png";
import InfoCard4 from "../../images/info-card4.png";

export const CardsCourse = () => {
  return (
    <div className={styles.CardsCourse__main__container}>
      <div className={styles.CardsCourse__title__container}>
        <span>Возможности в курсах</span>
      </div>
      <div className={styles.CardsCourse__items__container}>
        <div
          className={styles.CardsCourse__item}
          style={{ backgroundColor: "#f9eae9" }}
        >
          <img src={CourseCard1} alt="CourseCard1" />
          <span>Текст</span>
          <p>Изучайте базовый курс</p>
        </div>
        <div
          className={styles.CardsCourse__item}
          style={{ backgroundColor: "#eaf6f5" }}
        >
          <img src={InfoCard2} alt="InfoCard2" />
          <span>Тесты</span>
          <p>
            Проверяйте знания как по конкретной теме,
            <br />
            так и по всему курсу
          </p>
        </div>
        <div
          className={styles.CardsCourse__item}
          style={{ backgroundColor: "#f7f0ea" }}
        >
          <img src={InfoCard4} alt="InfoCard4" />
          <span>Задания</span>
          <p>
            Усваивайте материал с помощью заданий от
            <br />
            преподавателя, требующих развернутого
            <br />
            ответа
          </p>
        </div>
        <div
          className={styles.CardsCourse__item}
          style={{ backgroundColor: "#f8e9ec" }}
        >
          <img src={CourseCard2} alt="CourseCard1" />
          <span>Видеоматериалы</span>
          <p>
            Смотрите обучающие видео по конкретным
            <br />
            темам
          </p>
        </div>
        <div
          className={styles.CardsCourse__item}
          style={{ backgroundColor: "#f8ecea" }}
        >
          <img src={InfoCard3} alt="InfoCard3" />
          <span>Экзамен</span>
          <p>
            Завершайте обучение итоговой аттестацией по
            <br />
            материалам всего курса, назначенный
            <br />
            преподавателем
          </p>
        </div>
        <div
          className={styles.CardsCourse__item}
          style={{ backgroundColor: "#fae6f8" }}
        >
          <img src={InfoCard1} alt="InfoCard1" />
          <span>Фильтры по медиаматериалам</span>
          <p>Изучайте, то что именно вам нужно и подходит</p>
        </div>
        <div
          className={styles.CardsCourse__item}
          style={{ backgroundColor: "#eae6fb" }}
        >
          <img src={CourseCard3} alt="CourseCard3" />
          <span>Закладки</span>
          <p>
            Делайте закладки и возвращайтесь в любой
            <br />
            момент к нужному разделу курса
          </p>
        </div>
        <div
          className={styles.CardsCourse__item}
          style={{ backgroundColor: "#e7e7fa" }}
        >
          <img src={CourseCard4} alt="CourseCard5" />
          <span>Поиск по тексту</span>
          <p>
            Ищите нужный вам фрагмент курса с
            <br />
            помощью поиска по тексту
          </p>
        </div>
        <div
          className={styles.CardsCourse__item}
          style={{ backgroundColor: "#eaf0f8" }}
        >
          <img src={CourseCard5} alt="CourseCard5" />
          <span>Цитаты</span>
          <p>
            Оформляйте цитаты и используйте их в своих
            <br />
            работах
          </p>
        </div>
      </div>
    </div>
  );
};
