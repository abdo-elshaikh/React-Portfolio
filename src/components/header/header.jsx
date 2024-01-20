import React from 'react'
import { useState, useEffect, useRef } from 'react'
import './header.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faBars, faMoon, faSun, faXmark } from '@fortawesome/free-solid-svg-icons'

export default function Header() {
  const [showMenu, setshowMenu] = useState(false);
  const [darkMode, setDarkMode] = useState(localStorage.getItem('darkMode') ?? true);
  return (
    <header>
      <div className="logo">
        <img src={darkMode ? './logo-light.png' : './logo-dark.png'} alt="" className='logo-img' />
      </div>
      <nav className={darkMode ? 'nav-light-mode' : 'nav-dark-mode'}>
        <ul>
          <li>
            <a href="#">Home</a>
          </li>
          <li>
            <a href="#">About</a>
          </li>
          <li>
            <a href="#">Contact</a>
          </li>
          <li>
            <a href="#">Projects</a>
          </li>
          <li>
            <a href="#">Careers</a>
          </li>
        </ul>
      </nav>

      <div className="menu-btn">
        <button onClick={() => {
          setshowMenu(!showMenu);
        }} >
          {showMenu ? <FontAwesomeIcon icon={faXmark} /> : <FontAwesomeIcon icon={faBars} />}
        </button>
      </div>

      {showMenu && <div className={darkMode ? 'menu-toggle' : 'menu-toggle-dark'}>
        <button onClick={() => setshowMenu(false)} className='close-btn'>
          <FontAwesomeIcon icon={faXmark} />
        </button>
        <ul>
          <li>
            <a href="#">Home</a>
          </li>
          <li>
            <a href="#">About</a>
          </li>
          <li>
            <a href="#">Contact</a>
          </li>
          <li>
            <a href="#">Projects</a>
          </li>
          <li>
            <a href="#">Careers</a>
          </li>
        </ul>
      </div>}

      <div className="mode">
        <button className="btn-mode" onClick={() => {
          document.body.classList.toggle('dark');
          localStorage.setItem('darkMode', darkMode);
          setDarkMode(!darkMode);

        }}>
          <FontAwesomeIcon icon={darkMode ? faSun : faMoon} className='dark-mode-icon' />
          <span className='mode-txt'>{darkMode === false ? 'Light Mode' : 'Dark Mode'}</span>
        </button>
      </div>

    </header >
  )
}
