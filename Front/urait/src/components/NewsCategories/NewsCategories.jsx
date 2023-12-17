import React from "react";
import styles from "./NewsCategories.module.css";

export const NewsCategories = () => {
  return (
    <div>
      <div
        className={styles.newsCategories__item__container}
        style={{ color: "#f08b01", position: "relative" }}
      >
        <div className={styles.line}></div>
        <span>Все категории</span>
      </div>
      <div className={styles.newsCategories__item__container}>
        <span>Новости Юрайта</span>
      </div>
      <div className={styles.newsCategories__item__container}>
        <span>Цифровая педагогика</span>
      </div>
      <div className={styles.newsCategories__item__container}>
        <span>Поздравления</span>
      </div>
      <div className={styles.newsCategories__item__container}>
        <span>Видео</span>
      </div>
      <div className={styles.newsCategories__item__container}>
        <span>Университеты</span>
      </div>
      <div className={styles.newsCategories__item__container}>
        <span>Колледжи</span>
      </div>
      <div className={styles.newsCategories__item__container}>
        <span>EdTech</span>
      </div>
      <div className={styles.newsCategories__item__container}>
        <span>Обзоры</span>
      </div>
      <div className={styles.newsCategories__item__container}>
        <span>Интервью</span>
      </div>
      <div
        className={styles.newsCategories__item__container}
        style={{ borderBottom: "none" }}
      >
        <span>Колонки экспертов</span>
      </div>
    </div>
  );
};
