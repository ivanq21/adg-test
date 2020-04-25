import React from 'react';
import s from './Catalog.scss'

const Catalog = () => {
  return (
    <div className="catalog">
     
        <div className="catalog__groups">
          <div className="catalog__title">КАТАЛОГ</div>
          <div className="catalog__group">
            <div className="catalog__group-name">Теплообменники</div>
            <ul className="catalog__list">
              <li className="catalog__item"><a className="catalog__link catalog__link--active" href="/" title="Каталог">Теплообменники SIGMA</a></li>
              <li className="catalog__item"><a className="catalog__link" href="/" title="Цены">Теплообменники Ares</a></li>
              <li className="catalog__item"><a className="catalog__link" href="/" title="Доставка и оплата">Теплообменники Funke</a></li>
            </ul>
          </div>
          <div className="catalog__group">
            <div className="catalog__group-name">Пластины</div>
            <ul className="catalog__list">
              <li className="catalog__item"><a className="catalog__link" href="/" title="Каталог">Пластины SIGMA</a></li>
              <li className="catalog__item"><a className="catalog__link" href="/" title="Цены">Пластины Ares</a></li>
              <li className="catalog__item"><a className="catalog__link" href="/" title="Доставка и оплата">Пластины Funke</a></li>
            </ul>
          </div>
        </div>

    </div>
  )
}

export default Catalog;