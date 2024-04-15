import "../../styles/layout/instructions.scss";
import Title from "./title/Title";


import iconReloj from "../../img/instructions/reloj.png";
import iconCentral from "../../img/instructions/central.png";
import iconAgente from "../../img/instructions/agente.png";
import iconGarantia from "../../img/instructions/herramientas.png";
import iconApp from "../../img/instructions/app.png";
import iconZero from "../../img/instructions/zerovision.png";

const Instructions = () => {
  // ========== JSK =============

  return (
    // ========== HERO =============

    <section className='instructions' id='servicios'>
      <Title
        grey='Nueva generación de alarmas'
        black='con
     tecnología PreSense™'
        parragraph='Para protegerte, la anticipación lo es todo. Por eso, en Securitas Direct
      hemos creado la primera alarma con tecnología 
     PreSense™, que nos permite actuar antes de que una situación se convierta en un problema.'
      />

      <ul className='instructions__ul'>
        <li className='instructions__li '>
          <div className="instructions__div-icon">
          <img src={iconReloj} alt='time' className='instructions__img' />
          </div>
          <h3 className='instructions__sub-title'>
            Cada segundo cuenta: respuesta en 20 seg. con aviso a Policía
          </h3>
          <hr className='instructions__hr'></hr>
          <p className='instructions__paragrahp'>
            Ante una situación de peligro, nuestra respuesta es rápida y eficaz:
            recibimos la alaerta en segundos y comprobamos lo que ocurre para
            avisar de inmediato a la Policía.
          </p>
        </li>

        <li className='instructions__li '>
        <div className="instructions__div-icon">
          <img src={iconCentral} alt='time' className='instructions__img' />
          </div>
          <h3 className='instructions__sub-title'>
          Conexión 24h con Central Receptora
          </h3>
          <hr className='instructions__hr'></hr>
          <p className='instructions__paragrahp'>
            tu alarma está conectada con la Central Receptora más grande y
            avanzada de Europa, con miles de expertos en seguridad preparados
            para actuar las 24 horas.
          </p>
        </li>
        <li className='instructions__li '>
        <div className="instructions__div-icon">
          <img src={iconAgente} alt='time' className='instructions__img' />
          </div>
          <h3 className='instructions__sub-title'>
            Vigilante incluido, sin límite de intervenciones
          </h3>
          <hr className='instructions__hr'></hr>
          <p className='instructions__paragrahp'>
            Proteger tu hogar es nuestra prioridad. Por eso, si hace falta
            comprobar que todo está bien, enviamos a un vigilante a tu hogar o
            negocio. Las veces que haga falta.
          </p>
        </li>
        <li className='instructions__li'>
        <div className="instructions__div-icon">
          <img src={iconGarantia } alt='time' className='instructions__img' />
          </div>
          <h3 className='instructions__sub-title'>
          Garantía del producto de por vida
          </h3>
          <hr className='instructions__hr'></hr>
          <p className='instructions__paragrahp'>
            Nos aseguramos de que tu alarma esté siempre lista con
            mantenimientos y revisiones 100% incluidos.
          </p>
        </li>
        <li className='instructions__li '>
        <div className="instructions__div-icon">
          <img src={iconApp} alt='time' className='instructions__img' />
          </div>
          <h3 className='instructions__sub-title'>
          Control con la app My Verisure
          </h3>
          <hr className='instructions__hr'></hr>
          <p className='instructions__paragrahp'>
           My Verisure permite controlar tu equipo de seguridad estés donde estés. Puedes activar o desactivar tu alarma,
           revisar qué usuarios han entrado o salido del inmueble, hacer fotopeticiones…
          </p>
        </li>
        <li className='instructions__li '>
        <div className="instructions__div-icon">
          <img src={iconZero} alt='time' className='instructions__img' />
          </div>
          <h3 className='instructions__sub-title'>
ZeroVision: intervención inmediata frente el robo</h3>
          <hr className='instructions__hr'></hr>
          <p className='instructions__paragrahp'>
          La alarma ZeroVision va un paso más allá en la protección de tu hogar 
          o tu negocio,  generando una situación de cero visibilidad para que el ladrón no pueda ver y evitar el robo.
          </p>
        </li>
      </ul>
    </section>
  );
};
export default Instructions;
