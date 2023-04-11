import React from "react";
import styles from "./styles.module.css";

const ChatScreen = ({
onPrevious }) => {
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
<button className="button" onClick={onPrevious}>Previous</button>
</div>
</div>
);
};

export default ChatScreen;