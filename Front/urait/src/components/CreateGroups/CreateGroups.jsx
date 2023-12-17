import React from "react";
import styles from "./CreateGroups.module.css";

export const CreateGroups = () => {
  return (
    <div className={styles.createGroups__main__container}>
      <div className={styles.createGroups__title__container}>
        <span>Какие группы вы можете создавать?</span>
      </div>
      <div className={styles.createGroups__card__container}>
        <div className={styles.createGroups__card__item}>
          <div className={styles.createGroups__card__title}>
            <span>Личная группа</span>
          </div>
          <div className={styles.createGroups__card__info}>
            <p>
              Для репетиторов и преподавателей, у которых нет подписка на
              платформу
              <br />в рамках учебного заведения
            </p>
          </div>
          <div className={styles.createGroups__card__description}>
            <p>
              Для личной группы вы можете оформить{" "}
              <span className={styles.createGroups__card__link}>
                Групповую аренду электронных
                <br />
                курсов и учебников
              </span>{" "}
              и полгода обучать студентов по курсам и учебникам
              <br />
              платформы
            </p>
          </div>
        </div>
        <div className={styles.createGroups__card__item}>
          <div className={styles.createGroups__card__title}>
            <span>Группа в рамках учебного заведения</span>
          </div>
          <div className={styles.createGroups__card__info}>
            <p>
              Создавайте группу в рамках учебного заведения, которое оформило
              <br />
              подписку на платформу
            </p>
          </div>
          <div className={styles.createGroups__card__description}>
            <p>
              Чтобы пользоваться курсами и сервисами в рамках подписки учебного
              <br />
              заведения, нужно подтвердить вашу роль в учебнои заведению.
              <br />
              Проверить подписку учебного заведения можно{" "}
              <span className={styles.createGroups__card__link}>здесь</span>.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};
