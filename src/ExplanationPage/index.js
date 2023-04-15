import React from "react";
import styles from "./styles.module.css";
import { getButtonTexts } from "../LanguageSelector";


const ExplanationPage = ({ onNext, onPrevious, language }) => {
  const buttonTexts = getButtonTexts(language);



  const getText = () => {
    if (language === "Darija_ar") {
      return "TBD";
    } else if (language === "Darija_roman") {
      return "Ana ka Jinni Darija 3endi tari9a wa3ra bach n3elmek Darija.<br><br> Tari9a hia anana ghadi nla3bo majmou3a mn scenarios li ana ghadi nakhed fihom dawr dial bzaf d l'characters wnta ghadi tl3ab dewr dial characters akhrin.<br><br> Matalan, f scenario dial 'Cherrian le7wij' ana ghadi nl3eb dawr dial mol lma7al wnta ghadi tl3ab dawr dial l klian li jay l'lma7al.<br><br> Chouf lte7t ghadi tl9a wa7d tableu fih ga3 les scenario li n9edo nle3bo. Had tableu fih l2adwar li ana wiak n9edo nle3bo, lkhalfia dial scenario, w le7wij lighadi tet3alem.<br><br> Wjed Rask w Yallah nbdaw :)";
    } else if (language === "English") {
      return "As the Darija Genie, I have a magical way of teaching you Darija in a fun and interactive manner!<br><br> We'll explore various captivating scenarios where I'll play different characters and you'll take on other roles.<br><br> For example, in a clothes shopping scenario, I'll be the shop owner and you'll be the customer.<br><br> The table below  will detail the scenarios, roles, and skills you'll develop through our enchanting dialogues.<br><br> Thanks to my genie nature, I can take on numerous roles, adding a touch of magic and excitement to your learning journey. So, get ready to embark on an adventure with the Darija Genie!";
    } else if (language === "French") {
      return "En tant que Génie du Darija, je vous enseignerai l'arabe marocain de manière ludique et interactive !<br><br> Nous explorerons divers scénarios où nous jouerons différents rôles pour développer vos compétences.<br><br> Un tableau détaillera les scénarios, rôles et compétences développées.<br><br> Par exemple, je serai le propriétaire d'une boutique et vous serez le client.<br><br> Mon côté génie apportera magie et excitation à votre apprentissage. <br><br>Préparez-vous pour l'aventure avec le Génie du Darija !";
    }
  };

 
  const text = getText();


  return (
    <div className={styles.backgroundHeader}>
      <div className="text"> 

      <h1 className={styles.text} dangerouslySetInnerHTML={{ __html: text }}></h1>
       </div>
       
      <div className={styles.buttonContainerExplanationPage} >
        <button className="button" onClick={onPrevious}>{buttonTexts.previous}</button>
        <button className="button" onClick={onNext}>{buttonTexts.next}</button>

      </div>

    </div>
  );
};

export default ExplanationPage;
