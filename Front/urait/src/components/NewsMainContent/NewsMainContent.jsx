import React from "react";
import styles from "./NewsMainContent.module.css";
import { NewsCategories } from "../NewsCategories/NewsCategories";
import { DateElement } from "../DateElement/DateElement";
import { PopularAuthors } from "../PopularAuthors/PopularAuthors";
import { NewsCards } from "../NewsCards/NewsCards";
import { NewsSearch } from "../NewsSearch/NewsSearch";

export const NewsMainContent = () => {
  return (
    <div className={styles.newsMainContent__main__container}>
      <div className={styles.newsMainContent__container}>
        <div className={styles.newsMainContent__left__container}>
          <NewsCategories />
          <DateElement />
          <PopularAuthors />
        </div>
        <div className={styles.newsMainContent__right__container}>
          <div>
            <NewsSearch />
          </div>
          <div>
            <NewsCards />
          </div>
        </div>
      </div>
    </div>
  );
};
