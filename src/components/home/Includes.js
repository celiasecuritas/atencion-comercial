import "../../styles/layout/includes.scss";
import Title from "./title/Title";

import IconProteccion from "../../img/includes/securitas-direct-icono-proteccion.png";
import IconPolicia from "../../img/includes/securitas-direct-icono-alerta.png";
import IconGarantia from "../../img/includes/securitas-direct-icono-mantenimiento.png";
import IconVigilante from "../../img/includes/securitas-direct-icono-vigilantes.png";
import IconBoton from "../../img/includes/securitas-direct-icono-guardian.png";

const Includes = () => {
  // ========== JSK =============

  return (
    // ========== HERO =============

    <section className='includes'>
      <Title grey='Servicios incluidos' black='en la alarma para hogar' />
      <ul className='includes__ul'>
        <li className='includes__li'>
          <div className='includes__div-img'>
            <img
              src={IconProteccion}
              title='Incono proteccion'
              alt='Incono proteccion'
              className='includes__img'
            />
          </div>
          <h3 className='includes__subtitle'>
            Conexión 24 horas con Central Receptora de Alamas
          </h3>
        </li>
        <li className='includes__li'>
          <div className='includes__div-img'>
            <img
              src={IconPolicia}
              title='Icono alerta'
              alt='Icono alerta'
              className='includes__img'
            />
          </div>
          <h3 className='includes__subtitle'>
            Aviso a Policía y servicios de emergencias 112
          </h3>
        </li>
        <li className='includes__li'>
          <div className='includes__div-img'>
            <img
              src={IconGarantia}
              title='Icono mantenimiento'
              alt='Icono mantenimiento'
              className='includes__img'
            />
          </div>
          <h3 className='includes__subtitle'>
            Garantía y mantenimiento de por vida*
          </h3>
        </li>
        <li className='includes__li'>
          <div className='includes__div-img'>
            <img
              src={IconVigilante}
              title='Icono vigilante'
              alt='Icono vigilante'
              className='includes__img'
            />
          </div>
          <h3 className='includes__subtitle'>
            Vigilante Securitas y sin límite de intervenciones
          </h3>
        </li>
        <li className='includes__li'>
          <div className='includes__div-img'>
            <img
              src={IconBoton}
              title='Icono guardian'
              alt='Icono guardian'
              className='includes__img'
            />
          </div>
          <h3 className='includes__subtitle'>
            Botón SOS y guardián verisure para proteger dentro y fuera de casa
          </h3>
        </li>
      </ul>
    </section>
  );
};
export default Includes;
