import "../styles/layout/Footer.scss";
import logoSecuritas from "../img/header/logo.png";
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <footer className='footer'>
      <nav className='footer__nav'>
        <ul className='footer__ul'>
          <li className='footer__li'>
            <i className='fa-solid fa-envelope footer__icon'></i>
            <a href='mailto:vodafone@securitasdirect.es' className='footer__link'>
            vodafone@securitasdirect.es
            </a>
          </li>
          <li className='footer__li'>
            <i className='fa-solid fa-phone footer__icon'></i>
            <a href='tel:+34900100778' className='footer__link'>
            900100778
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
