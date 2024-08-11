import React from 'react'
import './Experience.css'
import Aos from 'aos';
import 'aos/dist/aos.css'
import { useEffect } from 'react';

const Experience = () => {
    useEffect(() => {
        Aos.init();
      }, [])
  return (
    <div className="Experience" id='Experience' data-aos = "fade-up">
        <div className="achievment">
            <div className="circle">
                2+
            </div>
            <span>Years</span>
            <span>Experience</span>
        </div>
        <div className="achievment">
            <div className="circle">2+</div>
            <span>Completed</span>
            <span>Projects</span>
        </div>
        <div className="achievment">
            <div className="circle">2+</div>
            <span>Companies</span>
            <span>work</span>
        </div>
    </div>
  )
}

export default Experience