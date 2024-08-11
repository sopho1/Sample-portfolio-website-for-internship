import React, { useState } from 'react'
import './Contact.css'
import emailjs from '@emailjs/browser'
import { useRef } from 'react'
import { themeContext } from '../../Context'
import { useContext } from 'react'
import Aos from 'aos';
import 'aos/dist/aos.css'
import { useEffect } from 'react';

const Contact = () => {

    useEffect(() => {
        Aos.init();
      }, [])

    const theme = useContext(themeContext);
   const darkmode = theme.state.darkmode;
    const form = useRef();

    const[done, setDone] = useState(false)

    const sendEmail = (e) => {
      e.preventDefault();
  
      emailjs.sendForm('service_e8aexqv', 'template_57fj0tn', form.current, 'fGW7JddoHXUT8_hFz')
        .then((result) => {
            console.log(result.text);
            setDone(true);
        }, (error) => {
            console.log(error.text);
        });
    };

  return (
    <div className="contact-form">
        <div className="w-left" data-aos = "fade-right" data-aos-delay="700">
            <div className="span">
                <span style={{color: darkmode? 'white': ''}}>Get In Touch</span>
                <span>Contact Me</span>
                <div className="blur s-blur1" style={{background: "#ABF1FF94"}}></div>
            </div>
        </div>
        <div className="c-right" data-aos = "fade-up-left" data-aos-delay="700">
            <form action="#" ref={form} onSubmit={sendEmail}>
                <input type="text" name='user-name' className='user' placeholder='Name' />
                <input type="email" name='user-email' className='user' placeholder='Email' />
                <textarea name="message" className='user' placeholder='Message'/>
                <input type="submit" value='Send' className='button' data-aos = "fade-up" data-aos-delay="700"/>
                <span>{done && 'Thanks for contacting me!'}</span>
                <div className="blur c-blur1" style={{background: 'var(--purple)'}}></div>
            </form>
        </div>
    </div>
  )
}

export default Contact