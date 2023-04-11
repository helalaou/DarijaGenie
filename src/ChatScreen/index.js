import React from "react";
import styles from "./styles.module.css";
import { getButtonTexts } from "../LanguageSelector";


const ChatScreen = ({
    onPrevious , language}) => {
    const buttonTexts = getButtonTexts(language);


    return (
        
        <div className={styles.container}>
            <div className={styles.logo}>DarijaGenie</div>
            <div className={styles.chatBox}>


                {/* Integrate chatbox with external service here /}
</div>
<div className={styles.qrCodes}>
{/ Add QR code images and links here */}


            </div>
            <div className={styles.buttonContainerChatScreen}>
                
                <button className="button" onClick={onPrevious}>{buttonTexts.previous}</button>
            </div>
        </div>
    );
};

export default ChatScreen;