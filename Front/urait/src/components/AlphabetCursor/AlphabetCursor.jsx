import React from "react";
import styles from "./AlphabetCursor.module.css";

export const AlphabetCursor = () => {
  return (
    <div className={styles.AlphabetCursor__main__container}>
      <div className={styles.AlphabetCursor__container}>
        <div className={styles.AlphabetCursor__container__title}>
          <span>Алфавитный указатель</span>
        </div>
        <div className={styles.AlphabetCursor__letter__container}>
          <div className={styles.AlphabetCursor__cards__container}>
            <div className={styles.AlphabetCursor__card__container}>
              <div className={styles.AlphabetCursor__card__title}>A</div>
              <div className={styles.AlphabetCursor__card__links}>
                <span>Авторский гонорар</span>
              </div>
            </div>
            <div className={styles.AlphabetCursor__card__container}>
              <div className={styles.AlphabetCursor__card__title}>В</div>
              <div className={styles.AlphabetCursor__card__links}>
                <span>Вебинары и дискусии</span>
              </div>
            </div>
            <div className={styles.AlphabetCursor__card__container}>
              <div className={styles.AlphabetCursor__card__title}>Г</div>
              <div className={styles.AlphabetCursor__card__links}>
                <span>Гибкие курсы (Преподавателю)</span>
                <span>Гибкие курсы (Студенту)</span>
              </div>
            </div>
            <div className={styles.AlphabetCursor__card__container}>
              <div className={styles.AlphabetCursor__card__title}>Д</div>
              <div className={styles.AlphabetCursor__card__links}>
                <span>Доставка и оплата</span>
              </div>
            </div>
            <div className={styles.AlphabetCursor__card__container}>
              <div className={styles.AlphabetCursor__card__title}>З</div>
              <div className={styles.AlphabetCursor__card__links}>
                <span>Заявки в библиотеку</span>
                <span>Заявки и заказы</span>
              </div>
            </div>
            <div className={styles.AlphabetCursor__card__container}>
              <div className={styles.AlphabetCursor__card__title}>И</div>
              <div className={styles.AlphabetCursor__card__links}>
                <span>Инструменты поиска (Преподавателю)</span>
                <span>Инструменты поиска (Сотруднику библиотеки)</span>
                <span>Инструменты поиска (Студенту)</span>
                <span>Интеграция с учебными заведениями</span>
              </div>
            </div>
            <div className={styles.AlphabetCursor__card__container}>
              <div className={styles.AlphabetCursor__card__title}>К</div>
              <div className={styles.AlphabetCursor__card__links}>
                <span>Книги в свободном доступе</span>
              </div>
            </div>
          </div>
          <div className={styles.AlphabetCursor__cards__container}>
            <div className={styles.AlphabetCursor__card__container}>
              <div className={styles.AlphabetCursor__card__title}>Л</div>
              <div className={styles.AlphabetCursor__card__links}>
                <span>Личный кабинет автора</span>
                <span>Личный кабинет ректора</span>
              </div>
            </div>
            <div className={styles.AlphabetCursor__card__container}>
              <div className={styles.AlphabetCursor__card__title}>М</div>
              <div className={styles.AlphabetCursor__card__links}>
                <span>Магазинам и интернет-магазинам</span>
                <span>Мобильное приложение (Преподавателю)</span>
                <span>Мобильное приложение (Студенту)</span>
              </div>
            </div>
            <div className={styles.AlphabetCursor__card__container}>
              <div className={styles.AlphabetCursor__card__title}>О</div>
              <div className={styles.AlphabetCursor__card__links}>
                <span>Онлайн-конференции</span>
                <span>Онлайн-курсы</span>
                <span>Отчеты</span>
              </div>
            </div>
            <div className={styles.AlphabetCursor__card__container}>
              <div className={styles.AlphabetCursor__card__title}>П</div>
              <div className={styles.AlphabetCursor__card__links}>
                <span>Партнёрская программа (Преподавателю)</span>
                <span>Партнёрская программа (Сотруднику библиотеки)</span>
                <span>Производственная анкета</span>
              </div>
            </div>
            <div className={styles.AlphabetCursor__card__container}>
              <div className={styles.AlphabetCursor__card__title}>Р</div>
              <div className={styles.AlphabetCursor__card__links}>
                <span>Работа с курсом (Преподавателю)</span>
                <span>Работа с курсом (Сотруднику библиотеки)</span>
                <span>Работа с курсом (Студенту)</span>
                <span>Работа с преподавателем</span>
                <span>Работа со студентами</span>
                <span>Регистрация и доступ (Преподавателю)</span>
                <span>Регистрация и доступ (сотруднику библиотеки)</span>
                <span>Регистрация и доступ (Студенту)</span>
              </div>
            </div>
          </div>
          <div className={styles.AlphabetCursor__cards__container}>
            <div className={styles.AlphabetCursor__card__container}>
              <div className={styles.AlphabetCursor__card__title}>C</div>
              <div className={styles.AlphabetCursor__card__links}>
                <span>Сервис сертификатов</span>
                <span>Скидки студентам</span>
                <span>Справка о тиражах</span>
                <span>Статистика по учебному заведению</span>
              </div>
            </div>
            <div className={styles.AlphabetCursor__card__container}>
              <div className={styles.AlphabetCursor__card__title}>У</div>
              <div className={styles.AlphabetCursor__card__links}>
                <span>Умное тестирование (Преподавателю)</span>
                <span>Умное тестирование (Студенту)</span>
                <span>Управление пользователями</span>
                <span>Учебным заведениям и библиотекам</span>
              </div>
            </div>
            <div className={styles.AlphabetCursor__card__container}>
              <div className={styles.AlphabetCursor__card__title}>Ф</div>
              <div className={styles.AlphabetCursor__card__links}>
                <span>Физическим лицам</span>
              </div>
            </div>
            <div className={styles.AlphabetCursor__card__container}>
              <div className={styles.AlphabetCursor__card__title}>Ш</div>
              <div className={styles.AlphabetCursor__card__links}>
                <span>Шаблон рабочей программы по дисциплине</span>
                <span>Школа преподавателя</span>
              </div>
            </div>
            <div className={styles.AlphabetCursor__card__container}>
              <div className={styles.AlphabetCursor__card__title}>Ю</div>
              <div className={styles.AlphabetCursor__card__links}>
                <span>Юрайт.Задания (Преподавателю)</span>
                <span>Юрайт.Задания (Студенту)</span>
                <span>Юрайт.Экзамен (Преподавателю)</span>
                <span>Юрайт.Экзамен (Студенту)</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
