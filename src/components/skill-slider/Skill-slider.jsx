import React, { useEffect } from 'react';
import "./skill-slider.css";
import HTML from "/public/html5-6646.svg";
import CSS from "/public/1200px-CSS.3.png";
import javascript from "/public/javascript-3.png";
import react from "/public/React-icon.svg.png";
import bootstrap from "/public/Bootstrap_logo.png";
import figma from "/public//Figma-1-logo.png";

const SkillSlider = () => {
    useEffect(() => {
        const logosSlide = document.querySelector('.logo-slide');
        if (logosSlide) {
            var copy = logosSlide.cloneNode(true);
            document.querySelector('.logos').appendChild(copy);
        } else {
            console.error('Element with class .logos-slide not found');
        }
    }, []); // Empty dependency array ensures this effect runs only once after initial render

    return (
        <div className="logos">
            <div className="logo-slide">
                <img src={HTML} alt="HTML5" />
                <img src={CSS} alt="CSS3"  />
                <img src={javascript} alt="JavaScript" />
                <img src={react} alt="React" />
                <img src={bootstrap} alt="Bootstrap" />
                <img src={figma} alt="figma" />
            </div>
        </div>
    );
}

export default SkillSlider;
