import "../../styles/layout/button.scss";
import React, { useState } from "react";

import iconOperadora from "../../img/button/operadora-white.png";

import icontelefono from "../../img/button/telefono.png";
import iconcorreo from "../../img/button/correo.png";

import logo from "../../img/header/logo.png";

const Button = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const [isAnimation, setIsAnimation] = useState(true);

  const openModal = () => {
    setIsAnimation(true); // Start animation
    setTimeout(() => {
      setIsModalOpen(!isModalOpen); // Toggle modal state after animation delay
    }, 300);
  };

  const closeModal = () => {
    setIsAnimation(false); // Start animation
    setTimeout(() => {
      setIsModalOpen(false); // Close modal after animation delay
   //   setIsAnimation(false); // Reset animation state
    }, 400);
  };

  return (
    <>
      <section className='buttonopen' id='open' onClick={openModal}>
        <img
          src={iconOperadora}
          title='Operadora'
          alt='Operadora'
          className='buttonopen__icon'
        />
        <h3 className='buttonopen__title'>
          Contacta <br></br>
          con nosotros
        </h3>
      </section>
      {isModalOpen && (
        <section className="modal">
          <article className={`modal__white modal-in ${isAnimation ? "" : "modal-exit"}`}
           id='modal'>
            <div className='modal__close' onClick={closeModal}>
              <i className='fa-solid fa-x modal__close-icon'></i>
            </div>

            <ul className='modal__ul'>
              <li className='modal__li'>
                <img
                  src={icontelefono}
                  title='Icono tefelono'
                  alt='Icono tefelono'
                  className='modal__icon'
                />
                <a className='modal__link' href='tel:900100778'>
                900 100 778
                </a>
              </li>
              <li className='modal__li'>
                <img
                  src={iconcorreo}
                  title='Icono correo'
                  alt='Icono correo'
                  className='modal__icon'
                />
                <a
                  className='modal__link'
                  href='mailto:vodafone@securitasdirect.es'
                >
                  vodafone@securitasdirect.es
                </a>
              </li>
            </ul>
            <img
              src={logo}
              title='Logo Securitas y Vodafone'
              alt='Logo Securitas y Vodafone'
              className='modal__logo'
            />
          </article>
        </section>
      )}
    </>
  );
};
export default Button;
