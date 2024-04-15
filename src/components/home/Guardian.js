import Title from "./title/Title";

import "../../styles/layout/guardian.scss";

import imgGuardian from "../../img/guardian/guardian-monte.jpg";
import imgMovil from "../../img/guardian/pantalla-guardian-sos.png";

import iconOtro from "../../img/guardian/iconos-guardian-3.png";
import iconPhone from "../../img/guardian/iconos-guardian-1.png";
import iconCar from "../../img/guardian/iconos-guardian-2.png";
import iconTeleo from "../../img/guardian/iconos-guardian.png";

const Guardian = () => {
  // ========== JSK =============

  return (
    // ========== HERO =============

    <section className='guardian'>
      <Title
        grey='Cuidamos de ti y de los tuyos,
                '
        black='también fuera de casa'
        parragraph='Con Guardián Verisure en tu móvil, te protegemos en cualquier lugar. Pide ayuda ante cualquier emergencia gracias a su botón SOS o solicita que te acompañemos si vas a realizar un trayecto de riesgo.'
      />
      <section className='guardian__section'>
        <img
          src={imgGuardian}
          title='Securitas Direct'
          alt='Securitas Direct'
          className='guardian__img'
        />
        <article className='guardian__article'>
          <img src={imgMovil} alt='Servicio' className='guardian__img-icon' />
          <div>
            <h3 className='guardian__subtitle'>
              Estamos ahí,<br></br> pase lo que pase
            </h3>
            <hr className='guardian__hr'></hr>
            <p className='guardian__paragrahp'>
              Ante cualquier emergencia, activamos el protocolo para enviar
              ayuda a tu ubicación exacta, acompañarte en todo momento y avisar
              a tus familiares si es necesario.
            </p>
          </div>
          <ul className='guardian__ul'>
            <li className='guardian__li'>
              <img
                src={iconPhone}
                title='Icono'
                alt='Icono'
                className='guardian__icon'
              />
              <p className='guardian__text'>
                Pulsa el botón SOS de Guardián Verisure
              </p>
            </li>
            <li className='guardian__li'>
              <img
                src={iconOtro}
                title='Icono'
                alt='Icono'
                className='guardian__icon'
              />
              <p className='guardian__text'>
                Recibimos la alerta con tu ubicación
              </p>
            </li>
            <li className='guardian__li'>
              <img
                src={iconTeleo}
                title='Icono'
                alt='Icono'
                className='guardian__icon'
              />
              <p className='guardian__text'>
                Activamos el protocolo de emergencia y te acompañamos
              </p>
            </li>
            <li className='guardian__li'>
              <img
                src={iconCar}
                title='Icono'
                alt='Icono'
                className='guardian__icon'
              />
              <p className='guardian__text'>
                Avisamos a los servicios de emergencia y a tus familiares
              </p>
            </li>
          </ul>
        </article>
      </section>
    </section>
  );
};
export default Guardian;
