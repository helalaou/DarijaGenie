import React, { useState, useEffect } from "react";
import styles from "./styles.module.css";
import { getButtonTexts } from "../LanguageSelector";
import IframeEmbed from "./IframeEmbed";

const ChatScreen = ({ onPrevious, language }) => {
  const buttonTexts = getButtonTexts(language);
  const [scrolled, setScrolled] = useState(false);
  const MSBFM_key = process.env.REACT_APP_MSBFM_KEY;
  const iframe = `<iframe class="${styles.iframeContainer}" src='https://webchat.botframework.com/embed/darijagenie?s=${MSBFM_key}'></iframe>`;
  const getStripTxt = () => {
    if (language === "Darija_ar") {
      return "خود حكمة الجني لتطبيقاتك المفضلة";
    } else if (language === "Darija_roman") {
      return "Khoud l'7ikma d'ljeni l'tetbi9atek lmofadala";
    } else if (language === "English") {
      return "Take the Genie's Wisdom to Your Favorite Apps";
    } else if (language === "French") {
      return "Emportez la sagesse du Génie dans vos applications préférées"


    }
  };

  useEffect(() => {

    const handleScroll = () => {
      if (window.pageYOffset > 0) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };

    window.addEventListener("scroll", handleScroll);

    return () => window.removeEventListener("scroll", handleScroll);
  }, []);


  const stripTxt = getStripTxt();


  return (


    <div className={styles.backgroundHeader}>

      <div className={styles.container}>
        <div className={styles.chatBox}>
          <IframeEmbed iframe={iframe} />
        </div>
        <div className={styles.goldenStrip}>{stripTxt}</div>
        <div className={styles.imagescontainer}>
          <figure>
            <img src="https://i.imgur.com/uX6zhrd.jpg" alt="Telegram QR code" />
            <figcaption class="image-text">Telegram</figcaption>
          </figure>
          <figure>
            <img src="https://i.imgur.com/uX6zhrd.jpg" alt="Messenger QR code" />
            <figcaption class="image-text">Facebook Messenger</figcaption>
          </figure>
          <figure>
            <img src="https://i.imgur.com/uX6zhrd.jpg" alt="Microsoft Teams QR code" />
            <figcaption class="image-text">Microsoft Teams</figcaption>
          </figure>
          <figure>
            <img src="https://i.imgur.com/uX6zhrd.jpg" alt="Slack QR code" />
            <figcaption class="image-text">Slack</figcaption>
          </figure>
        </div>
      </div>
 

      <div
        className={
          scrolled
            ? styles.buttonContainerChatScreenPageScroll
            : styles.buttonContainerChatScreen
        }

      >
        <button className="button" onClick={onPrevious}>
          {buttonTexts.previous}
        </button>

      </div>
    </div>
  );
};

export default ChatScreen;
