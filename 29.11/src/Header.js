import React from 'react';

const Header = () => {
    return (
        <header className='header'>
            <ul className="header__menu menu">
                <li className="menu__item"><a href="#" className="menu__link">Главная</a></li>
                <li className="menu__item"><a href="#" className="menu__link">Новости</a></li>
                <li className="menu__item"><a href="#" className="menu__link">Контакты</a></li>
                <li className="menu__item"><a href="#" className="menu__link">О нас</a></li>
            </ul>
        </header>
    );
};

export default Header;