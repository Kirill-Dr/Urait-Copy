import React from "react";
import styles from "./RegStart.module.css";

export const RegStart = () => {
  return (
    <div className={styles.regStart__container}>
      <div className={styles.regStart__main__container}>
        <span className={styles.regStart__text}>
          Еще не с нами? Начните сейчас!
        </span>
        <button className={styles.regStart__button}>Зарегистрироваться</button>
      </div>
    </div>
  );
};
