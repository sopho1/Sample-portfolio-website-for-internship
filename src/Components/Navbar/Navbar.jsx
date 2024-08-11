import React from 'react'
import './Navbar.css'
import Toggle from '../Toggle/Toggle'
import { Link } from 'react-scroll'
import Aos from 'aos'
import { useEffect } from 'react'
import 'aos/dist/aos.css'

const Navbar = () => {
    useEffect(() => {
        Aos.init();
    }, [])
  return (
    <div className="n-wrapper" data-aos = "fade-down" data-aos-delay = "200">
        <div className="n-left">
            <div className="n-name">
                Sophonias
                <Toggle/>
            </div>
        </div>
        <div className="n-right">
            <div className="n-list">
                <ul style={{listStyleType: 'none'}}>

                    <Link spy={true} to='Navbar' smooth={true}>
                    <li>Home</li>
                    </Link>
                    <Link spy={true} to='Services' smooth={true}> 
                    <li>Services</li>
                    </Link>
                    <Link spy={true} to='Experience' smooth={true}>
                    <li>Experience</li>
                    </Link>
                    <Link spy={true} to='Portfolio' smooth={true}>
                    <li>Portfolio</li>
                    </Link>
                    <Link spy={true} to='Testimonials' smooth={true}>
                    <li>Testimonials</li>
                    </Link>
                </ul>
            </div>
            <button className="button n-button">
                Contact Me
            </button>
        </div>
    </div>
  )
}

export default Navbar