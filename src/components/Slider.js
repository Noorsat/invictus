import React from 'react';
import './../App.css';
import { SliderData } from './SliderData';
import { Slider2Data } from './Slider2Data';
import { Slider3Data } from './Slider3Data';

const Slider = ({current,setCurrent,slides,title,setTitle}) => {
    const length = slides.length;
    if (!Array.isArray(slides) || slides.length <= 0){
        return null;
    }

    const nextSlide = () => {
        setCurrent(current === length-1 ? 0 : current+1)
    }

    const prevSlide = () => {
        setCurrent(current === 0 ? length-1 : current-1)
    }

    const setTitleName = (e) => {
        setTitle(e.target.innerText.toLowerCase());
        switch (e.target.innerText.toLowerCase()){
            case "залы":
                e.target.classList.add("active");
                document.getElementById('program').classList.remove("active");
                document.getElementById('practice').classList.remove("active");
                break;
            case "программы":
                e.target.classList.add("active");
                document.getElementById('gym').classList.remove("active");
                document.getElementById('practice').classList.remove("active");
                break; 
            case "тренировки":
                e.target.classList.add("active");
                document.getElementById('gym').classList.remove("active");
                document.getElementById('program').classList.remove("active");
                break; 
        }
    }

    return (
        <section className="sliderS">
            <div className="container">
                <div className="slider__titles">
                    <div className="slider__title active" onClick={setTitleName} id="gym">
                        ЗАЛЫ
                    </div>
                    <div className="slider__title" onClick={setTitleName} id="program">
                        ПРОГРАММЫ
                    </div>
                    <div className="slider__title" onClick={setTitleName} id="practice">
                        ТРЕНИРОВКИ
                    </div>
                </div>
            <div className="slider">
                <div className="left-arr">
                    <img src="images/left-arr.png" onClick={prevSlide}/>
                </div>
                <div>
                {
                title === "залы" ? SliderData.map((slide,index) => {
                    return(                            
                        <div className={index === current ? 'slide active' : 'slide'} key={index}>
                            {index === current && (
                                <img src={slide.image} alt="" className="image"/>
                            )}
                        </div>
                    )
                }) : null
                }   
                {
                title === "программы" ? Slider2Data.map((slide,index) => {
                    return(                            
                        <div className={index === current ? 'slide active' : 'slide'} key={index}>
                            {index === current && (
                                <img src={slide.image} alt="" className="image"/>
                            )}
                        </div>
                    )
                }) : null
                }
                {
                title === "тренировки" ? Slider3Data.map((slide,index) => {
                    return(                            
                        <div className={index === current ? 'slide active' : 'slide'} key={index}>
                            {index === current && (
                                <img src={slide.image} alt="" className="image"/>
                            )}
                        </div>
                    )
                }) : null
                }
                </div>
                <div className="right-arr">
                    <img src="images/right-arr.png" onClick={nextSlide}/>
                </div>
            </div>
            <div className="main__card">
                <div className="main__card-text">
                    Просторный тренажерный зал, оборудованный италь- янскими премиальными тренажерами Panatta Sport
                </div>
                <div className="main__card-title">
                    GO
                </div>
            </div>
            </div>
        </section>
    )
}

export default Slider;