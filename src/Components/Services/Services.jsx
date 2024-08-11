import React from 'react'
import './Services.css'
import HeartEmoji from '../../img/heartemoji.png';
import Glasses from '../../img/glasses.png';
import Humble from '../../img/humble.png';
import Card from '../Card/Card';
import { themeContext } from '../../Context';
import { useContext } from 'react';
import Aos from 'aos';
import 'aos/dist/aos.css'
import { useEffect } from 'react';

const Services = () => {
  useEffect(() => {
    Aos.init();
  }, [])
  const theme = useContext(themeContext);
  const darkmode = theme.state.darkmode;
  return (
    <div className="services" id='Services'>
         
         <div className="awesome" data-aos = "fade-right" data-aos-delay = "500">

            <span style={{color: darkmode? 'white': ''}}>My Awesome</span>
            <span>Services</span>
            <spane> 1) I'm a Frontend developer with experience in web designing and development.
            <br/> 2) Graphics Design <br/> 3) Video Editing.
              </spane> 
            <button className="button s-button">
                Download CV 
            </button>
            <div className="blur s-blurl" style={{background: '#ABF1FF94'}}></div>
         </div>

         <div className="cards" data-aos = "fade-down-left" data-aos-delay = "500">
             <div style={{left: '34rem'}}>
                <Card 
                emoji = {HeartEmoji}
                heading = {'Design'}
                detail = {"HTML, Photoshop, Adobe"}
                />
             </div>

            <div style={{top: "12rem", left: "2rem"}}>

                <Card 
                
                emoji={Glasses}
                heading={"Developer"}
                detail={"HTML, CSS, JAVASCRIPT, REACT"}
                
                />

            </div>

            <div style={{top: "19rem", left: "22rem"}}>

                <Card 

                emoji={Humble}
                heading={"UI/UX"}
                detail={"Provide services of user experience and user interface."}

                />

            </div>

            <div className="blur s-blur2" style={{background:"var(--purple)"}}></div>

         </div>

    </div>
  )
}

export default Services