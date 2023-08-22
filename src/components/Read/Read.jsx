import React from 'react';
import { Link } from 'react-router-dom';
import './Read.css';

export default function Read() {
  return (
    <div className='read'>
      <div className='read__container'>
        <h3 className='read__title'>Как делают мороженое?</h3>
        <div className='read__movie'>
          <iframe
            width='560'
            height='315'
            src='https://www.youtube.com/embed/XOR8Nw1eRKw'
            title='YouTube video player'
            frameborder='0'
            allow='accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share'
            allowfullscreen
          ></iframe>
        </div>
        <p className='read__text'>
          Моро́женое — замороженная сладкая масса из молочных продуктов с
          различными добавками.
        </p>
        <p className='read__text'>Мороженое изготавливается обычно из:</p>
        <p className='read__text'>молока,</p>
        <p className='read__text'>сливок,</p>
        <p className='read__text'>масла,</p>
        <p className='read__text'>сахара,</p>
        <p className='read__text'>вкусовых и ароматических веществ,</p>
        <p className='read__text'>
          различных пищевых добавок, обеспечивающих нужную консистенцию, срок
          хранения и т.д.
        </p>
        <p className='read__text'>
          Существуют различные сорта мороженого, например крем-брюле и пломбир.
        </p>
        <p className='read__text'>
          Мороженое — высококалорийный продукт, некоторые сорта мороженого
          содержат до 20 % жиров и до 20 % углеводов.
        </p>
        <p className='read__text'>
          Мороженое делится на закалённое и мягкое, второе обычно продаётся на
          развес, так как обладает кратким сроком хранения.
        </p>
        <p className='read__text'>
          Из мороженого также изготавливают молочные коктейли, добавляя в него
          молоко и сироп и взбивая получившуюся смесь в миксере.
        </p>
        <p className='read__text'>Виды мороженого:</p>
        <p className='read__text'>
          Сливочное мороженое (на основе животных и/или растительных жиров).
        </p>
        <p className='read__text'>
          Сорбет (щербет, шербет) (мягкое мороженое на основе фруктов, ягод,
          соков).
        </p>
        <p className='read__text'>
          Фруктовый лёд (относительно твёрдое мороженое на палочке на основе
          сока, обычно без молока).
        </p>
        <p className='read__text'>Мелорин (на основе растительных жиров)</p>
        <p className='read__text'>
          Процесс приготовления смеси включает в себя следующие стадии:
        </p>
        <p className='read__text'>
          подготовка исходного сырья; приготовление смеси для мороженого, путем
          смешивания сырьевых компонентов, согласно рецептуре;
        </p>
        <p className='read__text'>
          {' '}
          фильтрование и пастеризация смеси для очистки от механических примесей
          и патогенных микроорганизмов;
        </p>
        <p className='read__text'>
          {' '}
          гомогенизация смеси (дробление жировых шариков) для улучшения
          органолептических свойств готового мороженого;
        </p>
        <p className='read__text'>охлаждение до +4°С и созревания смеси.</p>
        <p className='read__text'>
          Процесс фризерования является, собственно, процессом превращения
          жидкой смеси в мороженое.
        </p>
        <p className='read__text'>
          Этот процесс проводят с помощью фризеров непрерывного действия, в
          которых смесь взбивается с воздухом и замороживается до температуры
          -4°С.
        </p>
        <p className='read__text'>
          Непосредственно после фризерования мороженое фасуют и закаливают
          (подвергают шоковой заморозке до -12°).
        </p>
        <Link to='/' className='in__link link'>
          Вернуться на главную страницу
        </Link>
      </div>
    </div>
  );
}
