import React from "react";
import styles from "./NewsCards.module.css";
import DateNews from "../../images/date-news.svg";
import TimeNews from "../../images/time-news.svg";
import EyeNews from "../../images/eye-news.svg";

export const NewsCards = () => {
  return (
    <div className={styles.main__container}>
      <div className={styles.card__container} style={{ gridArea: "a" }}>
        <div className={styles.card__title__container}>
          <div className={styles.dark__container}>
            <div className={styles.info__title}>Новости Юрайта</div>
            <div className={styles.title__text}>
              Юрайт и Санкт-Петербург проводят цифровую трансформацию
              <br />
              образования
            </div>
          </div>
        </div>
        <div className={styles.card__container__down}>
          <div className={styles.card__description}>
            Ведущий куратор партнерских программ Образовательной платформы
            «Юрайт»
            <br />
            Дарья Чинкова провела ряд встреч с учебными заведениями региона,
            обсудила
            <br />
            современный образовательный контент и продемонстрировала работу
            <br />
            полезных цифровых инструментов.
          </div>
          <div className={styles.card__desc__info}>
            <span className={styles.card__img}>
              <img
                src={DateNews}
                alt="DateNews"
                className={styles.card__desc}
              />
              <span>01 декабря 2023</span>
            </span>
            <span className={styles.card__img}>
              <img
                src={TimeNews}
                alt="TimeNews"
                className={styles.card__desc}
              />
              <span>2 мин</span>
            </span>
            <span className={styles.card__img}>
              <img src={EyeNews} alt="EyeNews" className={styles.card__desc} />
              <span>196</span>
            </span>
          </div>
        </div>
      </div>
      <div className={styles.card__container}>
        <div className={styles.card__title__container}>
          <div className={styles.dark__container}>
            <div className={styles.info__title}>Новости Юрайта</div>
            <div className={styles.title__text}>
              Ноябрь 2023. Новости
              <br />
              платформы
            </div>
          </div>
        </div>
        <div className={styles.card__container__down}>
          <div className={styles.card__description}>
            Мы меняемся к лучшему для вас.
            <br />
            Рассказываем о новостях ноября
          </div>
          <div className={styles.card__desc__info}>
            <span className={styles.card__img}>
              <img
                src={DateNews}
                alt="DateNews"
                className={styles.card__desc}
              />
              <span>01 декабря 2023</span>
            </span>
            <span className={styles.card__img}>
              <img
                src={TimeNews}
                alt="TimeNews"
                className={styles.card__desc}
              />
              <span>1 мин</span>
            </span>
            <span className={styles.card__img}>
              <img src={EyeNews} alt="EyeNews" className={styles.card__desc} />
              <span>230</span>
            </span>
          </div>
        </div>
      </div>
      <div className={styles.card__container}>
        <div className={styles.card__title__container}>
          <div className={styles.dark__container}>
            <div className={styles.info__title}>Новости Юрайта</div>
            <div className={styles.title__text}>
              Последние дни скидок на
              <br />
              программы повышения
              <br />
              квалификации - успевайте
              <br />
              присоединиться!
            </div>
          </div>
        </div>
        <div className={styles.card__container__down}>
          <div className={styles.card__description}>
            До 1 декабря 2023 года действует
            <br />
            скидка 20 % на повышение
            <br />
            квалификации в рамках XIV Зимней
            <br />
            школы преподавателя «Личностно-
            <br />
            ориентированное цифровое...
          </div>
          <div className={styles.card__desc__info}>
            <span className={styles.card__img}>
              <img
                src={DateNews}
                alt="DateNews"
                className={styles.card__desc}
              />
              <span>29 ноября 2023</span>
            </span>
            <span className={styles.card__img}>
              <img
                src={TimeNews}
                alt="TimeNews"
                className={styles.card__desc}
              />
              <span>1 мин</span>
            </span>
            <span className={styles.card__img}>
              <img src={EyeNews} alt="EyeNews" className={styles.card__desc} />
              <span>567</span>
            </span>
          </div>
        </div>
      </div>
      <div className={styles.card__container}>
        <div className={styles.card__title__container}>
          <div className={styles.dark__container}>
            <div className={styles.info__title}>Новости Юрайта</div>
            <div className={styles.title__text}>
              Юрайт повышает цифровую
              <br />
              активность студентов и
              <br />
              преподавателей в Перми
            </div>
          </div>
        </div>
        <div className={styles.card__container__down}>
          <div className={styles.card__description}>
            Региональный методист-куратор
            <br />
            Образовательной платформы
            <br />
            «Юрайт» Наталья Бородинова
            <br />
            провела ряд встреч с учебными
            <br />
            заведениями региона и рассказал...
          </div>
          <div className={styles.card__desc__info}>
            <span className={styles.card__img}>
              <img
                src={DateNews}
                alt="DateNews"
                className={styles.card__desc}
              />
              <span>28 ноября 2023</span>
            </span>
            <span className={styles.card__img}>
              <img
                src={TimeNews}
                alt="TimeNews"
                className={styles.card__desc}
              />
              <span>2 мин</span>
            </span>
            <span className={styles.card__img}>
              <img src={EyeNews} alt="EyeNews" className={styles.card__desc} />
              <span>468</span>
            </span>
          </div>
        </div>
      </div>
      <div className={styles.card__container}>
        <div className={styles.card__title__container}>
          <div className={styles.dark__container}>
            <div className={styles.info__title}>Новости Юрайта</div>
            <div className={styles.title__text}>
              Отвечаем на 7 частых
              <br />
              вопросов про Тотальный
              <br />
              экзамен
            </div>
          </div>
        </div>
        <div className={styles.card__container__down}>
          <div className={styles.card__description}>
            Свыше 14 000 прохождений
            <br />
            Тотального экзамена за две недели
            <br />
            поставили 7 методических и<br />
            организационных вопросов.
            <br />
            Отвечает академический директор.
          </div>
          <div className={styles.card__desc__info}>
            <span className={styles.card__img}>
              <img
                src={DateNews}
                alt="DateNews"
                className={styles.card__desc}
              />
              <span>27 ноября 2023</span>
            </span>
            <span className={styles.card__img}>
              <img
                src={TimeNews}
                alt="TimeNews"
                className={styles.card__desc}
              />
              <span>1 мин</span>
            </span>
            <span className={styles.card__img}>
              <img src={EyeNews} alt="EyeNews" className={styles.card__desc} />
              <span>775</span>
            </span>
          </div>
        </div>
      </div>
      <div className={styles.card__container}>
        <div className={styles.card__title__container}>
          <div className={styles.dark__container}>
            <div className={styles.info__title}>Новости Юрайта</div>
            <div className={styles.title__text}>
              Успейте оформить подписку
              <br />
              до подорожания!
            </div>
          </div>
        </div>
        <div className={styles.card__container__down}>
          <div className={styles.card__description}></div>
          <div className={styles.card__desc__info}>
            <span className={styles.card__img}>
              <img
                src={DateNews}
                alt="DateNews"
                className={styles.card__desc}
              />
              <span>23 ноября 2023</span>
            </span>
            <span className={styles.card__img}>
              <img
                src={TimeNews}
                alt="TimeNews"
                className={styles.card__desc}
              />
              <span>1 мин</span>
            </span>
            <span className={styles.card__img}>
              <img src={EyeNews} alt="EyeNews" className={styles.card__desc} />
              <span>1065</span>
            </span>
          </div>
        </div>
      </div>
      <div className={styles.card__container}>
        <div className={styles.card__title__container}>
          <div className={styles.dark__container}>
            <div className={styles.info__title}>Новости Юрайта</div>
            <div className={styles.title__text}>
              Юрайт и Тюмень
              <br />
              объединяют усилия для
              <br />
              прогресса в цифровом
              <br />
              образовании
            </div>
          </div>
        </div>
        <div className={styles.card__container__down}>
          <div className={styles.card__description}>
            Ведущий куратор партнерских
            <br />
            программ Образовательной
            <br />
            платформы «Юрайт» Ольга
            <br />
            Подколодняя провела ряд встреч в<br />
            учебных заведениях региона и...
          </div>
          <div className={styles.card__desc__info}>
            <span className={styles.card__img}>
              <img
                src={DateNews}
                alt="DateNews"
                className={styles.card__desc}
              />
              <span>23 ноября 2023</span>
            </span>
            <span className={styles.card__img}>
              <img
                src={TimeNews}
                alt="TimeNews"
                className={styles.card__desc}
              />
              <span>1 мин</span>
            </span>
            <span className={styles.card__img}>
              <img src={EyeNews} alt="EyeNews" className={styles.card__desc} />
              <span>880</span>
            </span>
          </div>
        </div>
      </div>
      <div className={styles.card__container}>
        <div className={styles.card__title__container}>
          <div className={styles.dark__container}>
            <div className={styles.info__title}>Новости Юрайта</div>
            <div className={styles.title__text}>
              Юрайт развивает цифровое
              <br />
              образование вместе с
              <br />
              Волгоградской областью
            </div>
          </div>
        </div>
        <div className={styles.card__container__down}>
          <div className={styles.card__description}>
            Ведущий куратор партнерских
            <br />
            программ Образовательной
            <br />
            платформы «Юрайт» Марианна
            <br />
            Лапшова провела ряд встреч в
            <br />
            учебных заведениях региона и...
          </div>
          <div className={styles.card__desc__info}>
            <span className={styles.card__img}>
              <img
                src={DateNews}
                alt="DateNews"
                className={styles.card__desc}
              />
              <span>21 ноября 2023</span>
            </span>
            <span className={styles.card__img}>
              <img
                src={TimeNews}
                alt="TimeNews"
                className={styles.card__desc}
              />
              <span>1 мин</span>
            </span>
            <span className={styles.card__img}>
              <img src={EyeNews} alt="EyeNews" className={styles.card__desc} />
              <span>1069</span>
            </span>
          </div>
        </div>
      </div>
      <div className={styles.card__container}>
        <div className={styles.card__title__container}>
          <div className={styles.dark__container}>
            <div className={styles.info__title}>Новости Юрайта</div>
            <div className={styles.title__text}>
              С днем преподавателя
              <br />
              высшей школы! 19
              <br />
              Ноября
            </div>
          </div>
        </div>
        <div className={styles.card__container__down}>
          <div className={styles.card__description}>
            Поздравляем всех-всех-всех
            <br />
            причастных к преподавательскому
            <br />
            труду! Желаем талантливых
            <br />
            учеников, прекрасных отношений с
            <br />
            коллегами и новых открытий!...
          </div>
          <div className={styles.card__desc__info}>
            <span className={styles.card__img}>
              <img
                src={DateNews}
                alt="DateNews"
                className={styles.card__desc}
              />
              <span>19 ноября 2023</span>
            </span>
            <span className={styles.card__img}>
              <img
                src={TimeNews}
                alt="TimeNews"
                className={styles.card__desc}
              />
              <span>1 мин</span>
            </span>
            <span className={styles.card__img}>
              <img src={EyeNews} alt="EyeNews" className={styles.card__desc} />
              <span>1238</span>
            </span>
          </div>
        </div>
      </div>
      <div className={styles.card__container}>
        <div className={styles.card__title__container}>
          <div className={styles.dark__container}>
            <div className={styles.info__title}>Новости Юрайта</div>
            <div className={styles.title__text}>
              Результат приложенных
              <br />
              усилий – вовлеченность
              <br />
              студентов. Эксперты о
              <br />
              подготовки интерактивного
              <br />
              занятия
            </div>
          </div>
        </div>
        <div className={styles.card__container__down}>
          <div className={styles.card__description}>
            25 октября в Юрайт.Академии
            <br />
            состоялась III Всероссийская
            <br />
            конференция «Методика
            <br />
            подготовки интерактивного
            <br />
            занятия». В ходе дискуссии...
          </div>
          <div className={styles.card__desc__info}>
            <span className={styles.card__img}>
              <img
                src={DateNews}
                alt="DateNews"
                className={styles.card__desc}
              />
              <span>17 ноября 2023</span>
            </span>
            <span className={styles.card__img}>
              <img
                src={TimeNews}
                alt="TimeNews"
                className={styles.card__desc}
              />
              <span>4 мин</span>
            </span>
            <span className={styles.card__img}>
              <img src={EyeNews} alt="EyeNews" className={styles.card__desc} />
              <span>1413</span>
            </span>
          </div>
        </div>
      </div>
    </div>
  );
};
