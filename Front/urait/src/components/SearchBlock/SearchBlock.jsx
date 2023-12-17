import React, { useState } from "react";
import styles from "./SearchBlock.module.css";
import SearchInfo from "../../images/search-info.svg";
import ArrowUp from "../../images/arrow-up.svg";
import ArrowDown from "../../images/arrow-down.svg";

export const SearchBlock = () => {
  const [handleText, setHandleText] = useState(false);
  const [isOpened, setIsOpened] = useState(false);
  const [handleToggle, setHandleToggle] = useState(false);
  const [handleToggle2, setHandleToggle2] = useState(false);

  return (
    <div className={styles.searchBlock__container}>
      <div className={styles.searchBlock__main__container}>
        <div>
          <span className={styles.searchBlock__text}>
            5 371 курс и 10 687 учебников
            <br />
            по 78 708 дисциплинам
          </span>
        </div>
        <div className={styles.searchBlock__info__container}>
          <div className={styles.searchBlock__info__main__container}>
            <span className={styles.searchBlock__info__text}>
              расширенный поиск{" "}
              <img
                src={SearchInfo}
                alt="SearchInfo"
                style={{ marginLeft: "5px" }}
              />
            </span>
            <span style={{ color: "white", paddingBottom: "8px" }}>.</span>
            <span className={styles.searchBlock__info__text}>
              поиск по дисциплинам{" "}
              <img
                src={SearchInfo}
                alt="SearchInfo"
                style={{ marginLeft: "5px" }}
              />
            </span>
          </div>
        </div>
        <div className={styles.searchBlock__input__container}>
          <div>
            {handleText ? (
              <div>
                <button
                  className={styles.searchBlock__input__button}
                  onClick={() => setIsOpened(!isOpened)}
                >
                  Курсы{" "}
                  {isOpened ? (
                    <>
                      <img src={ArrowUp} alt="ArrowUp" />
                      <div className={styles.searchBlock__dropdown__menu}>
                        <button
                          className={styles.dropdown__button_up}
                          onClick={() => setHandleText(true)}
                        >
                          Курсы
                        </button>
                        <button
                          className={styles.dropdown__button_down}
                          onClick={() => setHandleText(false)}
                        >
                          Книги
                        </button>
                      </div>
                    </>
                  ) : (
                    <img src={ArrowDown} alt="ArrowDown" />
                  )}
                </button>
              </div>
            ) : (
              <div>
                <button
                  className={styles.searchBlock__input__button}
                  onClick={() => setIsOpened(!isOpened)}
                >
                  Книги{" "}
                  {isOpened ? (
                    <>
                      <img src={ArrowUp} alt="ArrowUp" />
                      <div className={styles.searchBlock__dropdown__menu}>
                        <button
                          className={styles.dropdown__button_up}
                          onClick={() => setHandleText(true)}
                        >
                          Курсы
                        </button>
                        <button
                          className={styles.dropdown__button_down}
                          onClick={() => setHandleText(false)}
                        >
                          Книги
                        </button>
                      </div>
                    </>
                  ) : (
                    <img src={ArrowDown} alt="ArrowDown" />
                  )}
                </button>
              </div>
            )}
          </div>
          <div className={styles.searchBlock__input__line}></div>
          <input
            type="text"
            placeholder="Введите название или имя автора"
            className={styles.searchBlock__input__block}
          />
          <button className={styles.searchBlock__button}>Искать</button>
        </div>
        <div className={styles.toggle__container}>
          <div className={styles.searchBlock__handle__container}>
            <div
              className={
                handleToggle
                  ? `${styles.searchBlock__handle__block2} ${styles.smoothTransition}`
                  : `${styles.searchBlock__handle__block} ${styles.smoothTransition}`
              }
              onClick={() => setHandleToggle(!handleToggle)}
            >
              <div
                className={
                  handleToggle
                    ? `${styles.searchBlock__handle__dot2} ${styles.smoothTransition}`
                    : `${styles.searchBlock__handle__dot} ${styles.smoothTransition}`
                }
              ></div>
            </div>
            <span className={styles.searchBlock__handle__text}>
              искать в тексте
            </span>
          </div>
          {handleText ? (
            <></>
          ) : (
            <div className={styles.searchBlock__handle__container2}>
              <div
                className={
                  handleToggle2
                    ? `${styles.searchBlock__handle__block2} ${styles.smoothTransition}`
                    : `${styles.searchBlock__handle__block} ${styles.smoothTransition}`
                }
                onClick={() => setHandleToggle2(!handleToggle2)}
              >
                <div
                  className={
                    handleToggle2
                      ? `${styles.searchBlock__handle__dot2} ${styles.smoothTransition}`
                      : `${styles.searchBlock__handle__dot} ${styles.smoothTransition}`
                  }
                ></div>
              </div>
              <span className={styles.searchBlock__handle__text}>
                с медиаматериалами
              </span>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};
