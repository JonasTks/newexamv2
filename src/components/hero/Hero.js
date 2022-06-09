import React from 'react'

import './Hero.css';
import BannerImg from "./peakpx.jpg"
import { Link } from 'react-router-dom';

const Hero = () => {
    return (
        <div className="hero">
            <div className="mask">
                <img className="banner-img" src={BannerImg} alt="bannerimg" />
            </div>
            <div className="content">
                <p>HI, I’M A FRONT-END DEVELOPER.</p>
                <h1>ReactJS & Magento</h1>
                <div>
                    <Link to='/projects' className='btn'>Projects</Link>
                    <Link to='/contact' className='btn btn-transparent'>Contact</Link>
                </div>
            </div>
        </div>
    )
}

export default Hero