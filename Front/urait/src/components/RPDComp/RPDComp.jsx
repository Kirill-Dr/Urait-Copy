import React from "react";
import styles from "./RPDComp.module.css";

export const RPDComp = () => {
  return (
    <div className={styles.main__container}>
      <input
        type="text"
        placeholder="Найдите учебник, чтобы сформировать РПД"
        className={styles.input__element}
      />
      <button className={styles.button__element}>Поиск</button>
    </div>
  );
};
