import React from "react";
import styles from "./styles.module.css";

const IntroPage = ({ onNext }) => {
  return (
    <div className={styles.container}>
      <div className={styles.logo}>DarijaGenie</div>
      <h1 className={styles.title}>Hi, my name is Jack, I'm a chatbot that can help you learn in a fun way</h1>
      <button className={styles.nextButton} onClick={onNext}>Next</button>
    </div>
  );
};

export default IntroPage;
