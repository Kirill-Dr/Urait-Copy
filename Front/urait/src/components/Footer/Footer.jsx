import React from "react";
import styles from "./Footer.module.css";
import Logo from "../../images/logo.svg";
import VKLogo from "../../images/vk-logo.svg";
import YoutubeLogo from "../../images/youtube-logo.svg";
import TelegramLogo from "../../images/telegram-logo.svg";
import GPS from "../../images/gps.svg";
import Mail from "../../images/mail.svg";
import Phone from "../../images/phone.svg";
import Arrow from "../../images/arrow.svg";
import GooglePlay from "../../images/google-play.svg";
import AppStore from "../../images/app-store.svg";
import RuStore from "../../images/ru-store.svg";

export const Footer = () => {
  return (
    <footer className={styles.footer__container}>
      <div className={styles.main__container}>
        <div className={styles.up__container}>
          <div>
            <img src={Logo} alt="Logo" height="40px" />
            <p className={styles.info__text}>
              Образовательная платформа для
              <br />
              университетов и колледжей. Предлагаем
              <br />
              цифровой учебный контент и сервисы
              <br />
              для эффективного образования.
            </p>
            <div className={styles.images__container}>
              <img src={VKLogo} alt="VK-logo" className={styles.info__images} />
              <img
                src={YoutubeLogo}
                alt="Youtube-logo"
                className={styles.info__images}
              />
              <img
                src={TelegramLogo}
                alt="Telegram-logo"
                className={styles.info__images}
              />
            </div>
          </div>
          <div className={styles.links__container}>
            <span className={styles.link__text}>Ссылки</span>
            <span className={styles.link__href}>О компании</span>
            <span className={styles.link__href}>О продукте</span>
            <span className={styles.link__href}>Документы</span>
            <span className={styles.link__href}>Помощь</span>
          </div>
          <div className={styles.contact__container}>
            <span className={styles.contact__text}>Контакты</span>
            <span className={styles.contact__href}>
              <img src={GPS} alt="GPS" className={styles.contact__images} />
              <span>111123, г.Москва, ул. Плеханова, 4а</span>
            </span>
            <span className={styles.contact__href}>
              <img src={Mail} alt="Mail" className={styles.contact__images} />
              <span>help@urait.ru</span>
            </span>
            <span className={styles.contact__href}>
              <img src={Phone} alt="Phone" className={styles.contact__images} />
              <span>+7 (495) 744 00 12</span>
            </span>
            <span className={styles.contact__href}>
              <span>Все контакты</span>
              <img src={Arrow} alt="Arrow" className={styles.contact__arrow} />
            </span>
          </div>
          <div className={styles.app__container}>
            <span className={styles.app__text}>Приложения</span>
            <img
              src={GooglePlay}
              alt="GooglePlay"
              className={styles.app__images}
            />
            <img src={AppStore} alt="AppStore" className={styles.app__images} />
            <img src={RuStore} alt="RuStore" className={styles.app__images} />
          </div>
        </div>
        <div className={styles.hor__line}></div>
        <div className={styles.down__container}>
          <span>
            ООО «Электронное издательство Юрайт»
            <br />
            Свидетельство о регистрации СМИ 2020
          </span>
          <span>Ваш IP-адрес: 94.143.197.128</span>
        </div>
      </div>
    </footer>
  );
};
