import "../../styles/layout/country.scss";

import IconPais from "../../img/country/securitas-direct-icono-espana.png";
import IconVigilante from "../../img/includes/securitas-direct-icono-vigilantes.png";
import IconCorazon from "../../img/country/securitas-direct-icono-satisfaccion.png";
import IconLuz from "../../img/country/securitas-direct-icono-innovacion.png";

const Country = () => {
  // ========== JSK =============

  return (
    // ========== HERO =============

    <section className='country'>
      <ul className='country__ul'>
        <li className='country__li'>
          <div className='country__div-img'>
            <img
              src={IconPais}
              title='Incono pais'
              alt='Incono pais'
              className='country__img'
            />
          </div>
          <h3 className='country__number'>16</h3>
          <h4 className='country__subtitle'>Paises</h4>
        </li>
        <li className='country__li'>
          <div className='country__div-img'>
            <img
              src={IconVigilante}
              title='Icono alerta'
              alt='Icono alerta'
              className='country__img'
            />
          </div>
          <h3 className='country__number'>20"</h3>
          <h4 className='country__subtitle'>Tiempo medio de respuesta*</h4>
        </li>
        <li className='country__li'>
          <div className='country__div-img'>
            <img
              src={IconCorazon}
              title='Icono mantenimiento'
              alt='Icono mantenimiento'
              className='country__img'
            />
          </div>
          <h3 className='country__number'>9.1</h3>
          <h4 className='country__subtitle'>
            La alarma con los clientes más satisfechos*
          </h4>
        </li>
        <li className='country__li'>
          <div className='country__div-img'>
            <img
              src={IconLuz}
              title='Icono vigilante'
              alt='Icono vigilante'
              className='country__img'
            />
          </div>
          <h3 className='country__number'>
            +71<span className='country__number--span'>M€</span>
          </h3>
          <h4 className='country__subtitle'>inversión en innovación</h4>
        </li>
      </ul>
    </section>
  );
};
export default Country;
