import React, { useState, useEffect } from "react";
import styles from "./styles.module.css";
import { getButtonTexts } from "../LanguageSelector";
import IframeEmbed from "./IframeEmbed";
import slackQRCode from './assets/QRcard-slack.jpg';
import teamsQRCode from './assets/QRcard-teams.jpg';
import messengerQRCode from './assets/QRcard-messenger.jpg';
import telegramQRCode from './assets/QRcard-telegram.jpg';


const ChatScreen = ({ onPrevious, language }) => {
  const buttonTexts = getButtonTexts(language);
  const [scrolled, setScrolled] = useState(false);
  const MSBFM_key = process.env.REACT_APP_MSBFM_KEY;
  const [showPopup, setShowPopup] = useState(false);
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

  const handleMicrosoftTeamsClick = () => {
    setShowPopup(true);
  };

  const handleClosePopup = () => {
    setShowPopup(false);
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
          <a href="https://join.slack.com/t/darijagenie/shared_invite/zt-1tqsdy4y8-YllCWJFuDaC~NZ1_QsWN_w" target="_blank" rel="noopener noreferrer" className={styles.imageLink}>
            <figure>
              <img src={slackQRCode} alt="Slack QR code" />
              <figcaption className="image-text">Slack</figcaption>
            </figure>
          </a>

          <a href="https://t.me/DarijaGenie_bot" target="_blank" rel="noopener noreferrer" className={styles.imageLink}>
            <figure>
              <img src={telegramQRCode} alt="Telegram QR code" />
              <figcaption className="image-text">Telegram</figcaption>
            </figure>
          </a>

          <a href="https://www.facebook.com/DarijaGenie" target="_blank" rel="noopener noreferrer" className={styles.imageLink}>
            <figure>
              <img src={messengerQRCode} alt="Messenger QR code" />
              <figcaption className="image-text">Facebook Messenger</figcaption>
            </figure>
          </a>

          <a className={styles.imageLink} onClick={handleMicrosoftTeamsClick}>
            <figure>
              <img src={teamsQRCode} alt="Teams QR code" />
              <figcaption className="image-text">Microsoft Teams</figcaption>
            </figure>
          </a>
        </div>



      </div>

      {showPopup && (
        <div className={styles.popup}>
          <div className={styles.popupContent}>
            <h3>Use DarijaGenie on Microsoft Teams</h3>
            <p><strong>1.</strong> Open Microsoft Teams and sign in.</p>
            <p><strong>2.</strong> In the search bar at the top of the application, paste the chatbot's unique ID: 54f9a37e-0055-42b3-967d-e3d2ec5c884d</p>
            <p><strong>3.</strong> Press Enter to start the search.</p>
            <p><strong>4.</strong> Click on the "People" tab, and the Darija chatbot should appear in the search results.</p>
            <p><strong>5.</strong> Click on the chatbot to start or continue a conversation with it.</p>
            <button className={styles.closeButton} onClick={handleClosePopup}>
              Close
            </button>
          </div>
        </div>
      )}


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