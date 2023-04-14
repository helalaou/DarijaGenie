import React from "react";
import styles from "./styles.module.css";
import { getButtonTexts } from "../LanguageSelector";


const ExplanationPage = ({ onNext, onPrevious, language }) => {
  const buttonTexts = getButtonTexts(language);

  return (
    <div className={styles.container}>
      <div className="title"> 
       This page will contain information about the pedagogical approach of the app - in other words - how to play, the available scenarios, etc.
      </div>
       
      <div className={styles.buttonContainerExplanationPage} >
        <button className="button" onClick={onPrevious}>{buttonTexts.previous}</button>
        <button className="button" onClick={onNext}>{buttonTexts.next}</button>

      </div>

    </div>
  );
};

export default ExplanationPage;
