import React from "react";
import ContactHero from "../../contact-hero/Contact-hero";
import ContactForm from "../../form/contact-form.jsx";
import '../../form/contact-form.css';

import logo from './src/assets/images/IMG_1718.PNG';

function Contact() {
    return (
        <>
            <ContactHero />
            <div>
                <div className="contact-link-bubble">
                    <p>
                        If you like what you see so far, there’s plenty more where that came <br />
                        from. I don’t need every detail about your idea, just a few lines to get the ball rolling, <br />
                        if this interests you, enter your details below:
                    </p>
                </div>
            </div>
                <div className="timestamp">
                    <img src={logo} alt="Logo" className="d-inline-block align-text-top" />
                    <p>Now</p>
                </div>
            <ContactForm />
        </>
    );
}

export default Contact;

