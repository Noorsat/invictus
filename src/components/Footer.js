import React from 'react';

const Footer = () => {
    return (
        <footer className="footer">
            <div className="container">
                <div className="footer__columns">
                    <div className="footer__column">
                        <div className="footer__logo">
                            <img src="images/footer-logoo.png"/>
                        </div>
                        <div className="footer__socials">
                             <div className="footer__social">
                                <img src="images/facebook.png"/>
                             </div>
                             <div className="footer__social">
                                <img src="images/insta.png"/>
                             </div>
                        </div>
                        <div className="footer__powered">
                            Powered by Invictus Fitness
                        </div>
                    </div>
                    <div className="footer__column">
                        <div className="footer__title">
                            ФРАНЧАЙЗИ
                        </div>
                        <div className="footer__text">
                            Invictus Franchising
                        </div>
                    </div>
                    <div className="footer__column">
                        <div className="footer__title">
                            МЕНЮ
                        </div>
                        <div className="footer__text">
                            Invictus Franchising
                        </div>
                        <div className="footer__text">
                            Абонементы
                        </div>
                        <div className="footer__text">
                            Клубы
                        </div>
                        <div className="footer__text">
                            Тренеры
                        </div>
                    </div>
                    <div className="footer__column">
                        <div className="footer__title">
                            КОНТАКТЫ
                        </div>
                        <div className="footer__text">
                            Invictus GO Emerald
                        </div>
                        <div className="footer__text">
                            8 702 654 42 09
                        </div>
                        <div className="footer__text">
                            Invictus GO Aksay
                        </div>
                        <div className="footer__text">
                            8 778 097 04 78
                        </div>
                        <div className="footer__text">
                            Invictus GO Sauran
                        </div>
                        <div className="footer__text">
                            8 775 888 11 60
                        </div>
                    </div>
                </div>
            </div>
        </footer>
    )
}

export default Footer;