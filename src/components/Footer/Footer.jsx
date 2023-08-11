import React from 'react';
import './Footer.css';

export default function Footer() {
  return (
<section className="footer">
            <div className="footer__container">
                <div className="footer__wrap">
                    <div className="footer__textblock">
                        <p className="footer__text-top">домашнее мороженое</p>
                        <p className="footer__text">это страсть</p>
                    </div>
                    <div className="footer__block">
                        <ul className="footer__social">
                            <li className="footer__item">
                                <a href="https://github.com/" 
                                   target="_blank"
                                   className="footer__link" 
                                   rel="noopener noreferrer"                                   
                                   ><button type="button" className="footer__button footer__button_github"></button>
                                </a>
                            </li>
                            <li className="footer__item">
                                <a href="https://web.telegram.org/" 
                                  target="_blank"
                                  className="footer__link footer__link_telegram" 
                                  rel="noopener noreferrer"
                                  ><button type="button" className="footer__button footer__button_telegram"></button>
                                  </a>
                            </li>
                            <li className="footer__item">
                                <a href="https://ru-ru.facebook.com/" 
                                   target="_blank"
                                   className="footer__link" 
                                   rel="noopener noreferrer"
                                   ><button type="button" className="footer__button footer__button_facebook"></button>
                                </a>
                            </li>
                        </ul>
                        <p className="footer__phone">Звонок бесплатный <span className="footer__number">+7(495)383 76 76</span>
                        </p>
                    </div>
                </div>
                <p className="footer__bottom">© 2023 - Ice. Все права защищены.</p>
            </div>
        </section>
    );
}