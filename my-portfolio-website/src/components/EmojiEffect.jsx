// src/components/TypingEffect.jsx
import React from 'react';
import { Typewriter } from 'react-simple-typewriter';

const EmojiEffect = ({ words }) => {
    return (
      <Typewriter
        words={words}
        loop={0}
        cursor
        cursorStyle='_'
        typeSpeed={100}
        deleteSpeed={80}
        delaySpeed={3600}
      />
    );
  };

export default EmojiEffect;
