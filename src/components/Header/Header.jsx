import React from 'react';
import './Header.css';
import logo from '../../img/logo.svg';
import creams from '../../img/more-icecream.jpg';

export default function Header({ onShowMenu, openPopup }) {
  return (
    <header className='header'>
      <img src={logo} alt='логотип' className='header__logo' />
      <nav className='header__menu'>
        <a href='#main' className='header__menu_item link'>
          Главная
        </a>
        <a href='#how-it' className='header__menu_item link'>
          Как&nbsp;это&nbsp;сделано?
        </a>
        <a href='#products' className='header__menu_item link'>
          Продукция
        </a>
        <a href='#contacts' className='header__menu_item link'>
          Контакты
        </a>
      </nav>
      <button
        type='button'
        onClick={onShowMenu}
        className='header__menu_mobile'
      ></button>
      <button
        type='button'
        onClick={openPopup}
        className='header__button link_button'
      >
        <p className='header__button-name'>Купить</p>
        <span className='header__button-icon'></span>
      </button>
      <div className='header__background_left'></div>
      <div className='header__background_middle'></div>
      <div className='header__background_right'></div>
      <div className='header__title-and-buttons'>
        <div className='header__title-box'>
          <h1 className='header__title_top'>прохладное чудо из</h1>
          <h1 className='header__title_bottom'>детства</h1>
        </div>
        <div className='header__buttons'>
          <button
            type='button'
            onClick={openPopup}
            className='header__btn_left button'
          >
            Выбрать
          </button>
          <a href='#how-it'>
            <button type='button' className='header__btn_right'>
              Как&nbsp;это&nbsp;сделано?
            </button>
          </a>
        </div>
      </div>
      <img src={creams} alt='шесть мороженок' className='header__img' />
      <div className='header__box'>
        <div className='header__text'>
          Мы используем традиционные рецепты и 100% натуральные ингредиенты.
          Наши продукты можно давать детям с трех лет.
        </div>
        <a href='#how-it' className='header__arrow'>
          -
        </a>
      </div>
      <div className='header__illustration'></div>
      <div className='header__right-block'>
        <div className='header__right-block_top'>
          <p className='header__number'>16</p>
          <p className='header__description'>кафе</p>
        </div>
        <div className='header__right-block_bottom'>
          <div className='header__right-block_bottom'>
            <p className='header__number'>23</p>
            <p className='header__description'>киоска</p>
          </div>
        </div>
      </div>
    </header>
  );
}
