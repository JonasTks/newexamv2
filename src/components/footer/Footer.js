import React from 'react';
import { FaGithub, FaHome, FaInstagram, FaLinkedin, FaMailBulk, FaPhone } from 'react-icons/fa';

import './Footer.css';

const Footer = () => {
    return (
        <div className="footer">
            <div className="footer-container">
                <div className="left">
                    <div className="location">
                        <h4><FaHome size={20} style={{ color: "#fff", marginRight: "2rem" }} /><p>Tallinna polütehnikum</p> <p>Pärnu mnt 54</p></h4>
                    </div>
                    <div className="phone">
                        <h4><FaPhone size={20} style={{ color: "#fff", marginRight: "2rem" }} />+372 5124 3212</h4>
                    </div>
                    <div className="email">
                        <h4><FaMailBulk size={20} style={{ color: "#fff", marginRight: "2rem" }} />jonas.toks33@gmail.com</h4>
                    </div>
                </div>
                <div className="right">
                    <h4>About Me</h4>
                    <p>Tofu raw denim hoodie, flexitarian chartreuse pop-up cornhole copper mug
                        ramps next level woke. Iceland put a bird on it 8-bit artisan leggings swag
                        selfies tonx bushwick flannel gluten-free humblebrag.</p>
                    <div className="socials">
                        <FaLinkedin size={30} style={{ color: "#fff", marginRight: "1rem" }} />
                        <FaInstagram size={30} style={{ color: "#fff", marginRight: "1rem" }} />
                        <FaGithub size={30} style={{ color: "#fff", marginRight: "1rem" }} />
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Footer