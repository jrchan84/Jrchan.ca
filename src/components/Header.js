import React, {useEffect} from 'react';
import Pdf from '../assets/resume.pdf'
import './Header.css';

function Header() {
  useEffect(() => {
    window.onscroll = function() {keepHeader()};

    var header = document.getElementById("Header");
    var sticky = header.offsetTop;

    function keepHeader() {
      if (window.pageYOffset > sticky) {
        header.classList.add("sticky");
      } else {
        header.classList.remove("sticky");
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

  return (
    <div className="header" id="Header">
      <div className="logo">
        <div className="text">
          JUSTIN CHAN
        </div>
      </div>
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

export default Header;
