import React, { useState, useEffect } from 'react';

const ParagraphEffect = ({ words }) => {
  const [index, setIndex] = useState(0);
  const [subIndex, setSubIndex] = useState(0);
  const [reverse, setReverse] = useState(false);
  const [blink, setBlink] = useState(true);

  // Type speed
  const speed = 50;

  useEffect(() => {
    if (subIndex === words[index].length) {
      return; // Stop here, don't reverse or move to next word
    }

    const timeout = setTimeout(() => {
      setSubIndex((prev) => prev + 1);
    }, speed);

    return () => clearTimeout(timeout);
  }, [subIndex, index, words]);

  // Blink effect
  useEffect(() => {
    const timeout2 = setTimeout(() => {
      setBlink((prev) => !prev);
    }, 500);
    return () => clearTimeout(timeout2);
  }, [blink]);

  return (
    <>
      <span>{`${words[index].substring(0, subIndex)}${blink ? "|" : " "}`}</span>
    </>
  );
};

export default ParagraphEffect;