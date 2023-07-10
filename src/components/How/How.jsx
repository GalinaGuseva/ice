import React from 'react';
import './How.css';
import cow from '../../img/cow.jpg';
import iconcow from '../../img/cow.svg';
import weight from '../../img/weight.svg';
import ice from '../../img/ice.svg';

export default function Header() {
  return (
      <section className="how" id="how-it">
            <div className="how__center">
                <div className="how__header">
                  <h4 className="how__overtitle">традиции&nbsp;и&nbsp;любовь</h4>
                  <h3 className="how__title">Как это сделано?</h3>
                </div>
                <div className="how__container">
                    <div className="how__image">
                      <img src={cow} alt="cow" className="how__img" />
                      <div className="how__circle"></div>
                    </div>
                    <div className="how__right-block">
                       <div className="how__textblock">
                          <p className="how__text">Мороженое — это еда, с которой вы станете не только чуточку счастливее, но и здоровее. Здоровье – главная ценность для нас, и мы руководствуемся ею при создании наших десертов ручной работы.</p>
                            <p className="how__text">Мы используем традиционные рецепты и 100% натуральные ингредиенты. Наши продукты настолько натуральны, что их можно давать детям с трехлетнего возраста. Любителей сладкого ждет 55 видов мороженого, 15 видов кофе и 23 молочных коктейля.</p>
                            <p className="how__text">Этого достаточно, чтобы выбрать мороженое и кофе под любое настроение!</p>
                        </div>
                        <button type="button" className="how__button link_button">
                            <p className="how__button-name">Узнать&nbsp;больше</p>
                            <span className="how__button-icon"></span>
                        </button>
                    </div>
                </div>
                <ul className="how__advantages">
                    <li className="how__item">
                        <img src={iconcow} alt="cow-icon" className="how__icon" />
                        <p className="how__number">721</p>
                        <p className="how__pref">Aliquam ac dui vel dui vulputate consectetur. Mauris massa.</p>
                    </li>
                    <li className="how__item">
                        <img src={weight} alt="weight-icon" className="how__icon" />
                        <p className="how__number">16kg</p>
                        <p className="how__pref">Aliquam ac dui vel dui vulputate consectetur. Mauris massa.</p>
                    </li>
                    <li className="how__item">
                        <img src={ice} alt="ice-icon" className="how__icon" />
                        <p className="how__number">84</p>
                        <p className="how__pref">Aliquam ac dui vel dui vulputate consectetur. Mauris massa.</p>
                    </li>
                </ul>
            </div>
        </section>
    );
}