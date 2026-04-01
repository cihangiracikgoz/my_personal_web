import { useState } from 'react';
import './Header.css';
import { FiMoon, FiSun } from 'react-icons/fi';

export default function Header() {
    const [isDarkMode, setIsDarkMode] = useState(false);

    function toggleDarkMode() {
        const newMode = !isDarkMode;
        setIsDarkMode(newMode);
        if (newMode) {
            document.documentElement.setAttribute('data-theme', 'dark');
        } else {
            document.documentElement.removeAttribute('data-theme');
        }
    }

    function scrollTo(id: string) {
        return (e: React.MouseEvent) => {
            e.preventDefault();
            document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' });
        }
    }

    return (
        <header className="header">
            <nav className='navbar'>
                <a className='nav-link' href='#about' onClick={scrollTo('about')}>About Me</a>
                <a className='nav-link' href='#journey' onClick={scrollTo('journey')}>Journey</a>
                <a className='nav-link' href='#projects' onClick={scrollTo('projects')}>Projects</a>
            </nav>
            <button className='dark-mode-toggle' onClick={toggleDarkMode}>
                {isDarkMode ? <FiSun /> : <FiMoon />}
            </button>
        </header>
    );
}