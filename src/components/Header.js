import "../styles/layout/Header.scss";
import logoHeader from "../img/header/securitas-direct.png";
import React, { useState } from "react";

const Header = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isAnimating, setIsAnimating] = useState(true);

  // BUTTON HAMBURGUESA

  const toggleMenu = () => {
    setIsAnimating(!isOpen);
    if (isOpen) {
      setTimeout(() => {
        setIsOpen(!isOpen);
      }, 400);
    } else {
      setIsOpen(!isOpen);
    }
  };

  // EVENTO CERRAR MENU

  const closeMenu = () => {
    setIsAnimating(false);
    setTimeout(() => {
      setIsOpen(false);
    }, 400);
  };

  // PARAR EVENTO CLICK

  const stopPropagation = (event) => {
    event.stopPropagation();
  };

  return (
    <header className='header'>
      <a href='#home' onClick={closeMenu}>
        <img
          src={logoHeader}
          title='Securitas Direct'
          alt='Securitas Direct'
          className='header__logo'
        />
      </a>

      <div
        className={`header__btn ${isOpen ? "menu-open" : ""}`}
        onClick={toggleMenu}
      >
        <div className='header__btn-line line-one'></div>
        <div className='header__btn-line line-two'></div>
        <div className='header__btn-line line-three'></div>
      </div>

      <nav
        className={`header__nav ${isOpen ? "open " : ""}`}
        onClick={closeMenu}
      >
        <ul
          className={`header__ul animated-nav ${isAnimating ? "" : "exit-nav"}`}
          onClick={stopPropagation}
        >
          <li>
            <a href='#home' className='header__link' onClick={closeMenu}>
              Home
            </a>
          </li>
          <li>
            <a href='#video' className='header__link' onClick={closeMenu}>
              Seguridad
            </a>
          </li>
          <li>
            <a
              href='#dispositivos'
              className='header__link'
              onClick={closeMenu}
            >
              Dispositivos
            </a>
          </li>
          <li>
            <a href='#servicios' className='header__link' onClick={closeMenu}>
              Servicios
            </a>
          </li>
          <li className="header__li">
            <a href='#app' className='header__link' onClick={closeMenu}>
            App My Verisure 
            </a>
          </li>

          {/*       <li className="submenu" >
              <NavLink to="seccionDeseada" className='header__link' onClick={closeMenu}>
                Prueba
                <i className="fa-solid fa-chevron-right header__arrow"></i>
              </NavLink>
             
                      <ul className="submenu__ul  animated-nav">
                          <li className="submenu__li">
                            <NavLink to="/servicio1" className='submenu__link header__link' onClick={closeMenu}>Servicio 1</NavLink></li>
                          <li className="submenu__li" >
                            <NavLink to="/servicio2" className='submenu__link header__link' onClick={closeMenu}>Servicio 2</NavLink></li>
                          <li className="submenu__li" >
                            <NavLink to="/servicio3" className='submenu__link header__link' onClick={closeMenu} >Servicio 3</NavLink></li>
                    </ul> 
            </li>
            <li>
              <NavLink to={"/service"} className='header__link'onClick={closeMenu}  >
                Área cliente
              </NavLink>
            </li>
            <li>
              <NavLink to={"/area-empleado"} className='header__link' onClick={closeMenu}  >
                Área empleado
              </NavLink>
            </li>*/}
        </ul>
      </nav>
    </header>
  );
};

export default Header;
