import React from "react";
import styles from "./DateElement.module.css";
import DateImg from "../../images/dateimg.svg";

export const DateElement = () => {
  return (
    <div className={styles.date__container}>
      <div className={styles.date__element} contentEditable="true">
        <span>За все время</span> <img src={DateImg} alt="DateImg" />
      </div>
    </div>
  );
};
