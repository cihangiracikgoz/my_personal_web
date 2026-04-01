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

    return (
        <header className="header">
            <nav className='navbar'>
                <a className='nav-link' href='#about'>About Me</a>
                <a className='nav-link' href='#journey'>Journey</a>
                <a className='nav-link' href='#projects'>Projects</a>
            </nav>
            <button className='dark-mode-toggle' onClick={toggleDarkMode}>
                {isDarkMode ? <FiSun /> : <FiMoon />}
            </button>
        </header>
    )
}