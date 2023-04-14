import React from "react";
import styles from "./styles.module.css";
import { getButtonTexts } from "../LanguageSelector";


const ChatScreen = ({
    onPrevious , language}) => {
    const buttonTexts = getButtonTexts(language);


    return (
        
        <div className={styles.container}> 
            <div className={styles.chatBox}>

            <div className="title">
      This page will contain the chatbot interface as well as QR codes for integration with MS Teams, Telegram, Messenger, and other platforms.
       
      </div>

            </div>
            <div className={styles.buttonContainerChatScreen}>
                
                <button className="button" onClick={onPrevious}>{buttonTexts.previous}</button>
            </div>
        </div>
    );
};

export default ChatScreen;