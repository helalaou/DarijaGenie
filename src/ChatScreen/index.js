import React, { useMemo } from "react";
import styles from "./styles.module.css";
import { getButtonTexts } from "../LanguageSelector";
import ReactWebChat, { createDirectLine } from 'botframework-webchat';

const ChatScreen = ({ onPrevious, language }) => {
  const token =  "C8G9pPl3IoU.C3yGRwn1XbYWny1z7CrIck3rvkGrywCD5yt7k0wraXw";
  const buttonTexts = getButtonTexts(language);
  const directLine = useMemo(() => createDirectLine({ token }), []);

  return (
    
    <div className={styles.container}>

      <div className={styles.chatBox}>
        <ReactWebChat className={styles.iframeContainer} directLine={directLine} />
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
