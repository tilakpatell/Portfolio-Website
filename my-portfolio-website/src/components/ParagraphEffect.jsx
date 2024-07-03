// src/components/TypingEffect.jsx
import React from 'react';
import { Typewriter } from 'react-simple-typewriter';

const ParagraphEffect = ({ words }) => {
    return (
      <Typewriter
      words={words}
      loop={0}
      cursor
      cursorStyle='/'
      typeSpeed={30}
      deleteSpeed={false}
      delaySpeed={2000}
      />
    );
  };

export default ParagraphEffect;
