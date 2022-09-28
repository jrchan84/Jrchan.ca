import React, { useState, useEffect } from 'react';
import Pdf from '../assets/resume.pdf'
import { FaBars, FaRegWindowClose } from 'react-icons/fa';
import './Header.css';

function Header() {
  useEffect(() => {
    window.onscroll = function() {keepHeader()};
    window.onclick = function() {keepHeader()};

    var dropdown = document.getElementById("dropdown")
    var header = document.getElementById("Header");
    var sticky = header.offsetTop;

    function keepHeader() {
      if (window.pageYOffset > sticky) {
        header.classList.add("sticky");
        if (dropdown !== null) {
          dropdown.classList.add("down");
          dropdown.classList.remove("up");
        }
      } else {
        header.classList.remove("sticky");
        if (dropdown !== null) {
          dropdown.classList.remove("down");
          dropdown.classList.add("up");
        }
      }
    }

    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            e.preventDefault();

            document.querySelector(this.getAttribute('href')).scrollIntoView({
                behavior: 'smooth'
            });
        });
    });
  });

  const [showDropdown, setShowDropdown] = useState(false);
  const handleClick = event => {
    setShowDropdown(curr => !curr);
  };

  return (
    <div className="header" id="Header">
      <div className="logo">
        <a className="text" href="#Hero">JUSTIN CHAN</a>
      </div>
      <div className="toggle-container" id="toggle" onClick={handleClick}>
        {!showDropdown && <FaBars />}
        {showDropdown && <FaRegWindowClose />}
      </div>
      {showDropdown && <Dropdown onClick={handleClick}/>}
      <div className="links-container">
        <ul className="links">
          <li><a href={Pdf} target="_blank" rel="noopener noreferrer">Resume</a></li>
          <li><a href="#About">About</a></li>
          <li><a href="#Skills">Skills</a></li>
          <li><a href="#Work">Work</a></li>
          <li><a href="#Projects">Projects</a></li>
          <li><a href="#Footer">Contact</a></li>
        </ul>
      </div>
    </div>
  );
}

function Dropdown({onClick}) {
  return (
    <div className="dropdown-container" id="dropdown">
      <ul className="dropdown-menu">
        <li><a href={Pdf} onClick={onClick} target="_blank" rel="noopener noreferrer">Resume</a></li>
        <li><a href="#About" onClick={onClick}>About</a></li>
        <li><a href="#Skills" onClick={onClick}>Skills</a></li>
        <li><a href="#Work" onClick={onClick}>Work</a></li>
        <li><a href="#Projects" onClick={onClick}>Projects</a></li>
        <li><a href="#Footer" onClick={onClick}>Contact</a></li>
      </ul>
    </div>
  );
}

export default Header;
