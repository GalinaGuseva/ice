import React, { useContext } from 'react';
import { SliderContext } from './Carousel';
import './Callback.css';

export default function Dot({ number }) {
  const { goToSlide, slideNumber } = useContext(SliderContext);

  return (
    <div
      className={`callback__dot ${slideNumber === number ? 'selected' : ''}`}
      onClick={() => goToSlide(number)}
    />
  );
}
