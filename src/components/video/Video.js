import React from 'react'
import ReactPlayer from 'react-player'
import { FaCss3, FaHtml5, FaMagento, FaReact } from 'react-icons/fa'
import { SiAdobeillustrator } from 'react-icons/si'

import './Video.css'

const Video = () => {
    return (
        <div className='vid'>
            <h1>ABOUT ME.</h1>
            <p>Small introduciton about who I am</p>
            <div className="video-container">

                <div className="video">
                    <ReactPlayer
                        className="react-player"
                        controls
                        url='https://www.youtube.com/watch?v=By47sJABeiI&feature=youtu.be'
                        width="80%"
                        height="70%"
                    />
                </div>
            </div>
            <div className="skills-container">
                <h1>SKILLS.</h1>
                <div className="skills-layout">
                    <div className="paddings">
                        <div className="skill-icons">
                            <div className='react-logo'>
                                <FaReact className="iconS" style={{ color: '#00D8FF' }} />
                                <h4>ReactJS</h4>
                            </div>
                            <div className="magento-logo">
                                <FaMagento className="iconS" style={{ color: '#F0672F' }} />
                                <h4>Magento</h4>
                            </div>
                            <div className="html-logo">
                                <FaHtml5 className="iconS" style={{ color: '#E44F26' }} />
                                <h4>HTML5</h4>
                            </div>
                            <div className="css-logo">
                                <FaCss3 className="iconS" style={{ color: '#1572B6' }} />
                                <h4>CSS</h4>
                            </div>
                            <div className="illustrator-logo">
                                <SiAdobeillustrator className="iconS" style={{ color: '#FF5722' }} />
                                <h4>Illustrator</h4>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>


    )
}

export default Video;