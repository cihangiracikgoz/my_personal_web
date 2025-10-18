import { type JSX } from "react";
import { FaInstagram, FaLinkedinIn, } from "react-icons/fa";
import { FiGithub } from "react-icons/fi";
import "./Hero.css";


export default function Hero(): JSX.Element {
    return (
        <section className="hero-section">
            <div className="hero-box">
                <img 
                    className="hero-profile-picture" 
                    src="" 
                    alt="Professional Profile Picture" 
                />
                <HeroContent />
            </div>
        </section>
    );
}

function HeroContent(): JSX.Element {
    return (
        <div className="hero-content">
            <h1 className="hero-name">Cihangir Acikgoz</h1>
            <p className="hero-school">BSc Computer Science at University of Surrey</p>
            <HeroSocialIcons />
        </div>
    );
}

function HeroSocialIcons(): JSX.Element {
    return (
        <div className="hero-social-icons">
            <a href="https://www.instagram.com/cihangiracikgoz/" target="_blank" rel="noopener noreferrer" className="hero-icon-link">
                <FaInstagram className="hero-icon" />
            </a>
            <a href="https://www.linkedin.com/in/cihangiracikgoz/" target="_blank" rel="noopener noreferrer" className="hero-icon-link">
                <FaLinkedinIn className="hero-icon" />
            </a>
            <a href="https://github.com/cihangiracikgoz" target="_blank" rel="noopener noreferrer" className="hero-icon-link">
                <FiGithub className="hero-icon" />
            </a>
        </div>
    );
}
