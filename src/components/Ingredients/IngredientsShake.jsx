import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import './Ingredients.css';
import shake from '../../img/victor.jpg';

export default function IngredientsShake({ onSubmit }) {
  const inputValues = { name: '', phone: '', comment: '' };
  const [values, setValues] = useState(inputValues);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setValues({ ...values, [name]: value });
  };

  function handleSubmit(e) {
    e.preventDefault();
    let message = `Выбран шоколадный коктейль. Имя: ${values.name}, тел: ${values.phone}, комментарий: ${values.comment},`;
    onSubmit(message);
    setValues(inputValues);
  }

  return (
    <div className='in__back'>
      <div className='in__container'>
        <h4 className='in__title'>Молочный коктейль</h4>
        <div className='in__box'>
          <img src={shake} alt='shake' className='in__photo' />
          <div className='in__img'></div>
        </div>

        <ul className='in__items'>
          <li className='in__item'>
            <div className='in_circle'>320</div>
            <p className='in__name'>kcal</p>
          </li>
          <li className='in__item'>
            <div className='in_circle'>4g</div>
            <p className='in__name'>Protein</p>
          </li>
          <li className='in__item'>
            <div className='in_circle'>8,2g</div>
            <p className='in__name'>Fats</p>
          </li>
          <li className='in__item'>
            <div className='in_circle'>40,4g</div>
            <p className='in__name'>Carbs</p>
          </li>
        </ul>

        <div className='in__titl'>Ингредиенты</div>
        <ul className='in__list'>
          <li className='in__element'>
            <p className='in__ingredients'>Молоко</p>
            <span className='in__weight'>100ml</span>
          </li>
          <li className='in__element'>
            <p className='in__ingredients'>Бельгийский шоколад</p>
            <span className='in__weight'>20g</span>
          </li>
          <li className='in__element'>
            <p className='in__ingredients'>Сливки</p>
            <span className='in__weight'>150ml</span>
          </li>
          <li className='in__element'>
            <p className='in__ingredients'>Какао-порошок</p>
            <span className='in__weight'>30g</span>
          </li>
          <li className='in__element'>
            <p className='in__ingredients'>Сахар</p>
            <span className='in__weight'>40g</span>
          </li>
          <li className='in__element'>
            <p className='in__ingredients'>Ванильный сахар</p>
            <span className='in__weight'>10g</span>
          </li>
        </ul>

        <form
          name='buy-now'
          className='in__form'
          onSubmit={handleSubmit}
          noValidate
        >
          <fieldset className='in__form-set'>
            <div className='in__field'>
              <input
                id='buy-name'
                name='name'
                type='text'
                placeholder='Ваше имя'
                className='in__input'
                value={values.name || ''}
                onChange={handleChange}
                required
              />
            </div>
            <div className='in__field'>
              <input
                id='in-phone'
                name='phone'
                type='tel'
                placeholder='Номер телефона'
                className='in__input'
                value={values.phone || ''}
                onChange={handleChange}
                required
              />
            </div>
            <div className='popup__field popup__field_comment'>
              <input
                id='comment'
                name='comment'
                placeholder='Комментарий к заказу'
                type='text'
                className='in__input'
                value={values.comment || ''}
                onChange={handleChange}
              />
            </div>
          </fieldset>
          <button
            type='submit'
            className='in__button link_button'
            disabled={!values.name || !values.phone}
          >
            Отправить
          </button>
        </form>
        <Link to='/' className='in__link link'>
          Вернуться на главную страницу
        </Link>
      </div>
    </div>
  );
}
