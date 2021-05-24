import React from 'react';

const Gym = ({url,name,location}) => {
    return (
        <div className="gym__item">
            <div className="gym__item-img">
                <img src={url} alt="Gym"/>
            </div>
            <div className="gym__item-name">
                {name}
            </div>
            <div className="gym__item-footer">
                <div className="gym__item-footer-btn">
                    <a href="#">страница клуба</a>
                </div>
                <div className="gym__item-location">
                    г. {location}
                </div>
            </div>
        </div>
    )
}

export default Gym;