import React, { useState } from 'react';
import './BuyPopup.css';
import icecream from '../../img/kelsey-curtis.jpg';
import coffee from '../../img/pariwat.jpg';
import milkshake from '../../img/victor.jpg';

export default function BuyPopup({ isOpen, onClose, onSubmit }) {
  const [choice, setChoice] = useState(false);
  const inputValues = { name: '', phone: '', comment: '' };
  const [values, setValues] = useState(inputValues);

  const onChoiceChange = (e) => {
    setChoice(e.target.value);
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setValues({ ...values, [name]: value });
  };

  function handleSubmit(e) {
    e.preventDefault();
    let message = `Имя: ${values.name}, тел: ${values.phone}, выбрано:${choice}`;
    onSubmit(message);
    setValues(inputValues);
    setChoice(false);
  }

  return isOpen ? (
    <div className={`popup ${isOpen && 'popup_opened'}`} onClick={onClose}>
      <div
        className='popup__container'
        onClick={(e) => {
          e.stopPropagation();
        }}
      >
        <div className='popup__center'>
          <button
            type='button'
            className='popup__btn-close'
            title='Закрыть'
            onClick={onClose}
          ></button>
          <h4 className='popup__title'>Купить сейчас</h4>

          <form
            name='buy-choice'
            className='popup-form'
            onSubmit={handleSubmit}
            noValidate
          >
            <fieldset className='popup__choices'>
              <input
                type='radio'
                id='ice'
                className='popup__choice_ice'
                name='choice'
                value='icecream'
                checked={choice === 'icecream'}
                onChange={onChoiceChange}
              />
              <label htmlFor='ice' className='popup__ice'>
                <img src={icecream} alt='ice cream' className='popup__image' />
                <div className='popup__choice-circle buy__circle_ice'></div>
                <p className='popup__description'>пломбир</p>
              </label>

              <input
                type='radio'
                id='coffee'
                className='popup__choice_coffee'
                name='choice'
                value='coffee'
                checked={choice === 'coffee'}
                onChange={onChoiceChange}
              />
              <label htmlFor='coffee' className='popup__coffee'>
                <img src={coffee} alt='ice coffee' className='popup__image' />
                <div className='popup__choice-circle buy__circle_coffee'></div>
                <p className='popup__description'> айс-кофе</p>
              </label>

              <input
                type='radio'
                id='shake'
                name='choice'
                value='shake'
                className='popup__choice_shake'
                checked={choice === 'shake'}
                onChange={onChoiceChange}
              />
              <label htmlFor='shake' className='popup__shake'>
                <img src={milkshake} alt='milkshake' className='popup__image' />
                <div className='popup__choice-circle buy__circle_shake'></div>
                <p className='popup__description'>коктейли</p>
              </label>
            </fieldset>

            <fieldset className='popup__form-set'>
              <div className='popup__field'>
                <input
                  id='buy-name'
                  name='name'
                  type='text'
                  placeholder='Ваше имя'
                  className='popup__input'
                  value={values.name || ''}
                  onChange={handleChange}
                  required
                />
              </div>
              <div className='popup__field'>
                <input
                  id='popup-phone'
                  name='phone'
                  type='tel'
                  placeholder='Номер телефона'
                  className='popup__input'
                  value={values.phone || ''}
                  onChange={handleChange}
                  required
                />
              </div>
              <div className='popup__field popup__field_comment'>
                <input
                  id='comment'
                  name='comment'
                  placeholder='Комментарий'
                  type='text'
                  className='popup__input'
                  value={values.comment || ''}
                  onChange={handleChange}
                />
              </div>
            </fieldset>
            <button
              type='submit'
              className='popup__button link_button'
              disabled={!values.name || !values.phone || !choice}
            >
              Отправить
            </button>
          </form>
        </div>
      </div>
    </div>
  ) : null;
}
