import React from 'react';
import './../App.css';

const Header = () => {
    return (
        <header className="header">
            <div className="container">
                <div className="header__wrapper">
                    <div className="header__logo">
                        <img src="images/logo.png" alt="Logo"/>
                    </div>
                    <nav className="header__nav">
                        <ul className="header__list">
                            <li>ГЛАВНАЯ</li>
                            <li>КЛУБЫ</li>
                            <li>АБОНЕМЕНТЫ</li>
                            <li>ВОПРОСЫ</li>
                            <li>ТРЕНЕРЫ</li>
                            <li>КОНТАКТЫ</li>
                        </ul>
                    </nav>
                </div>
                <div className="header__main">
                    <div className="header__title">
                        <h1>BE ONE OF US</h1>
                    </div>
                    <div className="header__text">
                        Сеть автоматизированных фитнес-клубов нового поколения
                        <br></br>Безлимитный абонемент всего за 9900 тг в месяц
                    </div>
                    <div className="header__btn">
                        <button>купить абонемент</button>
                    </div>
                </div>
            </div>
        </header>
    )
}

export default Header;