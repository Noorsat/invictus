import React from 'react';
import './../App.css';
import Gym from './Gym';

const Gyms = () => {
    const data = [
        {
            "name": "INVICTUS GO EMERALD",
            "location": "Астана",
            "url" : "https://static.seattletimes.com/wp-content/uploads/2020/05/urn-publicid-ap-org-6dbd9ad370add2ba299c7da46c25004fVirus_Outbreak_Florida_39312-780x519.jpg"
        },
        {
            "name": "INVICTUS GO AKSAY",
            "location": "Алматы",
            "url" : "https://static.seattletimes.com/wp-content/uploads/2020/05/urn-publicid-ap-org-6dbd9ad370add2ba299c7da46c25004fVirus_Outbreak_Florida_39312-780x519.jpg"
        },
        {
            "name": "INVICTUS GO SAURAN",
            "location": "Астана",
            "url" : "https://static.seattletimes.com/wp-content/uploads/2020/05/urn-publicid-ap-org-6dbd9ad370add2ba299c7da46c25004fVirus_Outbreak_Florida_39312-780x519.jpg"
        }
    ]
    return (
        <section className="gyms">
            <div className="container">
                <div className="gyms__title">
                    ЗАЛЫ <span>INVISTUS GO</span>
                </div> 
                <div className="gym__items">
                    {
                        data.map((item,index) => {
                            return (
                                <Gym url={item.url} name={item.name} location={item.location} key={index}/>
                            )
                        })    
                    }
                </div>
            </div>
        </section>
    )
}

export default Gyms;