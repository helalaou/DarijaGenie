import React, { useState, useEffect } from "react";
import "./App.css";

import IntroPage from "./IntroPage";
import ExplanationPage from "./ExplanationPage";
import ChatScreen from "./ChatScreen";
import LanguageSelector from "./LanguageSelector";

import clickSound from  "./clickSound.wav";


const App = () => {
  const [isFirstLoad, setIsFirstLoad] = useState(true);

  useEffect(() => {
    if (isFirstLoad) {
      setTimeout(() => {
        setIsFirstLoad(false);
      }, 1000); // Duration of the genieAppearing animation
    }
  }, [isFirstLoad]);


  const [currentPage, setCurrentPage] = useState(0);
  const [language, setLanguage] = useState("Darija_ar");

  const handleNext = () => {
    setCurrentPage(currentPage + 1);
    const audio = new Audio(clickSound); // create new Audio instance
    audio.play(); // play the click sound
  };

  const handlePrevious = () => {
    setCurrentPage(currentPage - 1);
    const audio = new Audio(clickSound); // create new Audio instance
    audio.play(); // play the click sound
  };

  const handleLanguageChange = (newLanguage) => {
    setLanguage(newLanguage);
  };


  return (

  <div className="App">
      <div className={`container backgroundHeader`}>
        <img
          className={`logo ${!isFirstLoad ? "logoFloating" : "logoAppearing"}`}
          src="Logo.png"
          alt="DarijaGenie Logo"
        />
        <img className="teapot"src="teapot.png" alt="Teapot"  />
        <img className="shadow" src="shadow.png" alt="Shadow" />
     
      </div>
    
      <audio id="click-sound">
        <source src={clickSound} type="audio/wav" />
      </audio>
      <LanguageSelector onLanguageChange={handleLanguageChange} />

      {currentPage === 0 && (
        <IntroPage onNext={handleNext} language={language} />
      )}

      {currentPage === 1 && (
        <ExplanationPage
          onNext={handleNext}
          onPrevious={handlePrevious}
          language={language}
        />
      )}

      {currentPage === 2 && (
        <ChatScreen onPrevious={handlePrevious} language={language} />
      )}
    </div>
  );
}

export default App; 
