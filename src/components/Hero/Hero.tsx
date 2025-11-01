import { type JSX } from "react";
import { FaInstagram, FaLinkedinIn, } from "react-icons/fa";
import { FiGithub } from "react-icons/fi";
import { profile, type Profile, type Icons } from "../../data/profile";
import "./Hero.css";

export default function Hero(): JSX.Element {
    return (
        <section id="home" className="hero-section">
            <div className="hero-box">
                <img 
                    className="hero-profile-picture" 
                    src={profile.picture.src} 
                    alt={profile.picture.alt}
                    decoding="async"
                    loading="lazy"
                />
                <HeroContent profile={profile}/>
            </div>
        </section>
    );
}

export function HeroContent({profile}: {profile: Profile}): JSX.Element {
    return (
        <div className="hero-content">
            <h1 className="hero-name">{profile.name}</h1>
            <p className="hero-education">{profile.education}</p>
            <HeroSocialIcons icons={profile.icons}/>
        </div>
    );
}

export function HeroSocialIcons({icons}: {icons: Icons}): JSX.Element {
    return (
        <div className="hero-social-icons">
            <a href={icons.instagram} target="_blank" rel="noopener noreferrer" className="hero-icon-link">
                <FaInstagram className="hero-icon" />
            </a>
            <a href={icons.linkedin} target="_blank" rel="noopener noreferrer" className="hero-icon-link">
                <FaLinkedinIn className="hero-icon" />
            </a>
            <a href={icons.github} target="_blank" rel="noopener noreferrer" className="hero-icon-link">
                <FiGithub className="hero-icon" />
            </a>
        </div>
    );
}
