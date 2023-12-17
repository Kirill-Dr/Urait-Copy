import React from "react";
import styles from "./RPDCards.module.css";

export const RPDCards = () => {
  return (
    <div className={styles.main__container}>
      <div
        className={styles.card__element}
        style={{ backgroundColor: "#fdf2e4" }}
      >
        <div className={styles.card__title}>Преподавателю</div>
        <div className={styles.card__desc}>Экономит неделю летних каникул</div>
        <div className={styles.card__info}>
          У преподавателей уходят дни на составление
          <br />
          рабочих программ, на подробное описание
          <br />
          каждой темы, составление почасовой
          <br />
          таблицы, поиски дополнительной литературы.
          <br />
          Шаблон упростит работу преподавателя и
          <br />
          сэкономит ценное время.
        </div>
      </div>
      <div
        className={styles.card__element}
        style={{ backgroundColor: "#d3f4e1" }}
      >
        <div className={styles.card__title}>
          Учебному
          <br />
          заведению
        </div>
        <div className={styles.card__desc}>Помогает получить аккредитацию</div>
        <div className={styles.card__info}>
          Без рабочей программы к каждому предмету
          <br />
          учебное заведение не может получить или
          <br />
          продлить аккредитацию. 42 % нарушений
          <br />
          работы учебного заведения Рособрнадзор
          <br />
          выявляет именно в небрежно составленных
          <br />
          рабочих программах.
        </div>
      </div>
      <div
        className={styles.card__element}
        style={{ backgroundColor: "#d1e0f7" }}
      >
        <div className={styles.card__title}>Студенту</div>
        <div className={styles.card__desc}>
          Позволяет планировать результаты
          <br />
          обучения
        </div>
        <div className={styles.card__info}>
          Рабочая программа — инструмент, который
          <br />
          позволяет студенту безболезненно
          <br />
          восполнять пробелы в обучении, понимать
          <br />
          критерии выставления оценок и видеть место
          <br />
          и роль дисциплины в образовательной
          <br />
          программе.
        </div>
      </div>
    </div>
  );
};
