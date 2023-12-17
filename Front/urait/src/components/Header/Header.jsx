import React, { useState } from "react";
import styles from "./Header.module.css";
import Logo from "../../images/logo.svg";
import ActiveUsers from "../../images/active-users-plus.svg";
import Glasses from "../../images/glasses.svg";
import Cart from "../../images/cart.svg";
import Person from "../../images/person.svg";
import { Link } from "react-router-dom";
import { Modal } from "../Modal/Modal";

export const Header = () => {
  const [isOpened, setIsOpened] = useState(false);

  const currentDate = new Date();
  const months = [
    "января",
    "февраля",
    "марта",
    "апреля",
    "мая",
    "июня",
    "июля",
    "августа",
    "сентября",
    "октября",
    "ноября",
    "декабря",
  ];

  const monthIndex = currentDate.getMonth();
  const monthName = months[monthIndex];
  const day = currentDate.getDate();
  const year = currentDate.getFullYear();

  return (
    <header className={styles.header__container}>
      <div className={styles.main__container}>
        <div className={styles.up__container}>
          <div className={styles.left__container}>
            <Link to="/" onClick={() => setIsOpened(false)}>
              <img src={Logo} alt="logo" height="40px" />
            </Link>
            <div className={styles.ver__line}></div>
            <div className={styles.activity__container}>
              <span
                className={styles.up__text}
              >{`${day} ${monthName} ${year}`}</span>
              <span className={styles.down__text}>
                <span className={styles.underline__text}>активны</span> на
                платформе
              </span>
            </div>
            <div className={styles.users__container}>
              <img
                src={ActiveUsers}
                alt="Active Users"
                className={styles.active__users}
              />
              <div>
                <div className={styles.plus__container}>
                  54 528<span className={styles.plus__number}>+4</span>
                </div>
                <div className={styles.teacher__text}>Преподавателей</div>
              </div>
            </div>
            <div className={styles.users__container}>
              <img
                src={ActiveUsers}
                alt="Active Users"
                className={styles.active__users}
              />
              <div>
                <div className={styles.plus__container}>
                  570 007<span className={styles.plus__number}>+324</span>
                </div>
                <div className={styles.teacher__text}>Студентов</div>
              </div>
            </div>
          </div>
          <div className={styles.right__container}>
            <div className={styles.version__container}>
              <img src={Glasses} alt="Glasses" height="20px" />
              <span className={styles.version__changer}>
                Версия для слабовидящих
              </span>
            </div>
            <div className={styles.reg__container}>
              <img
                src={Cart}
                alt="Cart"
                height="25px"
                style={{ cursor: "pointer" }}
              />
              <img src={Person} alt="Person" height="30px" />
              <span className={styles.reg__text}>
                Вход <span className={styles.stick}>/</span> Регистрация
              </span>
            </div>
          </div>
        </div>
        <div className={styles.hor__line}></div>
        <div className={styles.down__container}>
          <button className={styles.down__buttons}>
            {isOpened ? (
              <Link
                className={styles.link__style}
                onClick={() => setIsOpened(!isOpened)}
                style={{
                  textDecoration: "underline",
                  textDecorationThickness: "3px",
                  textDecorationColor: "#f08b01",
                  textUnderlineOffset: "5px",
                }}
              >
                Преподавателям
              </Link>
            ) : (
              <Link
                className={styles.link__style}
                onClick={() => setIsOpened(!isOpened)}
              >
                Преподавателям
              </Link>
            )}
          </button>
          <button className={styles.down__buttons}>
            <Link
              to="/news"
              className={styles.link__style}
              onClick={() => setIsOpened(false)}
            >
              Новости
            </Link>
          </button>
          <button className={styles.down__buttons}>
            <Link
              to="/help"
              className={styles.link__style}
              onClick={() => setIsOpened(false)}
            >
              Помощь
            </Link>
          </button>
        </div>
      </div>
      {isOpened ? (
        <Modal isOpened={isOpened} setIsOpened={setIsOpened} />
      ) : (
        <></>
      )}
    </header>
  );
};
