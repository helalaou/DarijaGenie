import React, { useState, useRef, useEffect } from "react";
import "./App.css";
import "font-awesome/css/font-awesome.min.css";
import IntroPage from "./IntroPage";
import ExplanationPage from "./ExplanationPage";
import ChatScreen from "./ChatScreen";
import LanguageSelector from "./LanguageSelector";

import clickSound from "./sounds/clickSound.wav";
import magicSound from "./sounds/magicSound.mp3";
import soundtrack from "./sounds/soundtrack.mp3";


const App = () => {

  const [showOverlay, setShowOverlay] = useState(true);
  const [startAnimation, setStartAnimation] = useState(false);
  const [logoAppeared, setLogoAppeared] = useState(false);
  const [language, setLanguage] = useState("Darija_ar");
  const [soundOn, setSoundOn] = useState(false);
  const [currentPage, setCurrentPage] = useState(0);
  const [rotatingText, setRotatingText] = useState("Grant my language wishes");
  const logoRef = useRef(null);
  const audioRef = useRef(null);
  const [volume, setVolume] = useState(0.5);
  const [showControls, setShowControls] = useState(false);




  useEffect(() => {
    if (logoRef.current) {
      logoRef.current.addEventListener("animationend", (e) => {
        if (e.animationName === "genieAppearing") {
          logoRef.current.classList.remove("logoAppearing");
          logoRef.current.classList.add("logoFloating");
        }
      });
    }
  }, [startAnimation]);

  useEffect(() => {
    if (logoRef.current && !logoAppeared) {
      logoRef.current.addEventListener("animationend", (e) => {
        if (e.animationName === "genieAppearing") {
          logoRef.current.classList.remove("logoAppearing");
          logoRef.current.classList.add("logoFloating");
          setLogoAppeared(true);
        }
      });
    }
  }, [startAnimation, logoAppeared]);

  useEffect(() => {
    const texts = [
      "Grant my language wishes",
      "Exaucez mes désirs linguistiques",
      "لبي ليا امنياتي اللغوية",
      "Lebbi lia omniati alughawia",
    ];

    let currentIndex = 0;

    const textInterval = setInterval(() => {
      currentIndex = (currentIndex + 1) % texts.length;
      setRotatingText(texts[currentIndex]);
    }, 2300);

    return () => clearInterval(textInterval);
  }, []);


  const handleSoundToggle = () => {
    setSoundOn(!soundOn);
    if (audioRef.current) {
      if (soundOn) {
        audioRef.current.pause();
      } else {
        audioRef.current.play();
      }
    }
  };


  const handleVolumeChange = (e) => {
    const newVolume = parseFloat(e.target.value);
    setVolume(newVolume);
    if (audioRef.current) {
      audioRef.current.volume = newVolume;
    }
  };



  const handleEnter = () => {
    const magicAudio = new Audio(magicSound);
    magicAudio.play();
    setShowOverlay(false);
    setStartAnimation(true);
    setShowControls(true);
  };


  const handleNext = () => {
    setCurrentPage(currentPage + 1);
    const audio = new Audio(clickSound);
    audio.play();
  };

  const handlePrevious = () => {
    setCurrentPage(currentPage - 1);
    const audio = new Audio(clickSound);
    audio.play();
  };

  const handleLanguageChange = (newLanguage) => {
    setLanguage(newLanguage);
  };


  return (
    <div className="App">
      <audio ref={audioRef} src={soundtrack} loop />
      {showControls && (
        <div className="speakerIconContainer" onClick={handleSoundToggle}>
          <i className={`speakerIcon fa ${soundOn ? "fa-volume-up" : "fa-volume-off"}`}></i>

          <input
            className="volumeslider"
            type="range"
            min="0"
            max="1"
            step="0.01"
            value={volume}
            onChange={handleVolumeChange}
          />
        </div>
      )}

      {showOverlay && (
        <div className="overlay">
          <div className="enterButtonContainer">
            <button className="enterButton" onClick={handleEnter}>
              {rotatingText}
            </button>
            <div className="sparkle"></div>
            <div className="sparkle"></div>
            <div className="sparkle"></div>
            <div className="sparkle"></div>
            <div className="sparkle"></div>
            <div className="sparkle"></div>
          </div>



        </div>
      )}

      {startAnimation && (
        <div>
          <div className={`container backgroundHeader`}>
            <img
              ref={logoRef}
              className={`logo ${currentPage === 0 && !logoAppeared ? "logoAppearing" : "" // Check if the logo has appeared before
                } ${currentPage === 2 ? "logoLeft logoFloating" : "logoFloating"}`}
              src="Logo.png"
              alt="DarijaGenie Logo"
            />

            <img className={`teapot ${currentPage === 2 ? "teapotLeft" : ""}`} src="teapot.png" alt="Teapot" />
            <img className={`shadow ${currentPage === 2 ? "shadowLeft" : ""}`} src="shadow.png" alt="Shadow" />
          </div>


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
      )}


      {!showOverlay && (
        <div className="footer">
          <p>
            Built with ❤️ by{" "}
            <a
              href="https://hamzaelalaoui.com/"
              target="_blank"
              rel="noopener noreferrer"
            >
              Hamza El Alaoui
            </a>
          </p>
        </div>
      )}
    </div>
  );
};
export default App; 