import { getButtonTexts } from "../LanguageSelector";
import styles from "./styles.module.css";
import React, { useState, useEffect } from "react";


const IntroPage = ({ onNext, language }) => {
  const [isFirstLoad, setIsFirstLoad] = useState(true);
  const buttonTexts = getButtonTexts(language);


  useEffect(() => {
    if (isFirstLoad) {
      setTimeout(() => {
        setIsFirstLoad(false);
      }, 1000); // Duration of the genieAppearing animation
    }
  }, [isFirstLoad]);


  const getGreeting = () => {
    if (language === "Darija_ar") {
      return "Salam سلام";

    } else if (language === "Darija_roman") {
      return "Salam";

    } else if (language === "English") {
      return "Hello";

    } else if (language === "French") {
      return "Bonjour";
    }
  };

  const getTitle = () => {
    if (language === "Darija_ar") {
      return "أنا هنا لتعليم الدارجة بطريقة سهلة وممتعة";

    } else if (language === "Darija_roman") {
      return "Ana hna bach n3almek darija b tariqa sahla wa momti3a";

    } else if (language === "English") {
      return "I am here to teach you Darija in a simple and fun way";

    } else if (language === "French") {
      return "Je suis ici pour vous apprendre le Darija d'une manière simple et amusante";
    }
  };

  const getSubtitle = () => {
    if (language === "Darija_ar") {
      return "أنا سأساعدك على تعلم الدارجة بطريقة سهلة وممتعة";
    } else if (language === "Darija_roman") {

      return "Ana sa3di bik n3almek darija b tariqa sahla wa momti3a";

    } else if (language === "English") {
      return "Ready to learn Moroccan Dialect in a fun and easy way? Let's get started! ";

    } else if (language === "French") {
      return "Je vais vous aider à apprendre le Darija d'une manière simple et amusante";
    }
  };


  const greeting = getGreeting();
  const title = getTitle();
  const subtitle = getSubtitle();

  return (
    <div className={`${styles.container} ${styles.backgroundHeader}`}>
      <img
        className={`${styles.logo} ${!isFirstLoad ? styles.logoFloating : styles.logoAppearing}`}
        src="Logo.png"
        alt="DarijaGenie Logo"
      />

      <img
        className={`${styles.teapot} `} src="teapot.png"
        alt="Teapot"
      />

      <img
        className={` ${styles.shadow}`} src="shadow.png"
        alt="Shadow"
      />

      <div className={styles.textContainer}>
      <h1 className={styles.greetingBubble}>{greeting}</h1>

        <h1 className={styles.title} style={{ color: "#c92933", fontSize: "2.5rem" }}>{title}</h1>
        <h1 className={styles.subtitle} style={{ color: "#882331", fontSize: "1.5rem" }}>{subtitle}</h1>

        <div className={styles.buttonContainerIntroPage}>
          <button className="button" onClick={onNext}>
            {buttonTexts.next}
          </button>
        </div>
      </div>
    </div>
  );
};

export default IntroPage;
