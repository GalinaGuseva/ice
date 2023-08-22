import React, { useContext } from 'react';
import { SliderContext } from './Carousel';
import './Callback.css';

export default function SlidesList() {
  const { slideNumber, items } = useContext(SliderContext);

  return (
    <div
      className='callback__slider'
      style={{ transform: `translateX(-${slideNumber * 100}%)` }}
    >
      {items.map((slide, index) => {
        const { text, name } = slide;
        return (
          <div className='callback__item' key={index}>
            <div className={`callback__photo callback__photo_${index}`}></div>
            <div className='callback__rectangle'>
              <p className='callback__text'>{text}</p>
            </div>
            <p className='callback__name'>{name}</p>
          </div>
        );
      })}
    </div>
  );
}
