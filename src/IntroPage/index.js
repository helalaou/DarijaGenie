import { getButtonTexts } from "../LanguageSelector";
import styles from "./styles.module.css";

const IntroPage = ({ onNext, language }) => {
  const buttonTexts = getButtonTexts(language);

  const getGreeting = () => {
    if (language === "Darija_ar") {
      return "Salam سلام";
    } else if (language === "Darija_roman") {
      return "Salam سلام";
    } else if (language === "English") {
      return "Hello مرحبا";
    } else if (language === "French") {
      return "Bonjour مرحبا";
    }
  };

  const getTitle = () => {
    if (language === "Darija_ar") {
      return ".أنا سلطان، جـنـي الدارجة";
    } else if (language === "Darija_roman") {
      return "Ana Sutlan, jenii Darija.";
    } else if (language === "English") {
      return "I'm Sultan, the Darija Genie.";
    } else if (language === "French") {
      return "Je suis Sultan, le génie du Darija.";
    }
  };

  const getSubtitle = () => {
    if (language === "Darija_ar") {
      return "واجد تتعلم الدارجة بطريقة سهلة وممتعة؟  يلاه نبداو";

    } else if (language === "Darija_roman") {
      return "Wajed tet3alem Darija b tari9a sahla w momte3a? Yallah nbadaw!";
    } else if (language === "English") {
      return "Ready to learn Moroccan Darija in a fun and easy way? Let's go!";
    } else if (language === "French") {
      return "Prêt à apprendre le dialecte marocain de manière amusante et facile ? Allons-y !";
    }
  };

  const greeting = getGreeting();
  const title = getTitle();
  const subtitle = getSubtitle();

  const getTitleStyle = () => {
    if (language === "Darija_ar") {
      return "titlear";
    }
    if (language === "Darija_roman") {
      return "titledarija";
    }
    if (language === "English") {
      return "titleeng";
    }
    else {
      return "titlefr";
    }
  }

  const getSubtitleStyle = () => {
    if (language === "Darija_ar") {
      return "subtitlear";
    }
    if (language === "Darija_roman") {
      return "subtitledarija";
    }
    if (language === "English") {
      return "subtitleeng";
    }
    else {
      return "subtitlefr";
    }
  }


  return (
    <div className={styles.containerIntroPage}>

      <h1 className={styles.greetingBubble}>{greeting}</h1>
      <h1 className={styles[getTitleStyle()]}>{title}</h1>
      <h1 className={styles[getSubtitleStyle()]}>{subtitle}</h1>


      <div className={styles.buttonContainerIntroPage}>
        <button className="button" onClick={onNext}>
          {buttonTexts.next}
        </button>
      </div>
    </div>

  );
};

export default IntroPage;
