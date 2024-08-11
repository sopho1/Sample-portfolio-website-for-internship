import React from 'react'
import './Footer.css'
import Wave from '../../img/wave.png'
import Insta from '@iconscout/react-unicons/icons/uil-instagram'
import Facebook from '@iconscout/react-unicons/icons/uil-facebook'
import Telegram from '@iconscout/react-unicons/icons/uil-telegram'

const Footer = () => {
  return (
    <div className="footer">
        <img src={Wave} alt="" style={{width: '100%'}} />

        <div className="f-content">
            <span style={{fontSize: '1.2rem'}}>sophoman215@gmail.com</span>
            <div className="icons">
              <a href="https://www.instagram.com/sofoendale/"> <Insta color='white' size='3rem'/> </a>
              <a href="https://www.facebook.com/endale.sofo"> <Facebook color='white' size='3rem'/> </a>
              <a href="https://t.me/sofo1"> <Telegram color='white' size='3rem'/> </a>
            </div>
            <div className="legal">
            <span style={{fontSize: '1.2rem'}}> &copy; 2023 All rights reserved</span>
            </div>
        </div>

    </div>
  )
}

export default Footer