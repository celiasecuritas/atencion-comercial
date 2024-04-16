import "../styles/layout/Footer.scss";
import logoSecuritas from "../img/header/securitas-direct.png";
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <footer className='footer'>
      <nav className='footer__nav'>
        <ul className='footer__ul'>
          <li className='footer__li'>
            <i className='fa-solid fa-envelope footer__icon'></i>
            <a href='mailto:atencioncomercial@securitasdirect.es' className='footer__link'>
            atencioncomercial@securitasdirect.es
            </a>
          </li>
          <li className='footer__li'>
            <i className='fa-solid fa-phone footer__icon'></i>
            <a href='tel:+34900903506' className='footer__link'>
            900 903 506
            </a>
          </li>
        </ul>
      </nav>
      <Link to='/'>
        <img
          src={logoSecuritas}
          title='Securitas Direct'
          alt='Securitas Direct'
          className='footer__logo'
        />
      </Link>
    </footer>
  );
};

export default Footer;
