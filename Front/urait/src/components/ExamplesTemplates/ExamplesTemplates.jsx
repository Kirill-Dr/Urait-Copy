import React, { useEffect, useState } from "react";
import styles from "./ExamplesTemplates.module.css";
import axios from "axios";
import { Link } from "react-router-dom";

export const ExamplesTemplates = () => {
  const [directions, setDirections] = useState({});
  const [selectedProfession, setSelectedProfession] = useState("");
  const [selectedDirection, setSelectedDirection] = useState("");
  const [selectedDegree, setSelectedDegree] = useState("");

  const downloadFile = async () => {
    try {
      const response = await axios.post(
        "http://127.0.0.1:8001/download-doc",
        null,
        {
          params: {
            new_speciality: selectedProfession,
            new_napr: selectedDirection,
            new_level: selectedDegree,
          },
          responseType: "blob",
        }
      );

      const url = window.URL.createObjectURL(new Blob([response.data]));
      const link = document.createElement("a");
      link.href = url;
      link.setAttribute("download", "finish.docx");
      document.body.appendChild(link);
      link.click();
      window.URL.revokeObjectURL(url);
    } catch (error) {
      console.error("Error downloading file:", error);
    }
  };

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios("http://localhost:8000/directions");
        setDirections(response.data[0]);
      } catch (error) {
        console.error("Ошибка при получении данных:", error);
      }
    };

    fetchData();
  }, []);

  const handleProfessionChange = (e) => {
    setSelectedProfession(e.target.value);
    setSelectedDirection("");
    setSelectedDegree("");
  };

  const handleDirectionChange = (e) => {
    setSelectedDirection(e.target.value);
    setSelectedDegree("");
  };

  const handleDegreeChange = (e) => {
    setSelectedDegree(e.target.value);
  };

  return (
    <div className={styles.main__container}>
      <div className={styles.examples__title}>Примеры шаблонов РПД</div>
      <div className={styles.examples__container}>
        <div className={styles.examples__container__item}>Пример 1</div>
        <div className={styles.examples__container__item2}>Пример 2</div>
      </div>
      <div className={styles.examples__form__container}>
        <div className={styles.select__main__container}>
          <div className={styles.select__title}>УГС</div>
          <div>
            <select
              onChange={handleProfessionChange}
              value={selectedProfession}
              className={styles.select__block}
            >
              <option value="">Выберите группу специальностей</option>
              {Object.keys(directions).map((keys) => (
                <option key={keys} value={keys}>
                  {directions[keys].profession}
                </option>
              ))}
            </select>
          </div>
        </div>
        <div className={styles.select__main__container}>
          <div className={styles.select__title}>Направление подготовки</div>
          <div>
            <select
              onChange={handleDirectionChange}
              value={selectedDirection}
              className={styles.select__block}
            >
              <option value="">Выберите направление подготовки</option>
              {selectedProfession &&
                Object.keys(
                  directions[selectedProfession]?.directions || {}
                ).map((key) => (
                  <option
                    key={key}
                    value={directions[selectedProfession]?.directions[key]}
                  >
                    {directions[selectedProfession]?.directions[key]}
                  </option>
                ))}
            </select>
          </div>
        </div>
        <div className={styles.select__main__container}>
          <div className={styles.select__title}>Уровень подготовки</div>
          <div>
            <select
              onChange={handleDegreeChange}
              value={selectedDegree}
              className={styles.select__block}
            >
              <option value="">Выберите уровень подготовки</option>
              {selectedDirection &&
                Object.keys(directions[selectedProfession]?.degree || {}).map(
                  (key) => (
                    <option
                      key={key}
                      value={directions[selectedProfession]?.degree[key]}
                    >
                      {directions[selectedProfession]?.degree[key]}
                    </option>
                  )
                )}
            </select>
          </div>
        </div>
        {selectedDegree !== "" ? (
          <Link className={styles.select__button} onClick={downloadFile}>
            Скачать шаблон РПД
          </Link>
        ) : (
          <Link className={styles.select__button}>Скачать шаблон РПД</Link>
        )}
      </div>
    </div>
  );
};
