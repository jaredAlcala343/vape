// src/components/Slider.js
import React, { useState, useEffect, useRef } from 'react';
import './slider.css';

import slide1 from './images/SLIDE-1.png';
import slide2 from './images/SLIDE-2.png';
import slide3 from './images/SLIDE-3.png';


const images = [slide1, slide2, slide3];

const Slider = () => {
    const [currentSlide, setCurrentSlide] = useState(0);
    const [sliderHeight, setSliderHeight] = useState(0);
    const sliderRef = useRef();

    const nextSlide = () => {
        setCurrentSlide((currentSlide + 1) % images.length);
    };

    const prevSlide = () => {
        setCurrentSlide((currentSlide - 1 + images.length) % images.length);
    };

    useEffect(() => {
        const slideInterval = setInterval(nextSlide, 5000);
        return () => clearInterval(slideInterval);
    }, [currentSlide]);

    useEffect(() => {
        const img = new Image();
        img.src = images[currentSlide];
        img.onload = () => {
            setSliderHeight(img.height * sliderRef.current.offsetWidth / img.width);
        };
    }, [currentSlide]);

    return (
        <div className="slider" ref={sliderRef} style={{ height: sliderHeight }}>
            {images.map((image, index) => (
                <div
                    key={index}
                    className={`slide ${index === currentSlide ? 'active' : ''}`}
                    style={{ backgroundImage: `url(${image})` }}
                ></div>
            ))}
            <button className="prev" onClick={prevSlide}>&#10094;</button>
            <button className="next" onClick={nextSlide}>&#10095;</button>
        </div>
    );
};

export default Slider;
