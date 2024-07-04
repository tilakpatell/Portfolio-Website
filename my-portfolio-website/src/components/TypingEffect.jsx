import React, { useState, useEffect } from 'react';

const TypingEffect = ({ words, onWordChange }) => {
  const [currentWordIndex, setCurrentWordIndex] = useState(0);
  const [currentText, setCurrentText] = useState('');
  const [isDeleting, setIsDeleting] = useState(false);
  const [typingSpeed, setTypingSpeed] = useState(150);

  useEffect(() => {
    const currentWord = words[currentWordIndex];

    const handleTyping = () => {
      if (!isDeleting && currentText === currentWord) {
        setTypingSpeed(3000);
        setIsDeleting(true);
      } else if (isDeleting && currentText === '') {
        setIsDeleting(false);
        setCurrentWordIndex((prevIndex) => (prevIndex + 1) % words.length);
        onWordChange();
        setTypingSpeed(150);
      } else {
        setCurrentText(prev => 
          isDeleting ? prev.slice(0, -1) : currentWord.slice(0, prev.length + 1)
        );
        setTypingSpeed(isDeleting ? 100 : 150);
      }
    };

    const timeoutId = setTimeout(handleTyping, typingSpeed);

    return () => clearTimeout(timeoutId);
  }, [currentWordIndex, currentText, isDeleting, words, onWordChange, typingSpeed]);

  return <span>{currentText}</span>;
};

export default TypingEffect;