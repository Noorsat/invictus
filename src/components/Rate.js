import React from 'react';
import './../App.css';

const Rate = ( ) => {
    return (
        <section className="rate">
            <div className="container">
                <div className="rate__title">
                    <h1>ТАРИФЫ</h1>
                </div>
                <div className="rate__items">
                    <div className="rate__item">
                        <div className="rate__item-header">
                            <div className="rate__item-first">
                                <span>
                                    месяц<br></br>
                                </span>
                                Первый месяц - 15 000тг
                            </div>
                            <div className="rate__item-second">
                                <span>9900 тг</span><br></br>со второго месяца
                            </div>
                        </div>
                        <div className="rate__item-list">
                            <div className="rate__item-list-item">
                                <div className="rate__item-list-img">
                                    <img src="images/correct.png"/>
                                </div>
                                <div className="rate__item-list-text">
                                    Комфортная ежемесячная оплата
                                </div>
                            </div>
                            <div className="rate__item-list-item">
                                <div className="rate__item-list-img">
                                    <img src="images/correct.png"/>
                                </div>
                                <div className="rate__item-list-text">
                                    Безлимитное посещение тренажерного зала
                                </div>
                            </div>
                            <div className="rate__item-list-item">
                                <div className="rate__item-list-img">
                                    <img src="images/correct.png"/>
                                </div>
                                <div className="rate__item-list-text">
                                    Шкафчик в раздевалке
                                </div>
                            </div>
                            <div className="rate__item-list-item">
                                <div className="rate__item-list-img">
                                    <img src="images/correct.png"/>
                                </div>
                                <div className="rate__item-list-text">
                                    Сауна
                                </div>
                            </div>
                            <div className="rate__item-list-item">
                                <div className="rate__item-list-img">
                                    <img src="images/correct.png"/>
                                </div>
                                <div className="rate__item-list-text">
                                    Заморозка
                                </div>
                            </div>
                        </div>
                        <div className="rate__item-footer">
                            <img src="images/rate.png"/>
                        </div>
                    </div>
                    <div className="rate__item">
                    <div className="rate__item-header">
                            <div className="rate__item-first">
                                <span>
                                    год<br></br>
                                </span>
                                Первый месяц - 15 000тг
                            </div>
                            <div className="rate__item-second">
                                <span>7900 тг</span><br></br>со второго месяца
                            </div>
                        </div>
                        <div className="rate__item-list">
                            <div className="rate__item-list-item">
                                <div className="rate__item-list-img">
                                    <img src="images/gift.png"/>
                                </div>
                                <div className="rate__item-list-text">
                                Две персональные тренировки в подарок Комфортная ежемесячная оплата
                                </div>
                            </div>
                            <div className="rate__item-list-item">
                                <div className="rate__item-list-img">
                                    <img src="images/correct.png"/>
                                </div>
                                <div className="rate__item-list-text">
                                    Комфортная ежемесячная оплата
                                </div>
                            </div>
                            <div className="rate__item-list-item">
                                <div className="rate__item-list-img">
                                    <img src="images/correct.png"/>
                                </div>
                                <div className="rate__item-list-text">
                                    Безлимитное посещение тренажерного зала
                                </div>
                            </div>
                            <div className="rate__item-list-item">
                                <div className="rate__item-list-img">
                                    <img src="images/correct.png"/>
                                </div>
                                <div className="rate__item-list-text">
                                    Шкафчик в раздевалке
                                </div>
                            </div>
                            <div className="rate__item-list-item">
                                <div className="rate__item-list-img">
                                    <img src="images/correct.png"/>
                                </div>
                                <div className="rate__item-list-text">
                                    Сауна
                                </div>
                            </div>
                            <div className="rate__item-list-item">
                                <div className="rate__item-list-img">
                                    <img src="images/correct.png"/>
                                </div>
                                <div className="rate__item-list-text">
                                    Заморозка
                                </div>
                            </div>
                        </div>
                        <div className="rate__item-footer-2">
                            <img src="images/rate.png"/>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Rate;