import React from 'react';
import './Contacts.css';

export default function Contacts({ openMapPopup }) {
  return (
    <section className='contacts' id='contacts'>
      <ul className='contacts__places'>
        <li className='contacts__item contacts__item_left'>
          <div className='contacts__container'>
            <h5 className='contacts__title'>КАФЕ</h5>
            <p className='contacts__city'>Москва</p>
            <p className='contacts__address'>
              Краснопресненская наб., 132, Москва
            </p>
            <p className='contacts__days'>Пон - Пятница</p>
            <p className='contacts__hours'>08:00 - 22:00</p>
            <p className='contacts__days'>Суббота - Воскр.</p>
            <p className='contacts__hours contacts__hours_bottom'>
              08:00 - 16:00
            </p>
            <p className='contacts__phone'>
              +7(495)383 76 62 icecream@gmail.com
            </p>
          </div>
        </li>
        <li className='contacts__item contacts__item_middle'>
          <div className='contacts__container'>
            <h5 className='contacts__title'>КИОСКИ</h5>
            <p className='contacts__city'>Тамбов</p>
            <p className='contacts__address'>
              бул. Энтузиастов, дом 2Б, Тамбов
            </p>
            <p className='contacts__days'>Пон - Пятница</p>
            <p className='contacts__hours'>08:00 - 22:00</p>
            <p className='contacts__days'>Суббота - Воскр.</p>
            <p className='contacts__hours contacts__hours_bottom'>
              08:00 - 16:00
            </p>
            <p className='contacts__phone'>
              +7(495)383 76 62 icecream@gmail.com
            </p>
          </div>
        </li>
        <li className='contacts__item contacts__item_right'>
          <div className='contacts__container'>
            <h5 className='contacts__title'>КАФЕ</h5>
            <p className='contacts__city'>Калуга</p>
            <p className='contacts__address'>
              парк им. Солнца, центр. аллея, Калуга
            </p>
            <p className='contacts__days'>Пон - Пятница</p>
            <p className='contacts__hours'>08:00 - 22:00</p>
            <p className='contacts__days'>Суббота - Воскр.</p>
            <p className='contacts__hours contacts__hours_bottom'>
              08:00 - 16:00
            </p>
            <p className='contacts__phone'>
              +7(495)383 76 62 icecream@gmail.com
            </p>
          </div>
        </li>
      </ul>
      <div className='contacts__buttons'>
        <button
          type='button'
          onClick={openMapPopup}
          className='contacts__left-btn link_button'
        >
          Местоположение<span className='contacts__button-icon'></span>
        </button>
        <button type='button' className='contacts__right-btn button'>
          Франшиза{' '}
        </button>
      </div>
    </section>
  );
}
