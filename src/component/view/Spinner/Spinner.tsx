import React, { useState, useEffect } from 'react';
import { Text } from 'ink';

const Spinner = () => {
  const [frame, setFrame] = useState(0);
  const frames = ['⠋', '⠙', '⠹', '⠸', '⠼', '⠴', '⠦', '⠧', '⠇', '⠏'];
  const interval = 80;

  useEffect(() => {
    const timer = setInterval(
      () => setFrame((frame) => (frame + 1) % frames.length),
      interval
    );
    return () => clearInterval(timer);
  }, []);

  return <Text color="blue">{frames[frame]} </Text>;
};

export { Spinner as default, Spinner };
