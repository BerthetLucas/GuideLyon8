import "../styles/footer.css";
import logo from "../assets/logo.png";
import { Link } from "react-router-dom";

function Footer() {
  return (
    <footer>
      <img src={logo} className="logo" alt="logo du site"></img>

      <ul className="footer-list mt-4">
        <li className="footer-list-element">
          <Link to="/bars" className="footer-link">Bars</Link>
        </li>
        <li className="footer-list-element">
          <Link to="/commerces" className="footer-link">Commerces</Link>
        </li>
        <li className="footer-list-element">
          <Link to="/restaurants" className="footer-link">Restaurants</Link>
        </li>
        <li className="footer-list-element">
          <Link to="/culture" className="footer-link">Culture</Link>
        </li>
        <li className="footer-list-element">
          <Link to="/legal" className="footer-link">Mentions légales</Link>
        </li>
      </ul>
    </footer>
  );
}

export default Footer;