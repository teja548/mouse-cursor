import React, { useState, useEffect } from 'react';
import cursorImg from './logo512.png';

const useMousePosition = () => {
  const [mousePos, setMousePos] = useState({ x: 0, y: 0 });

  useEffect(() => {
    const handleMousePosition = event => {
      setMousePos({ x: event.clientX, y: event.clientY });
    };
    window.addEventListener('mousemove', handleMousePosition);
    return () => window.removeEventListener('mousemove', handleMousePosition);
  }, []);

  return mousePos;
};

const ImageCursor = () => {
  const { x, y } = useMousePosition();

  return (
    <div>
      <img src={cursorImg} width={100} alt='Cursor' style={{ transform: `translate(${x}px,${y}px) ` }} />
    </div>
  );
};

export default ImageCursor;