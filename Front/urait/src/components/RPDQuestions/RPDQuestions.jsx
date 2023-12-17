import React from "react";
import styles from "./RPDQuestions.module.css";

export const RPDQuestions = () => {
  return (
    <div className={styles.questionsCourse__up__container}>
      <div className={styles.questionsCourse__main__container}>
        <div className={styles.questionsCourse__container}>
          <div className={styles.questionsCourse__title__container}>
            <span>Остались вопросы?</span>
          </div>
          <div className={styles.questionsCourse__help__container}>
            <span>Клиентская поддержка</span>
          </div>
          <div className={styles.questionsCourse__mail__container}>
            <span>help@urait.ru</span>
          </div>
          <div className={styles.questionsCourse__number__container}>
            <span>+7 (495) 744-00-12, доб. 123</span>
          </div>
        </div>
      </div>
    </div>
  );
};
