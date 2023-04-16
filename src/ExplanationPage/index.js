import React from "react";
import styles from "./styles.module.css";
import { getButtonTexts } from "../LanguageSelector";


const ExplanationPage = ({ onNext, onPrevious, language }) => {
  const buttonTexts = getButtonTexts(language);



  const getText = () => {
    if (language === "Darija_ar") {
      return "TBD";
    } else if (language === "Darija_roman") {
      return "Ana ka Jinni Darija 3endi tari9a wa3ra bach n3elmek Darija.<br><br> Tari9a hia anana ghadi nla3bo majmou3a mn scenarios li ana ghadi nakhed fihom dawr dial bzaf che5seyat wnta ghadi tl3ab dewr dial che5seyat akhrin.<br><br> Matalan, f scenario dial 'Cherrian le7wij' ana ghadi nl3eb dawr dial mol lma7al wnta ghadi tl3ab dawr dial l klian li jay l'lma7al.<br><br> Chouf lte7t ghadi tl9a wa7d tableu fih ga3 les scenario li n9edo nle3bo. Had tableu fih l2adwar li ana wiak n9edo nle3bo, lkhalfia dial scenario, w le7wij lighadi tet3alem.<br><br> Wjed Rask w Yallah nbdaw :)";
    } else if (language === "English") {
      return "Welcome, dear adventurer! I'm thrilled to continue guiding you on this magical journey of learning Darija in a fun and interactive way! Remember, you have the freedom to chat in Darija using either Arabic letters or Roman letters, whichever you prefer, as you read, write, listen, and participate in enchanting scenarios. <br><br> Together, we'll embark on a journey through task-based language learning, immersing you in captivating scenarios where you'll take on various roles, while I magically assume numerous characters. This enchanting method will help you develop essential language skills in a dynamic and enjoyable manner. <br><br> Below you will find the scenarios, roles, and skills we'll develop together through our magical dialogues.";
    } else if (language === "French") {
      return "Bienvenue, cher aventurier ! Je suis ravi de vous guider dans cette aventure magique d'apprentissage du Darija d'une manière ludique et interactive ! N'oubliez pas, vous avez la liberté de discuter en Darija en utilisant des lettres arabes ou des lettres romaines, selon votre préférence.<br><br> Ensemble, nous embarquerons dans un voyage à travers l'apprentissage des langues basé sur les tâches, en vous immergeant dans des scénarios captivants où vous assumerez divers rôles, tandis que j'endosserai magiquement de nombreux personnages. Cette méthode envoûtante vous aidera à développer des compétences linguistiques essentielles de manière dynamique et agréable. <br><br> Ci-dessous, vous trouverez les scénarios, les rôles et les compétences que nous développerons ensemble grâce à nos dialogues magiques.";
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
