import React, { useState, useEffect, createContext } from 'react';
import './Callback.css';
import Dots from './Dots';
import SlidesList from './SlidesList';

export const SliderContext = createContext();

export const Carousel = ({ items }) => {
  const [slide, setSlide] = useState(0);

  //   const nextSlide = () => {
  //     setSlide(slide === slides.length - 1 ? 0 : slide + 1);
  //   };

  //   const prevSlide = () => {
  //     setSlide(slide === 0 ? slides.length - 1 : slide - 1);
  //   };

  const goToSlide = (number) => {
    setSlide(number % items.length);
  };

  useEffect(() => {
    const lastIndex = items.length - 1;
    if (slide < 0) {
      setSlide(lastIndex);
    }
    if (slide > lastIndex) {
      setSlide(0);
    }
  }, [items.length, slide]);

  useEffect(() => {
    const interval = setInterval(
      () => setSlide((prevState) => prevState + 1),
      6000
    );

    return () => {
      clearInterval(interval);
    };
  }, [items.length, slide]);

  return (
    <div className='callback__customers'>
      <SliderContext.Provider
        value={{
          goToSlide,
          slidesCount: items.length,
          slideNumber: slide,
          items,
        }}
      >
        <SlidesList />
        <Dots />
      </SliderContext.Provider>
    </div>
  );
};
