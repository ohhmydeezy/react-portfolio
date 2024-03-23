import React from 'react';
import './hero.css';
import mainHeroImage from '/public/IMG_1717.png';

const name = "Dylan Gunda";

const Hero = () => {
    return (
        <div className="container">
            <div className="hero">
                <div className="hero-image">
                    <img src={mainHeroImage} alt="waving hero image" />
                </div>
                <div className="hero-content">
                    <h1>Hi, I'm <span className="text-primary">{name}</span></h1>
                    <p>Front-End Web Developer</p>
                </div>
            </div>
        </div>
    );
}

export default Hero;