import './Footer.css';
import { FaInstagram, FaLinkedinIn, FaGithub} from "react-icons/fa";

function Footer() {
  return (
    <div className="footer-background">
      <div className="footer" id="Footer">
        <ul className="footer-links">
          <li><p>Justinrichardchan@gmail.com</p></li>
          <li><p>Vancouver, BC, Canada</p></li>
          <li><a target="_blank" rel="noopener noreferrer" href="https://www.linkedin.com/in/justinchan84/"><FaLinkedinIn /></a></li>
          <li><a target="_blank" rel="noopener noreferrer" href="https://github.com/jrchan84"><FaGithub /></a></li>
          <li><a target="_blank" rel="noopener noreferrer" href="https://www.instagram.com/jrchan.ca/"><FaInstagram /></a></li>
        </ul>
      </div>
    </div>
  );
}

export default Footer;
