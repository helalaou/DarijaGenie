import React from "react";
import styles from "./styles.module.css";

const LanguageSelector = ({ onLanguageChange }) => {
  const handleChange = (event) => {
    onLanguageChange(event.target.value);
  };

  return (
    <div className={styles.container}>
      <img className={styles.globeIcon} src="globe_icon.png" alt="globe" />
      <select className={styles.languageSelect} onChange={handleChange}>
        <option value="English">English</option>
        <option value="Darija">Darija</option>
        <option value="Arabic">Arabic</option>
        <option value="French">Français</option>
      
      </select>
    </div>
  );
};

export default LanguageSelector;
