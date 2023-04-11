import React from "react";
import { getButtonTexts } from "../LanguageSelector";
import styles from "./styles.module.css";

const IntroPage = ({ onNext, language }) => {
  const buttonTexts = getButtonTexts(language);


  const getText = () => {
    
    if (language === "Darija_ar") {
      return {
        title: "سلام, أنا منير, جني الدارجة",
        subtitle: "أنا هنا باش نعلمك الدارجة بطريقة ساهلة وممتعة",
      };
    }

    else if (language === "Darija_roman") {
      return {
        title: "Salam, ana Mounir, Gini Darija",
        subtitle: "Ana hna bach n3almek darija b tariqa sahla wa momti3a",
      };
    }

    else if (language === "English") {
      return {
        title: "Hello, I am Mounir, the Darija Genie",
        subtitle: "I am here to teach you Darija in a simple and fun way",
      };
    }
    else if (language === "French") {
      return {
        title: "Bonjour, je suis Mounir, le génie Darija",
        subtitle: "Je suis ici pour vous apprendre le Darija d'une manière simple et amusante",

      }
    }


  };

  const text = getText();

  return (
    <div className={styles.container}>
      <img className={styles.logo} src="Logo.png" alt="DarijaGenie Logo" />
      <div className={styles.textContainer}>
        <h1 className={styles.title}>{text.title}</h1>
        <h1 className={styles.subtitle}>{text.subtitle}</h1>


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
