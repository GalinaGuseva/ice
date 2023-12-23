import React from 'react';
import './MapPopup.css';
import { YMaps, Map } from '@pbe/react-yandex-maps';

export default function MapPopup({ isOpen, onClose }) {
  return isOpen ? (
    <div className={`popup ${isOpen && 'popup_opened'}`} onClick={onClose}>
      <div
        className='map__container'
        onClick={(e) => {
          e.stopPropagation();
        }}
      >
        <div className='map__center'>
          <button
            type='button'
            className='map__btn-close'
            title='Закрыть'
            onClick={onClose}
          ></button>
          <h4 className='map__title'>Как нас найти</h4>
          <YMaps query={{ apikey: 'e5c7bdcb-4e05-4d13-a1a4-cf9a88c800e2' }}>
            <div className='map-popup'>
              <Map defaultState={{ center: [52.76, 41.44], zoom: 9 }} />
            </div>
          </YMaps>
          <p className='map__text'>
            Проезд: через магический портал в бабушкином шкафу со словами "Июль,
            детство, 22 копейки эскимо"
          </p>
        </div>
      </div>
    </div>
  ) : null;
}
