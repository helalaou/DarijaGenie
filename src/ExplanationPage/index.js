import React from "react";
import styles from "./styles.module.css";
import { getButtonTexts } from "../LanguageSelector";


const ExplanationPage = ({ onNext, onPrevious, language }) => {
  const buttonTexts = getButtonTexts(language);



  const getText = () => {
    if (language === "Darija_ar") {
      return "TBD";
    } else if (language === "Darija_roman") {
      return "Salam, 3azizi l moughamir<br><br> Ana B’ Sifti Jinni Darija 3ndi tari9a wa3ra bach n3elmek thdrha b7ali.<br><br> Tari9a hia annana ghadi nl3bo majmou3a dial scenariohat li ana ghadi nakhed fihom dawr dial bzaf d cha5siyyat wnta/(nti) ghadi tl3ab dawr dial cha5ssiyyat akhrin.<br><br> Matalan, f scenario dial 'Chrian le7wayej' ana ghadi nl3eb dawr dial mol lma7al wnta ghadi tl3ab dawr dial l klian li jay l'lma7al.<br><br> Chouf lte7t ghadi tl9a wa7d tableau fih ga3 scenarioat li n9edo nle3bo. Had tableau fih l2adwar li ana wiak n9edo nle3bouha, lkhalfia (wlla l9issa) dial scenario, w le7wayj lli ghadi tet3alem fihoum.<br><br> Wjjed Rask m3aya w Yallah nbdaw rani t7ammast :)";
    } else if (language === "English") {
      return "Welcome, dear adventurer! I am thrilled to continue guiding you through this mystical and magical journey of learning Darija in a fun and interactive way! Remember, you have the freedom to chat in Darija using either Arabic or Latin script, whichever you prefer, as you read, write, listen, and partake in enchanting scenarios.<br><br> Together, we will embark on a journey through task-based language learning, immersing you in captivating scenarios where you will take on various roles and perspectives, while I magically assume numerous characters. This enchanting method will help you develop essential language skills in a dynamic and enjoyable manner.<br><br> Below you will find the scenarios, roles, and skills which we will develop together through our magical dialogues.";
    } else if (language === "French") {
      return "Bienvenue, cher aventurier! Je suis ravi de vous guider durant cette aventure mystique d'apprentissage du Darija via une manière ludique et interactive! N'oubliez pas, vous avez la liberté d’entreprendre en Darija en utilisant le script arabe ou latin (L’alphabet), selon votre préférence. <br><br> Ensemble, nous embarquerons dans un voyage à travers l'apprentissage linguistique qui s'achèvera en tâches, en vous immergeant dans des scénarios captivants où vous assumerez de divers rôles, tandis que j'endosse magiquement de nombreux personnages. Cette méthode envoûtante vous aidera à développer les compétences linguistiques essentielles de manière dynamique et agréable. <br><br> Ci-dessous, vous trouverez les scénarios, les rôles et les compétences que nous développerons ensemble grâce à nos dialogues magiques.";
    }
  };

 
  const text = getText();


  return (
    <div className={styles.backgroundHeader }>
      <div class={styles.papyruscontainer}>

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
