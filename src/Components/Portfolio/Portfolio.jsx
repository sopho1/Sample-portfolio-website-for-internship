import React from 'react'
import './Portfolio.css'
import {Swiper, SwiperSlide} from 'swiper/react'
import Sidebar from '../../img/sidebar.png'
import Ecommerce from '../../img/ecommerce.png'
import Hoc from '../../img/hoc.png'
import MusicApp from '../../img/musicapp.png'
import 'swiper/css'
import { themeContext } from '../../Context'
import { useContext } from 'react'

const Portfolio = () => {
   const theme = useContext(themeContext);
   const darkmode = theme.state.darkmode;
  return (
    <div className="porfolio" id='Portfolio' style={{display: 'flex', alignItems: 'center', justifyContent: 'center', flexDirection: 'column', height: '70vh'}}>
        <span style={{color: 'black', fontSize: '2rem', fontWeight: 'bold', color:darkmode?'white':''}}>Recent Projects</span>
        <span style={{color: 'orange', fontSize: '2.5rem', fontWeight: 'bold'}}>Portfolio</span> 
        <Swiper style={{overflow: 'visible'}}
        
        spaceBetween={30}
        slidesPerView={3}
        grabCursor={true}
        className='portfolio-slider'
        
        >
         <SwiperSlide style={{width: '100%', marginTop: '3rem'}}>
            <img src={Sidebar} alt=""  style={{width: '29rem', borderRadius: '19px'}}/>
         </SwiperSlide>
         
         <SwiperSlide style={{width: '100%', marginTop: '3rem'}}>
            <img src={Ecommerce} alt="" style={{width: '29rem', borderRadius: '19px'}}/>
         </SwiperSlide>
         
         <SwiperSlide style={{width: '100%', marginTop: '3rem'}}>
            <img src={Hoc} alt=""  style={{width: '29rem', borderRadius: '19px'}}/>
         </SwiperSlide>
         
         <SwiperSlide style={{width: '100%', marginTop: '3rem'}}>
            <img src={MusicApp} alt=""  style={{width: '29rem', borderRadius: '19px'}}/>
         </SwiperSlide>
        </Swiper>
    </div>
  )
}

export default Portfolio