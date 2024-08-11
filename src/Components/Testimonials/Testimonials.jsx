import React from 'react'
import './Testimonials.css'
import { Swiper, SwiperSlide } from 'swiper/react'
import profilepic1 from '../../img/profile1.jpg'
import profilepic2 from '../../img/profile2.jpg'
import profilepic3 from '../../img/profile3.jpg'
import profilepic4 from '../../img/profile4.jpg';
import 'swiper/css'
import Aos from 'aos';
import 'aos/dist/aos.css'
import { useEffect } from 'react';

const Testimonials = () => {

    useEffect(() => {
        Aos.init();
      }, [])

   const clients = [
    {
       img: profilepic1,
       review: "Sophonias was very helpful and fast to respond to my inquiry to help with our website issues."},
       {
        img: profilepic2,
       review: "From the start of the project, through to completion, Sophonias supported us and exceeded our expectations in every way. Not only was our experience personal and friendly, his ability to identify and present our key messages in an imaginative and creative way gave us a huge amount of confidence in him."
       },
       {
        img: profilepic3,
       review: "Very helpful when building my website, I now have my ecommerce store built from scratch."
       },
       {
        img: profilepic4,
       review: "Sophonias is a great help managing a very out of date website. Everything we ask him to do is done quickly and efficiently, we would be lost without him."
       }
   ]


  return (
    <div className="t-wrapper" id='Testimonials'>
        <div className="t-heading" data-aos = "fade-right" data-aos-delay = "500">
            <span>Clients always get</span>
            <span>Exceptional work</span>
            <span>From me...</span>

            <div className="blur t-blur1" style={{background: "var()--purple"}}></div>
            <div className="blur t-blur2" style={{background: "skyblue"}} data-aos = "fade-left" data-aos-delay = "500"></div>
        </div>
        <Swiper>

            {clients.map((clients, index)=> {
                return(
                    <SwiperSlide key={index}> 

                    <div className="testimonial">
                    
                    <img src={clients.img} alt="" />
                    <span>{clients.review}</span>
                    </div>
                     </SwiperSlide>
                )
            })}

        </Swiper>
    </div>
  )
}

export default Testimonials