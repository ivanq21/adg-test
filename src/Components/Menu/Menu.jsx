import React from 'react';
import s from './Menu.scss'

const Menu = () => {
  return (
    <div className="menu">
      <div className="menu__container container">
        <ul className="menu__list">
          <li className="menu__item menu__item--active">Главная</li>
          <li className="menu__item"><a className="menu__link" href="/" title="Каталог">Каталог</a></li>
          <li className="menu__item"><a className="menu__link" href="/" title="Цены">Цены</a></li>
          <li className="menu__item"><a className="menu__link" href="/" title="Доставка и оплата">Доставка и оплата</a></li>
          <li className="menu__item"><a className="menu__link" href="/" title="Опросный лист">Опросный лист</a></li>
          <li className="menu__item"><a className="menu__link" href="/" title="Фотогалерея">Фотогалерея</a></li>
          <li className="menu__item"><a className="menu__link" href="/" title="Производство">Производство</a></li>
          <li className="menu__item"><a className="menu__link" href="/" title="Контакты и реквизиты">Контакты и реквизиты</a></li>
        </ul>
      </div>
    </div>
  )
}

export default Menu;