import React, { useState, useEffect } from "react";

const Typewriter = ({ text, delay }) => {
  const [currentText, setCurrentText] = useState("");
  const [currentIndex, setCurrentIndex] = useState(0);
  const [completedOnce, setCompletedOnce] = useState(false);

  // Typing logic goes here
  useEffect(() => {
    const typingInterval = setInterval(() => {
      if (currentIndex < text.length) {
        setCurrentText((prevText) => prevText + text[currentIndex]);
        setCurrentIndex((prevIndex) => prevIndex + 1);
      } else {
        if (!completedOnce) {
          // Pause for 5 seconds after completion for the first time
          setTimeout(() => {
            setCurrentText("");
            setCurrentIndex(0);
            setCompletedOnce(true);
          }, 5000);
        } else {
          // Reset typing when it reaches the end of the text after the first completion
          //   setCurrentText("");
          //   setCurrentIndex(0);
        }
        clearInterval(typingInterval);
      }
    }, delay);

    return () => clearInterval(typingInterval);
  }, [currentIndex, delay, text, completedOnce]);

  return <span>{currentText}</span>;
};

export default Typewriter;
