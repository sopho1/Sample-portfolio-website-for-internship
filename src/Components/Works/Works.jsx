import React from 'react'
import './Works.css'
import Upwork from '../../img/Upwork.png'
import Fiverr from '../../img/fiverr.png'
import Amazon from '../../img/amazon.png'
import Shopify from '../../img/Shopify.png'
import Facebook from '../../img/Facebook.png'
import { themeContext } from '../../Context'
import { useContext } from 'react' 
import Aos from 'aos';
import 'aos/dist/aos.css'
import { useEffect } from 'react';

const Works = () => {
  useEffect(() => {
    Aos.init();
  }, [])
  const theme = useContext(themeContext);
  const darkmode = theme.state.darkmode;
  return (
    <div className="Works">
        <div className="awesome" data-aos = "fade-right" data-aos-delay = "500">

<span style={{color: darkmode? 'white': ''}}> Currently Working for All these</span>
<span>Brands & clients</span>
<spane> Facebook 
<br/>
Shopify <br/> Upwork <br/> Fiverr</spane>
<button className="button s-button">
    HIRE ME
</button>
<div className="blur s-blurl" style={{background: '#ABF1FF94'}}></div>
        </div>

   
         <div className="w-right" data-aos = "fade-left" data-aos-delay = "500">
            <div className="w-mainCircle">

               <div className="w-secCircle">
                <img src={Upwork} alt="" />
               </div>
               
               <div className="w-secCircle">
                <img src={Fiverr} alt="" />
               </div>

               <div className="w-secCircle">
                <img src={Amazon} alt="" />
               </div>
               
               <div className="w-secCircle">
                <img src={Shopify} alt="" />
               </div>
               
               <div className="w-secCircle">
                <img src={Facebook} alt="" />
               </div>
            </div>
            <div className="w-backCircle blueCircle"></div>
            <div className="w-backCircle yellowCircle"></div>
         </div>



    </div>
  )
}

export default Works