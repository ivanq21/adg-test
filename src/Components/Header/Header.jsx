import React from 'react';
import s from './Header.scss'
import logo from '../../assets/new_logo.png';
import vk_logo from '../../assets/vk.svg';
import inst_logo from '../../assets/instagram.svg';

const Header = () => {
  return (
      <div className="header">
        <div className="header__container container">
          <div className="header__logo logo">
            <a className="logo__img" href="/">
              <img src={logo} alt=""/>
            </a>
            <div className="logo__text-wrapper">
              <div className="logo__title">ООО «Компания ЗИП Сервис»</div>
              <div className="logo__description">Производство теплообменников, пластины и уплотнения</div>
            </div>
          </div>
          <div className="header__social">
            <a href="" target="_blank"><img src={vk_logo} alt="" width="20" /></a>
            <a href="" target="_blank"><img src={inst_logo} alt="" width="20" /></a>
          </div>
          <div className="header__btn">
            <div className="btn">Заказать звонок</div>
          </div>
          <div className="header__contacts">
              <div className="header__phone contacts__phone">+7 8352 21-11-11</div>
              <div className="header__email contacts__email">E-mail: mail@zipservis.com</div>
          </div>
        </div>
      </div>
  )
}

export default Header;