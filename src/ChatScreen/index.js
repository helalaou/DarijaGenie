import React from "react";
import styles from "./styles.module.css";
import { getButtonTexts } from "../LanguageSelector";


const ChatScreen = ({
    onPrevious , language}) => {
    const buttonTexts = getButtonTexts(language);


    return (
        
        <div className={styles.container}> 
            <div className={styles.chatBox}>

       

            </div>
            <div className={styles.buttonContainerChatScreen}>
                
                <button className="button" onClick={onPrevious}>{buttonTexts.previous}</button>
            </div>
        </div>
    );
};

export default ChatScreen;