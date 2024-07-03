// src/components/TypingEffect.jsx
import React from 'react';
import { Typewriter } from 'react-simple-typewriter';

const TypingEffect = ({ words }) => {
  return (
    <Typewriter
      words={words}
      loop={0}
      cursor
      cursorStyle='_'
      typeSpeed={100}
      deleteSpeed={80}
      delaySpeed={1000}
    />
  );
};

export default TypingEffect;
