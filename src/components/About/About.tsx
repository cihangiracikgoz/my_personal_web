import './About.css';
import { FiGithub, FiLinkedin, FiInstagram } from 'react-icons/fi';

export default function About() {
    return (
        <section id='about' className='about'>
            <div className='about-photo'>
                <div className='photo-placeholder' />
            </div>
            <div className='about-info'>
                <h1 className='about-name'>Cihangir<br />Acikgoz</h1>
                <p className='about-edu'>BSc Computer Science<br />@ University of Surrey</p>
                <div className='about-socials'>
                    <a href="https://www.instagram.com/cihangiracikgoz" target="_blank" rel="noopener noreferrer">
                        <FiInstagram />
                    </a>
                    <a href="https://www.linkedin.com/in/cihangiracikgoz/" target="_blank" rel="noopener noreferrer">
                        <FiLinkedin />
                    </a>
                    <a href="https://github.com/cihangiracikgoz" target="_blank" rel="noopener noreferrer">
                        <FiGithub />
                    </a>
                </div>
            </div>
        </section>
    );
}