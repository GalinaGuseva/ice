import React from 'react';
import './Callback.css';
import painting from '../../img/brooke.jpg';
import girl from '../../img/Emily.jpg';
import boris from '../../img/Bryan.jpg';
import sam from '../../img/Sam.jpg';
import diana from '../../img/Diana.jpg';


export default function Callback() {
  return (
    <section className="callback">
      <div className='callback__wrap'>            
        <div className="callback__center">
          <img src={painting} alt="ice-cream-mix" className="callback__image" />
          <ul className="callback__customers">
            <li className="callback__item callback__item_active">
               <img src={girl} alt="customer-one" className="callback__photo" />
               <div className="callback__rectangle">
                  <p className="callback__text">Я люблю посещать ваше кафе. Вы готовите самое вкусное мороженое в городе! 
                  Кроме того, у вас красивая подача, уютная атмосфера и вежливый персонал.</p>
               </div>
              <p className="callback__name">Анюта, Тамбов</p>
              <div className="callback__dotes">
                 <div className="callback__dot callback__dot_active"></div>
                 <div className="callback__dot"></div>
                 <div className="callback__dot"></div>
              </div>
           </li>
           <li className="callback__item">
              <img src={boris} alt="customer-two" className="callback__photo" />
              <div className="callback__rectangle">
                <p className="callback__text">Каждый день мы приходим к вам с друзьями после занятий в колледже. 
                Мы любим ваше мороженое и непринужденную атмосферу!</p>
              </div>
              <p className="callback__name">Борис, Москва</p>
              <div className="callback__dotes">
                 <div className="callback__dot callback__dot_active"></div>
                 <div className="callback__dot"></div>
                 <div className="callback__dot"></div>
              </div>
           </li>
           <li className="callback__item">
             <img src={sam} alt="customer-three" className="callback__photo" />
             <div className="callback__rectangle">
               <p className="callback__text">Я люблю есть фруктовое мороженое в жаркий день. 
                У вас всегда вкусно. Всем знакомым рекомендую ваше кафе.</p>
             </div>
             <p className="callback__name">Сергей, Тамбов</p>
             <div className="callback__dotes">
               <div className="callback__dot callback__dot_active"></div>
               <div className="callback__dot"></div>
               <div className="callback__dot"></div>
             </div>
           </li>
           <li className="callback__item">
             <img src={diana} alt="customer-four" className="callback__photo" />
             <div className="callback__rectangle">
               <p className="callback__text">Мороженое - моя страсть! Обожаю ваше шоколадно-ореховое мороженое! 
                 И мне очень нравится отличный сервис - всегда обслуживают вежливо и быстро!
               </p>
             </div>
             <p className="callback__name">Диана, Калуга</p>
                <div className="callback__dotes">
                  <div className="callback__dot callback__dot_active"></div>
                  <div className="callback__dot"></div>
                  <div className="callback__dot"></div>
                </div>
           </li>
         </ul>          
       </div>
      </div>
     <div className="callback__background"></div>
    </section>
  );
}