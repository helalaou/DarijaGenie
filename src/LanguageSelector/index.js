import React from "react";
import styles from "./styles.module.css";

const LanguageSelector = ({ onLanguageChange }) => {
  const handleChange = (event) => {
    onLanguageChange(event.target.value);
  };

  return (
    <div className={styles.container}>
      <img className="globeIcon" src= "https://img.icons8.com/ios/50/000000/globe.png" alt="globe" />
      <select className={styles.languageSelect} onChange={handleChange}>
        <option value="Darija_ar">الدارجة</option>
        <option value="Darija_roman">Darija</option>
        <option value="English">English</option>
      </select>
    </div>
  );
};

export default LanguageSelector;
