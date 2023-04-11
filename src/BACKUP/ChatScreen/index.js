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
<button className={styles.previousButton} onClick={onPrevious}>Previous</button>
</div>
);
};

export default ChatScreen;