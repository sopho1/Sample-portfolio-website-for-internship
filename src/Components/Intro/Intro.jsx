import React from 'react'
import './Intro.css'
import Github from '../../img/github.png';
import LinkedIn from '../../img/linkedin.png';
import Instagram from '../../img/instagram.png';
import vector1 from '../../img/Vector1.png'
import vector2 from '../../img/Vector2.png'
import boy from '../../img/033.png'
import thumbup from '../../img/thumbup.png'
import Crown from '../../img/crown.png'
import glassesimoji from '../../img/glassesimoji.png'
import FloatingDiv from '../FloatingDiv/FloatingDiv';
import {themeContext} from "../../Context"
import { useContext } from 'react';
import Aos from 'aos';
import 'aos/dist/aos.css'
import { useEffect } from 'react';

const Intro = () => {
  useEffect(() => {
    Aos.init();
  }, [])
  const theme = useContext(themeContext);
  const darkmode = theme.state.darkmode;
  return (
    <div className="Intro">
        <div className="i-left" data-aos = "fade-right" data-aos-delay = "700"> 
          <div className="i-name">
            <span style={{color: darkmode? 'white': ''}}>Hi! I Am</span>
            <span>Sophonias Endale</span>
            <span>I'm 21 years old and I just graduated from Addis Ababa University with a CGPA of 3.7 in computer science and I'm currently in between jobs.</span>
          </div>
          <button className="button i-button">
            Hire Me
          </button>
          <div className="i-icons">
            <img src={Github} alt="" />
            <img src={LinkedIn} alt="" />
            <img src={Instagram} alt="" />
          </div>
        </div>
        <div className="i-right" data-aos = "fade-left" data-aos-delay = "700">
             <img src={vector1} alt="" />
             <img src={vector2} alt="" />
             <img src={boy} alt="" />
             <img src={glassesimoji} alt="" />
             <div style={{top: '-4%', left: '68%' }} className='Floating-Div'>
              <FloatingDiv image={Crown} txt1='Web' txt2='Developer'/>
             </div>
             <div style={{top: '18rem', left: '0rem'}} className='Floating-Div'> 
              <FloatingDiv image={thumbup} txt1='Best Design' txt2='Award'/>
             </div>


             <div className='blur' style={{background: "rgb(238 210 255)"}}> 
             <div className="blur" style={{background: '#C1F5FF', top: '17rem', width: '21rem', height: '11rem', left: '-37rem'}}></div>

             </div>

        </div>
    </div>
  )
}

export default Intro