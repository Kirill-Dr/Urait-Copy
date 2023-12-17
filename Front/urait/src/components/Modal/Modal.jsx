import React from "react";
import styles from "./Modal.module.css";
import { Link } from "react-router-dom";

export const Modal = ({ isOpened, setIsOpened }) => {
  return (
    <div
      className={styles.modal__teachers}
      onMouseLeave={() => setIsOpened(!isOpened)}
    >
      <div className={styles.modal__container}>
        <div className={styles.modal__blocks}>
          <span className={styles.modal__title}>УЧЕБНЫЙ ПРОЦЕСС</span>
          <div className={styles.modal__links}>
            <span className={styles.modal__link}>
              Регистрация преподавателей
            </span>
            <Link
              to="/group-students"
              className={styles.modal__link}
              onClick={() => setIsOpened(false)}
            >
              Группы студентов
            </Link>
            <span className={styles.modal__link}>Каталог и поиск курсов</span>
            <Link
              to="/work-course"
              className={styles.modal__link}
              onClick={() => setIsOpened(false)}
            >
              Работа с курсами
            </Link>
            <span className={styles.modal__link}>
              Конструктор гибких курсов
            </span>
            <Link
              to="/template-work-programs"
              className={styles.modal__link}
              onClick={() => setIsOpened(false)}
            >
              Шаблоны рабочих программ по
              <br />
              дисциплинам
            </Link>
            <span className={styles.modal__link}>Мобильное приложение</span>
          </div>
        </div>
        <div className={styles.modal__blocks}>
          <span className={styles.modal__title}>ОЦЕНИВАНИЕ</span>
          <div className={styles.modal__links}>
            <span className={styles.modal__link}>Входное тестирование</span>
            <span className={styles.modal__link}>Умное тестирование</span>
            <span className={styles.modal__link}>Задания</span>
            <span className={styles.modal__link}>Экзамены</span>
            <span className={styles.modal__link}>Тотальный экзамен</span>
            <span className={styles.modal__link}>Конституционный экзамен</span>
          </div>
        </div>
        <div className={styles.modal__blocks}>
          <span className={styles.modal__title}>ПУБЛИКАЦИЯ КУРСОВ</span>
          <div className={styles.modal__links}>
            <span className={styles.modal__link}>Условия сотрудничества</span>
            <span className={styles.modal__link}>Подать заявку</span>
            <span className={styles.modal__link}>Личный кабинет автора</span>
            <span className={styles.modal__link}>Производственная анкета</span>
            <span className={styles.modal__link}>
              Выплаты авторского гонорара
            </span>
            <span className={styles.modal__link}>Справка о тиражах</span>
            <span className={styles.modal__link}>Интеграция видеоконтента</span>
          </div>
        </div>
        <div className={styles.modal__blocks}>
          <span className={styles.modal__title}>ДОСТУП К КУРСАМ</span>
          <div className={styles.modal__links}>
            <span className={styles.modal__link}>
              Подписка учебного заведения
            </span>
            <span className={styles.modal__link}>
              Личная подписка на платформу
            </span>
            <span className={styles.modal__link}>
              Групповая аренда электронных
              <br />
              курсов и учебников
            </span>
            <span className={styles.modal__link}>
              Индивидуальная аренда
              <br />
              электронных курсов и учебников
            </span>
            <span className={styles.modal__link}>
              Бесплатный доступ на Школе
              <br />
              преподавателя
            </span>
            <span className={styles.modal__link}>Ознакомительный доступ</span>
            <span className={styles.modal__link}>
              Индивидуальная книжная полка
              <br />
              преподавателя
            </span>
          </div>
        </div>
      </div>
    </div>
  );
};
