import React from 'react';
import './Prod.css';
import { Link } from 'react-router-dom';
import icecream from '../../img/kelsey-curtis.jpg';
import coffee from '../../img/pariwat.jpg';
import victor from '../../img/victor.jpg';

export default function Prod() {
  return (
    <section className='prod' id='products'>
      <div className='prod__center'>
        <div className='prod__header'>
          <h2 className='prod__overtitle'>100% natural</h2>
          <h2 className='prod__title'>наши продукты</h2>
        </div>
        <ul className='prod__items'>
          <li className='prod__item'>
            <div className='prod__rectangle prod__rectangle_ice'>
              <div className='prod__item-img'>
                <img src={icecream} alt='icecream' className='prod__img' />
                <div className='prod__circle_ice prod__circle'></div>
              </div>
              <h4 className='prod__item-title'>мороженое</h4>
              <p className='prod__item-text'>
                Мягкое мороженое с нежным вкусом. Изготовлено из молока, сливок,
                сахара и натурального стабилизатора
              </p>
              <Link to='/ingredients-ice'>
                <div className='prod__item-arrow'></div>
              </Link>
            </div>
          </li>
          <li className='prod__item'>
            <div className='prod__rectangle prod__rectangle_coffee'>
              <div className='prod__item-img'>
                <img src={coffee} alt='ice coffee' className='prod__img' />
                <div className='prod__circle_coffee prod__circle'></div>
              </div>
              <h4 className='prod__item-title'>кофе латте</h4>
              <p className='prod__item-text'>
                Ароматный бодрящий напиток, созданный из 100% натуральных
                ингредиентов без использования консервантов и усилителей вкуса.
              </p>
              <Link to='/ingredients-coffee'>
                <div className='prod__item-arrow'></div>
              </Link>
            </div>
          </li>
          <li className='prod__item'>
            <div className='prod__rectangle prod__rectangle_shake'>
              <div className='prod__item-img'>
                <img src={victor} alt='ice cream' className='prod__img' />
                <div className='prod__circle_shake prod__circle'></div>
              </div>
              <h4 className='prod__item-title'>коктейли</h4>
              <p className='prod__item-text'>
                Сладкие напитки на основе молока и мороженого, дополненные
                сиропами, фруктами, ягодами и другими сладостями на выбор
              </p>
              <Link to='/ingredients-shake'>
                <div className='prod__item-arrow'></div>
              </Link>
            </div>
          </li>
        </ul>
      </div>
      <div className='prod__background'></div>
    </section>
  );
}
