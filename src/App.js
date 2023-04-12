import React, { useState } from "react";
import "./App.css";
import IntroPage from "./IntroPage";
import ExplanationPage from "./ExplanationPage";
import ChatScreen from "./ChatScreen";
import LanguageSelector from "./LanguageSelector";

import clickSound from  "./clickSound.wav";

function App() {
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
