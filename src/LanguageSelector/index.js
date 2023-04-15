// LanguageSelector.js
import "font-awesome/css/font-awesome.min.css";
import React from "react";
import styles from "./styles.module.css";
import typeSound from "../typeSound.wav";

const LanguageSelector = ({ onLanguageChange, language }) => {
  const handleChange = (event) => {
    const audio = new Audio(typeSound);
    audio.play();
    onLanguageChange(event.target.value);
  };

  return (
    <div className={styles.container}>
      <i className={`fa fa-language ${styles.globeIcon}`}></i>
      <select className={styles.languageSelect} onChange={handleChange} value={language}>
        <option value="Darija_ar">الدارجة</option>
        <option value="Darija_roman">Darija</option>
        <option value="English">English</option>
        <option value="French">Français</option>
      </select>
    </div>
  );
};

const getButtonTexts = (language) => {
  const buttonTexts = {
    Darija_ar: { next: "زيد", previous: "رجع" },
    Darija_roman: { next: "Zid", previous: "Rja3" },
    English: { next: "Next", previous: "Previous" },
    French: { next: "Suivant", previous: "Précédent" },
  };

  return buttonTexts[language];
};

export { getButtonTexts };

export default LanguageSelector;
