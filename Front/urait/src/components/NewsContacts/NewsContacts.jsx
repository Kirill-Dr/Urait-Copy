import React from "react";
import styles from "./NewsContacts.module.css";

export const NewsContacts = () => {
  return (
    <div className={styles.newsContacts__main__container}>
      <div className={styles.newsContacts__container}>
        <span className={styles.newsContacts__title}>Контакты редакции</span>
        <span className={styles.newsContacts__email}>pr@urait.ru</span>
        <span className={styles.newsContacts__phone}>Телефон</span>
        <span className={styles.newsContacts__number}>+7 (495) 744-00-12</span>
        <span className={styles.newsContacts__root}>
          ООО «Электронное издательство Юрайт»,
          <br />
          <span className={styles.root__link}>
            Свидетельство о регистрации СМИ.
          </span>
        </span>
      </div>
    </div>
  );
};
