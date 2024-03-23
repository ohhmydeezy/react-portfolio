import React from 'react';
import './contact-hero.css';
import heroImage from './public/IMG_1746.PNG';

const ContactHero = () => {
    return (
        <div className="container">
            <div className="hero">
                <div className="hero-image">
                    <img src={heroImage} alt="contact hero image" />
                </div>
                <div className="hero-content">
                    <h1>Get In Touch</h1>
                    <p>Let's talk about your next project</p>
                </div>
            </div>
        </div>
    );
}

export default ContactHero;
