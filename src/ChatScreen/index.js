import React, { useMemo } from "react";
import styles from "./styles.module.css";
import { getButtonTexts } from "../LanguageSelector";
import ReactWebChat, { createDirectLine } from 'botframework-webchat';

const ChatScreen = ({ onPrevious, language }) => {
  const buttonTexts = getButtonTexts(language);
  const directLine = useMemo(() => createDirectLine({ token: 'C8G9pPl3IoU.f9xGFfaTn0cgUexUnqd7mNSaTWhjNPy40v96DJqXz6I' }), []);

  return (
    <div className={styles.container}>
      <div className={styles.chatBox}>
        <ReactWebChat className={styles.iframeContainer} directLine={directLine} userID="YOUR_USER_ID" />
      </div>
      <div className={styles.buttonContainerChatScreen}>
        <button className="button" onClick={onPrevious}>
          {buttonTexts.previous}
        </button>
      </div>
    </div>
  );
};

export default ChatScreen;
