import React from 'react';
import './Callback.css';
import painting from '../../img/brooke.jpg';
import girl from '../../img/photo.jpg';

export default function Callback() {
  return (
    <section className="callback">
      <div className='callback__wrap'>            
        <div className="callback__center">
          <img src={painting} alt="ice-cream-mix" className="callback__image" />
          <img src={girl} alt="girl" className="callback__photo" />
          <div className="callback__rectangle">
            <p className="callback__text">Я люблю посещать ваше кафе. Вы готовите самое вкусное мороженое в городе! Кроме того, у вас красивая подача, уютная атмосфера и вежливый персонал.</p>
          </div>
          <p className="callback__name">Анюта, Тамбов</p>
          <div className="callback__dotes">
            <div className="callback__dot callback__dot_active"></div>
            <div className="callback__dot"></div>
            <div className="callback__dot"></div>
          </div>
          </div>
        </div>
      <div className="callback__background"></div>
    </section>
  );
}