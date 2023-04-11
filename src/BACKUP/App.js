import React, { useState } from "react";
import IntroPage from "./IntroPage";
import ExplanationPage from "./ExplanationPage";
import ChatScreen from "./ChatScreen";
import LanguageSelector from "./LanguageSelector";
import "./App.css";

function App() {
  const [currentPage, setCurrentPage] = useState(0);

  const handleNext = () => setCurrentPage(currentPage + 1);
  const handlePrevious = () => setCurrentPage(currentPage - 1);
  const handleLanguageChange = (language) => {
    // Add functionality for changing languages here
  };

  return (
    <div className="App">
      <LanguageSelector onLanguageChange={handleLanguageChange} />
      {currentPage === 0 && <IntroPage onNext={handleNext} />}
      {currentPage === 1 && (
        <ExplanationPage onNext={handleNext} onPrevious={handlePrevious} />
      )}
      {currentPage === 2 && <ChatScreen onPrevious={handlePrevious} />}
    </div>
  );
}

export default App;
