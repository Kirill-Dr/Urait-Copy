import React from "react";
import styles from "./Events.module.css";
import Card1 from "../../images/card1.png";
import Card2 from "../../images/card2.png";
import Card3 from "../../images/card3.png";

export const Events = () => {
  return (
    <div className={styles.card__container}>
      <div className={styles.card__container_up}>
        <img src={Card1} alt="Card1" className={styles.card__items} />
        <img src={Card2} alt="Card2" className={styles.card__items} />
        <img src={Card3} alt="Card3" className={styles.card__items} />
      </div>
      <div className={styles.card__container_down}>
        <span>Не является рекламой</span>
      </div>
    </div>
  );
};
