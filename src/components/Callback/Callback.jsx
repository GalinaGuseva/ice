import React from 'react';
import './Callback.css';
import painting from '../../img/brooke.jpg';
import { Carousel } from './Carousel';
import { data } from '../../constants/data';

export default function Callback() {
  return (
    <section className='callback'>
      <div className='callback__wrap'>
        <div className='callback__center'>
          <img src={painting} alt='ice-cream-mix' className='callback__image' />
          <Carousel items={data} />
        </div>
      </div>
      <div className='callback__background'></div>
    </section>
  );
}
