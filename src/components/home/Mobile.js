/* eslint-disable jsx-a11y/iframe-has-title */
/* eslint-disable react/no-unknown-property */
import "../../styles/layout/mobile.scss";
import Title from "./title/Title";

import imgGoogle from "../../img/mobile/bg_btn_googleplay.png";

import imgAppStore from "../../img/mobile/bg_btn_appstore.png";

const Mobile = () => {
  // ========== JSK =============

  return (
    // ========== HERO =============

    <section className='mobile' id='app'>
      <section className='mobile__section'>
        <article className='mobile__article'>
          <Title grey='La protección ' black='de tu hogar, en tu móvil' />
          <p className='mobile__paragraph'>
            ¿Necesitas conectar tu alarma pero no estás en casa?, ¿estás de
            vacaciones y quieres ver si todo está bien?
          </p>

          <p className='mobile__paragraph'>
            La app My Verisure te permite controlar fácilmente tu sistema de
            seguridad, recibir notificaciones en tiempo real y acceder a las
            cámaras desde cualquier lugar.
          </p>

          <div className='mobile__div-app'>
            <img
              src={imgGoogle}
              title='Securitas Direct'
              alt='App google play'
              className='mobile__img'
            />
            <img
              src={imgAppStore}
              title='Securitas Direct'
              alt='Securitas Direct'
              className='mobile__img'
            />
          </div>
        </article>
        <div className='mobile__div-img'>
          <iframe
            src='https://www.securitasdirect.es/lp/app_verisure/home.php'
            frameBorder='0'
            className='mobile__iframe'
          ></iframe>
        </div>
      </section>
    </section>
  );
};
export default Mobile;
