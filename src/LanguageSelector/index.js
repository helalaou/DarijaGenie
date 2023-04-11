 
import "font-awesome/css/font-awesome.min.css";
import React from "react";
import styles from "./styles.module.css";

const LanguageSelector = ({ onLanguageChange }) => {
  const handleChange = (event) => {
    onLanguageChange(event.target.value);
  };

  return (
    <div className={styles.container}>
      <i className={`fa fa-language ${styles.globeIcon}`}></i>
      <select className={styles.languageSelect} onChange={handleChange}>
        <option value="Darija_ar">الدارجة</option>
        <option value="Darija_roman">Darija</option>
        <option value="English">English</option>
        <option value= "French">Français</option>


      </select>
    </div>
  );
};

export default LanguageSelector;

