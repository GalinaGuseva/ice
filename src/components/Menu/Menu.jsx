import React from 'react';
import './Menu.css';
import logo from '../../img/logo.svg';

export default function Menu({ isOpen, onClose, openPopup }) {
  return (
    <section
      className={`menu ${isOpen ? 'menu_active' : ''}`}
      onClick={onClose}
    >
      <div
        className={`menu__container ${
          isOpen ? 'menu__container_visible' : 'menu__container_hidden'
        }`}
      >
        <button onClick={onClose} className='menu__btn-close link'></button>
        <img src={logo} alt='логотип' className='menu__logo' />
        <div className='menu__bar'>
          <nav className='menu__nav'>
            <a href='#main' onClick={onClose} className='menu__link'>
              Главная
            </a>
            <a href='#how-it' onClick={onClose} className='menu__link'>
              Как&nbsp;это&nbsp;сделано?
            </a>
            <a href='#products' onClick={onClose} className='menu__link'>
              Наши&nbsp;продукты
            </a>
            <a href='#contacts' onClick={onClose} className='menu__link'>
              Контакты
            </a>
          </nav>
          <button
            type='button'
            onClick={openPopup}
            className='menu__button link_button'
          >
            <p className='menu__button-name'>Купить </p>
            <span className='menu__button-more'></span>
          </button>
        </div>
      </div>
    </section>
  );
}
