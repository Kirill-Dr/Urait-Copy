import React from "react";
import styles from "./QuestionsStudents.module.css";

export const QuestionsStudents = () => {
  return (
    <div className={styles.questionsStudents__up__container}>
      <div className={styles.questionsStudents__main__container}>
        <div className={styles.questionsStudents__container}>
          <div className={styles.questionsStudents__title__container}>
            <span>Остались вопросы по созданию групп?</span>
          </div>
          <div className={styles.questionsStudents__help__container}>
            <span>Клиентская поддержка</span>
          </div>
          <div className={styles.questionsStudents__mail__container}>
            <span>help@urait.ru</span>
          </div>
          <div className={styles.questionsStudents__number__container}>
            <span>+7 (495) 744-00-12, доб. 123</span>
          </div>
        </div>
      </div>
    </div>
  );
};
