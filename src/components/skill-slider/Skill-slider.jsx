import React, { useEffect } from 'react';
import "./skill-slider.css";
import HTML from "./pulic/html5-6646.svg";
import CSS from "./pulic/css-3.svg";
import javascript from "./pulic/javascript-3.png";
import react from "./pulic/react-2.svg";
import bootstrap from "../pulic/bootstrap-4.svg";
import figma from "./pulic//figma-1.svg";

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
