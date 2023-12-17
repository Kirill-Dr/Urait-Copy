import React from "react";
import styles from "./WorkWithTemplate.module.css";

export const WorkWithTemplate = () => {
  return (
    <div className={styles.main__container}>
      <div className={styles.work__title}>Работать с шаблоном РПД просто</div>
      <div>
        <div style={{ marginBottom: "60px" }}>
          <span className={styles.info__title}>От вас требуется:</span>
          <ul style={{ paddingTop: "20px" }}>
            <div className={styles.info__list__item}>
              <li>Оформить титульную страницу</li>
            </div>
            <div className={styles.info__list__item}>
              <li>Указать частные моменты</li>
            </div>
            <div className={styles.info__list__item}>
              <li>Добавить жемчужины собственного преподавательского опыта</li>
            </div>
            <div className={styles.info__list__item}>
              <li>Поставить подпись</li>
            </div>
          </ul>
        </div>
        <div>
          <span className={styles.info__title}>Что уже сделано за вас:</span>
          <ul style={{ paddingTop: "20px" }}>
            <div className={styles.info__list__item}>
              <li>
                Подобран тематический план дисциплины с распределением часов на
                семинарские и практические занятия
              </li>
            </div>
            <div className={styles.info__list__item}>
              <li>
                Создано подробное описание тем со ссылками на разделы базового
                учебника
              </li>
            </div>
            <div className={styles.info__list__item}>
              <li>Составлен список дополнительной литературы</li>
            </div>
            <div className={styles.info__list__item}>
              <li>
                Даны формы контроля по освоению дисциплиныДаны формы контроля по
                освоению дисциплины
              </li>
            </div>
          </ul>
        </div>
      </div>
    </div>
  );
};
