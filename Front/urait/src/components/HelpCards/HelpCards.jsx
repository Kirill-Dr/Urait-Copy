import React, { useState } from "react";
import styles from "./HelpCards.module.css";
import ArrowOrange from "../../images/arrow-orange.svg";
import Coliseum from "../../images/сoliseum.svg";
import Coliseum2 from "../../images/сoliseum2.svg";

export const HelpCards = () => {
  const [handleHover, setHandleHover] = useState(false);

  const isHovered = () => {
    setHandleHover(!handleHover);
  };

  return (
    <div className={styles.helpCards__out__container}>
      <div className={styles.helpCards__container}>
        <div className={styles.bread__container}>
          <div onMouseEnter={isHovered} onMouseLeave={isHovered}>
            {handleHover ? (
              <img src={Coliseum2} alt="Coliseum" />
            ) : (
              <img src={Coliseum} alt="Coliseum" />
            )}
          </div>
          <span>/</span>
          <span>Помощь</span>
        </div>
        <h1 className={styles.helpCards__header__title}>Помощь</h1>
        <div className={styles.helpCards__main__container}>
          <div className={styles.helpCards__card}>
            <div className={styles.helpCards__card__title}>
              <span style={{ color: "black" }}>Стунденту</span> •{" "}
              <span>10</span>
            </div>
            <div className={styles.helpCards__card__link}>
              <span>Регистрация и доступ</span>
              <span>Инструменты поиска</span>
              <span>Работа с курсом</span>
              <span>Работа с преподавателем</span>
              <span>Умное тестирование</span>
            </div>
            <div className={styles.helpCards__card__services}>
              <span>Все сервисы</span>
              <img src={ArrowOrange} alt="ArrowOrange" />
            </div>
          </div>
          <div className={styles.helpCards__card}>
            <div className={styles.helpCards__card__title}>
              <span style={{ color: "black" }}>Преподавателю</span> •{" "}
              <span>13</span>
            </div>
            <div className={styles.helpCards__card__link}>
              <span>Регистрация и доступ</span>
              <span>Заявки в библиотеку</span>
              <span>Инструменты поиска</span>
              <span>Работа с курсом</span>
              <span>Шаблон рабочей программы по дисциплине</span>
            </div>
            <div className={styles.helpCards__card__services}>
              <span>Все сервисы</span>
              <img src={ArrowOrange} alt="ArrowOrange" />
            </div>
          </div>
          <div className={styles.helpCards__card}>
            <div className={styles.helpCards__card__title}>
              <span style={{ color: "black" }}>Сотруднику библиотеки</span> •{" "}
              <span>9</span>
            </div>
            <div className={styles.helpCards__card__link}>
              <span>Регистрация и доступ</span>
              <span>Инструменты поиска</span>
              <span>Работа с курсом</span>
              <span>Управление пользователями</span>
              <span>Отчеты</span>
            </div>
            <div className={styles.helpCards__card__services}>
              <span>Все сервисы</span>
              <img src={ArrowOrange} alt="ArrowOrange" />
            </div>
          </div>
          <div className={styles.helpCards__card}>
            <div className={styles.helpCards__card__title}>
              <span style={{ color: "black" }}>Ректору</span> • <span>2</span>
            </div>
            <div
              className={styles.helpCards__card__link}
              style={{ justifyContent: "flex-start" }}
            >
              <span className={styles.mb}>Личный кабинет ректора</span>
              <span>Статистика по учебному заведению</span>
            </div>
            <div className={styles.helpCards__card__services}>
              <span>Все сервисы</span>
              <img src={ArrowOrange} alt="ArrowOrange" />
            </div>
          </div>
          <div className={styles.helpCards__card}>
            <div className={styles.helpCards__card__title}>
              <span style={{ color: "black" }}>Автору</span> • <span>4</span>
            </div>
            <div
              className={styles.helpCards__card__link}
              style={{ justifyContent: "flex-start" }}
            >
              <span className={styles.mb}>Личный кабинет автора</span>
              <span className={styles.mb}>Справка о тиражах</span>
              <span className={styles.mb}>Производственная анкета</span>
              <span>Авторский гонорар</span>
            </div>
            <div className={styles.helpCards__card__services}>
              <span>Все сервисы</span>
              <img src={ArrowOrange} alt="ArrowOrange" />
            </div>
          </div>
          <div className={styles.helpCards__card}>
            <div className={styles.helpCards__card__title}>
              <span style={{ color: "black" }}>Как купить</span> •{" "}
              <span>5</span>
            </div>
            <div className={styles.helpCards__card__link}>
              <span>Учебным заведениям и библиотекам</span>
              <span>Физическим лицам</span>
              <span>Магазинам и интернет-магазинам</span>
              <span>Доставка и оплата</span>
              <span>Книги в свободном доступе</span>
            </div>
            <div className={styles.helpCards__card__services}>
              <span>Все сервисы</span>
              <img src={ArrowOrange} alt="ArrowOrange" />
            </div>
          </div>
          <div className={styles.helpCards__card}>
            <div className={styles.helpCards__card__title}>
              <span style={{ color: "black" }}>Юрайт. Академия</span> •{" "}
              <span>4</span>
            </div>
            <div
              className={styles.helpCards__card__link}
              style={{ justifyContent: "flex-start" }}
            >
              <span className={styles.mb}>Вебинары и дискусии</span>
              <span className={styles.mb}>Онлайн-конференции</span>
              <span className={styles.mb}>Школа преподавателя</span>
              <span>Онлайн курсы</span>
            </div>
            <div className={styles.helpCards__card__services}>
              <span>Все сервисы</span>
              <img src={ArrowOrange} alt="ArrowOrange" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
