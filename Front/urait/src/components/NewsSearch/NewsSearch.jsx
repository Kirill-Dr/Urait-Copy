import React from "react";
import styles from "./NewsSearch.module.css";
import ArrowDown from "../../images/arrow-down.svg";
import SearchIcon from "../../images/search-icon.svg";

export const NewsSearch = () => {
  return (
    <div className={styles.search__container}>
      <div className={styles.sort__container}>
        Сортировать:
        <span className={styles.sort__right__container}>
          По дате
          <img src={ArrowDown} alt="ArrowDown" />
        </span>
      </div>
      <div className={styles.input__container}>
        <input
          type="text"
          placeholder="Поиск по названию"
          className={styles.input__element}
        />
        <div className={styles.search__img__container}>
          <img src={SearchIcon} alt="SearchIcon" />
        </div>
      </div>
    </div>
  );
};
