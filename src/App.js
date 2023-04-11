import React, { useState } from "react";
import "./App.css";
import IntroPage from "./IntroPage";
import ExplanationPage from "./ExplanationPage";
import ChatScreen from "./ChatScreen";
import LanguageSelector from "./LanguageSelector";


function App() {
  const [currentPage, setCurrentPage] = useState(0);
  const [language, setLanguage] = useState("Darija_ar");

  const handleNext = () => setCurrentPage(currentPage + 1);
  const handlePrevious = () => setCurrentPage(currentPage - 1);
  const handleLanguageChange = (newLanguage) => {
    setLanguage(newLanguage);
  };

  return (
    <div className="App">
      <LanguageSelector onLanguageChange={handleLanguageChange} />


      {currentPage === 0 && <IntroPage
        onNext={handleNext} language={language} />}


      {currentPage === 1 && (<ExplanationPage
        onNext={() => setCurrentPage(currentPage + 1)}
        onPrevious={() => setCurrentPage(currentPage - 1)}
        language={language}
      />)}


      {currentPage === 2 && <ChatScreen
        onPrevious={() => setCurrentPage(currentPage - 1)}  language={language}   />



      }
    </div>
  );
}

export default App;
