import React from "react";
import styles from "./styles.module.css";

const ExplanationPage = ({ onNext, onPrevious }) => {
  return (
    <div className={styles.container}>
      <div className={styles.logo}>DarijaGenie</div>
      <div className={styles.info}>
        {/* Add your text and table (image) here */}
      </div>

       <div className={styles.buttonContainerExplanationPage} >
      <button className="button" onClick={onPrevious}>Previous</button>
        <button className="button" onClick={onNext}>Next</button>
      </div>

    </div>
  );
};

export default ExplanationPage;
