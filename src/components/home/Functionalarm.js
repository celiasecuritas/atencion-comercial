import "../../styles/layout/functionalarm.scss";
import Title from "./title/Title";

import iconArlo from "../../img/function-alarm/arlo.png";
import iconDeteccion from "../../img/function-alarm/deteccion.png";
import iconZero from "../../img/function-alarm/zerovision_alarm.png";

const Functionalarm = () => {
  // ========== JSK =============

  return (
    // ========== HERO =============

    <section className='function-alarm' id='servicios'>
      <Title grey='¿Cómo funciona la alarma?' />

      <section className='function-alarm__section'>
        <article className='function-alarm__article '>
          <img src={iconDeteccion} alt='time' className='function-alarm__img' />
          <h3 className='function-alarm__subtitle'>
            Detectamos al intruso antes de que entre
          </h3>
          <hr className='function-alarm__hr'></hr>
          <p className='function-alarm__paragrahp'>
            Gracias a la tecnología PreSense™, podemos detectar al intruso antes
            de que entre y responder en menos de 20 segundos desde nuestra
            Central Receptora de Alarmas
          </p>
        </article>

        <article className='function-alarm__article '>
          <img src={iconArlo} alt='time' className='function-alarm__img' />
          <h3 className='function-alarm__subtitle'>
            Actuamos directamente para evitar la ocupación
          </h3>
          <hr className='function-alarm__hr'></hr>
          <p className='function-alarm__paragrahp'>
            Con ZeroVision, actuamos directamente en el hogar protegido: impide
            la visión en segundos para expulsar al intruso.
          </p>
        </article>

        <article className='function-alarm__article '>
          <img src={iconZero} alt='time' className='function-alarm__img' />
          <h3 className='function-alarm__subtitle'>
            Avisamos a la Policía con pruebas de la intrusión
          </h3>
          <hr className='function-alarm__hr'></hr>
          <p className='function-alarm__paragrahp'>
            Ante una intrusión comprobada, avisamos de inmediato a la Policía,
            con señales e imágenes como prueba para facilitar su intervención
          </p>
        </article>
      </section>
    </section>
  );
};
export default Functionalarm;
