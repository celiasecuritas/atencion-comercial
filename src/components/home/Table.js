import Title from "./title/Title";

import "../../styles/layout/table.scss";

import React, { useState } from 'react';

// ========== TICKS =============

import tickGreen from "../../img/table/iconos-tick_verde.png";
import tickRed from "../../img/table/iconos-tick_rojo.png";
import tickYellow from "../../img/table/iconos-tick_amarillo.png";

// ========== Logos =============

import logoSecuritas from "../../img/table/logo.png";
import logoOtros from "../../img/table/logo-competencia-prosegur-movistar.png";

const Table = () => {

  const [openColumn, setOpenColumn] = useState(null);

  const handleColumnClick = (columnIndex) => {
    if (openColumn === columnIndex) {
      setOpenColumn(null); // Si se hace clic en una columna ya abierta, ciérrala
    } else {
      setOpenColumn(columnIndex); // Abre la columna clicada y cierra cualquier otra abierta
    }
  };


  return (
    <section className='table'>
      <Title
        grey='Descubre  '
        black='qué nos hace únicos'
        parragraph="La alarma de Securitas Direct ha sido elegida como la mejor alarma* por lo consumidores (Premio Elección del Consumidor '23)"
      />

      <ul className='table__ul'>
        <li className='table__li'>
          <img
            src={tickGreen}
            title='Tick Verde'
            alt='Tick Verde'
            className='table__li-img'
          />
          incluido
        </li>
        <li className='table__li'>
          <img
            src={tickYellow}
            title='Tick Amarillo'
            alt='Tick Amarillo'
            className='table__li-img'
          />
          Opcional
        </li>
        <li className='table__li'>
          <img
            src={tickRed}
            title='Tick rojo'
            alt='Tick rojo'
            className='table__li-img'
          />
          No disponible
        </li>
      </ul>

      <table className='table__table'>
        <tbody>
          {/* primera fila LOGOS */}
          <tr className='table__fila'>
            <th></th>
            <th className='table__colum-two colum-one'>
              <img
                src={logoSecuritas}
                title='Logo Securitas Direct'
                alt='Logo Securitas Direct'
                className='table__logo'
              />
            </th>
            <th className='table__colum-three colum-two'>
              <img
                src={logoOtros}
                title='Logo Competencia'
                alt='Logo Competencia'
                className='table__logo'
              />
            </th>
          </tr>
          {/* SEGUNDA FILA */}
          <tr className='table__fila'>
          <th className={`table__colum ${openColumn === 0 ? 'open-column' : ''}`}
            isOpen={openColumn === 0}
            onClick={() => handleColumnClick(0)}>
              <h5 className='table__colum-title'>
                Conexión a Central Receptora de Alarmas con aviso a Policía
              </h5>
              <i className={`fa-solid fa-chevron-right table__arrow ${openColumn === 0 ? 'open-arrow' : ''}`}></i>
              <p className={`table__colum-p ${openColumn === 0 ? 'open-p' : ''}`}>
                La Central Receptora de Alarmas de Securitas Direct es la más
                grande y avanzada de Europa. Además disponemos de varias
                Centrales Receptoras para garantizar tu seguridad si algo falla.
              </p>
            </th>
            <th className='table__colum-two'>
              <img
                src={tickGreen}
                title='Tick Verde'
                alt='Tick Verde'
                className='table__icon'
              />
            </th>
            <th className='table__colum-three'>
              <img
                src={tickGreen}
                title='Tick Verde'
                alt='Tick Verde'
                className='table__icon'
              />
            </th>
          </tr>
          <tr className='table__fila odd'>
          <th className={`table__colum ${openColumn === 1 ? 'open-column' : ''}`}
            isOpen={openColumn === 1}
            onClick={() => handleColumnClick(1)}>
              <h5 className='table__colum-title'>Compatible con mascotas</h5>
              <i className={`fa-solid fa-chevron-right table__arrow ${openColumn === 1 ? 'open-arrow' : ''}`}></i>
              <p className={`table__colum-p ${openColumn === 1 ? 'open-p' : ''}`}>
                Activa el modo parcial y conecta tu alarma mientras tu mascota
                se mueve libremente por casa, y mantén tu hogar protegido las 24
                horas.
              </p>
            </th>
            <th className='table__colum-two'>
              <img
                src={tickGreen}
                title='Tick Verde'
                alt='Tick Verde'
                className='table__icon'
              />
            </th>
            <th className='table__colum-three'>
              <img
                src={tickGreen}
                title='Tick Verde'
                alt='Tick Verde'
                className='table__icon'
              />
            </th>
          </tr>
          <tr className='table__fila'>
             <th className={`table__colum ${openColumn === 2 ? 'open-column' : ''}`}
            isOpen={openColumn === 2}
            onClick={() => handleColumnClick(2)}>
              <h5 className='table__colum-title'>
                Identificación con llave inteligente y código personal
              </h5>
              <i className={`fa-solid fa-chevron-right table__arrow ${openColumn === 2 ? 'open-arrow' : ''}`}></i>
              <p className={`table__colum-p ${openColumn === 2 ? 'open-p' : ''}`}>
                Conecta y desconecta fácilmente la alarma con las llaves
                inteligentes o, si lo prefieres, hazlo introduciendo un código.
              </p>
            </th>
            <th className='table__colum-two'>
              <img
                src={tickGreen}
                title='Tick Verde'
                alt='Tick Verde'
                className='table__icon'
              />
            </th>
            <th className='table__colum-three'>
              <img
                src={tickGreen}
                title='Tick Verde'
                alt='Tick Verde'
                className='table__icon'
              />
            </th>
          </tr>
          <tr className='table__fila odd'>
          <th className={`table__colum ${openColumn === 3 ? 'open-column' : ''}`}
            isOpen={openColumn === 3}
            onClick={() => handleColumnClick(3)}>
              <h5 className='table__colum-title'>
                Aviso por corte de corriente
              </h5>
              <i className={`fa-solid fa-chevron-right table__arrow ${openColumn === 3 ? 'open-arrow' : ''}`}></i>
              <p className={`table__colum-p ${openColumn === 3 ? 'open-p' : ''}`}>
                Nuestros sistema de alarma cuenta con su propio sistema de
                alimentación, por lo que seguirá funcionando aunque todas las
                fuentes de energía estén apagadas.
              </p>
            </th>
            <th className='table__colum-two'>
              <img
                src={tickGreen}
                title='Tick Verde'
                alt='Tick Verde'
                className='table__icon'
              />
            </th>
            <th className='table__colum-three'>
              <img
                src={tickGreen}
                title='Tick Verde'
                alt='Tick Verde'
                className='table__icon'
              />
            </th>
          </tr>
          <tr className='table__fila'>
          <th className={`table__colum ${openColumn === 4 ? 'open-column' : ''}`}
            isOpen={openColumn === 4}
            onClick={() => handleColumnClick(4)}>
              <h5 className='table__colum-title'>
                Detectores y cámaras con imagen de alta calidad y conexión a
                Central de Alarmas y mantenimiento
              </h5>
              <i className={`fa-solid fa-chevron-right table__arrow ${openColumn === 4 ? 'open-arrow' : ''}`}></i>
              <p className={`table__colum-p ${openColumn === 4 ? 'open-p' : ''}`}>
                Detectores y cámaras de seguridad con imagen Full HD para
                hogares y negocios. Movistar Prosegur Alarmas solo incluye estos
                productos en negocios.
              </p>
            </th>
            <th className='table__colum-two'>
              <img
                src={tickGreen}
                title='Tick Verde'
                alt='Tick Verde'
                className='table__icon'
              />
            </th>
            <th className='table__colum-three'>
              <img
                src={tickYellow}
                title='Tick Amarillo'
                alt='Tick Amarillo'
                className='table__icon'
              />
            </th>
          </tr>
          <tr className='table__fila odd'>
          <th className={`table__colum ${openColumn === 5 ? 'open-column' : ''}`}
            isOpen={openColumn === 5}
            onClick={() => handleColumnClick(5)}>
              <h5 className='table__colum-title'>
                Guardián Verisure: protección personal fuera de casa
              </h5>
              <i className={`fa-solid fa-chevron-right table__arrow ${openColumn === 5 ? 'open-arrow' : ''}`}></i>
              <p className={`table__colum-p ${openColumn === 5 ? 'open-p' : ''}`}>
                Para toda la familia: incluye hasta 6 licencias, según las
                necesidades del cliente y sin coste adicional. Movistar Prosegur
                Alarmas incluye desde 3 licencias (kit alarma esencial) hasta 8
                en los kits con mayor cuota mensual.
              </p>
            </th>
            <th className='table__colum-two'>
              <img
                src={tickGreen}
                title='Tick Verde'
                alt='Tick Verde'
                className='table__icon'
              />
            </th>
            <th className='table__colum-three'>
              <img
                src={tickYellow}
                title='Tick Amarillo'
                alt='Tick Amarillo'
                className='table__icon'
              />
            </th>
          </tr>
          <tr className='table__fila'>
          <th className={`table__colum ${openColumn === 6 ? 'open-column' : ''}`}
            isOpen={openColumn === 6}
            onClick={() => handleColumnClick(6)}>
              <h5 className='table__colum-title'>Tecnología PreSense™</h5>
              <i className={`fa-solid fa-chevron-right table__arrow ${openColumn === 6 ? 'open-arrow' : ''}`}></i>
              <p className={`table__colum-p ${openColumn === 6 ? 'open-p' : ''}`}>
                Con sensores de acceso para todas las puertas y ventanas (sensibles a vibraciones, golpes y apertura), cámaras con
                análisis de imagen conectadas a Central de Alarmas y sistema de
                inteligencia artificial para identificar antes las situaciones
                de peligro.
              </p>
            </th>
            <th className='table__colum-two'>
              <img
                src={tickGreen}
                title='Tick Verde'
                alt='Tick Verde'
                className='table__icon'
              />
            </th>
            <th className='table__colum-three'>
              <img
                src={tickRed}
                title='Tick rojo'
                alt='Tick rojo'
                className='table__icon'
              />
            </th>
          </tr>
          <tr className='table__fila odd'>
          <th className={`table__colum ${openColumn === 7 ? 'open-column' : ''}`}
            isOpen={openColumn === 7}
            onClick={() => handleColumnClick(7)}>
              <h5 className='table__colum-title'>
                Respuesta en menos de 20 seg.
              </h5>
              <i className={`fa-solid fa-chevron-right table__arrow ${openColumn === 7 ? 'open-arrow' : ''}`}></i>
              <p className={`table__colum-p ${openColumn === 7 ? 'open-p' : ''}`}>
                *Tiempo medio de respuesta desde que en nuestra CRA se recibe
                una señal de máxima prioridad: SOS, atraco, coacción o señal de
                intrusión.
              </p>
            </th>
            <th className='table__colum-two'>
              <img
                src={tickGreen}
                title='Tick Verde'
                alt='Tick Verde'
                className='table__icon'
              />
            </th>
            <th className='table__colum-three'>
              <img
                src={tickRed}
                title='Tick rojo'
                alt='Tick rojo'
                className='table__icon'
              />
            </th>
          </tr>
          <tr className='table__fila'>
          <th className={`table__colum ${openColumn === 8 ? 'open-column' : ''}`}
            isOpen={openColumn === 8}
            onClick={() => handleColumnClick(8)}>
              <h5 className='table__colum-title'>
                Vigilante 100% incluido sin límite de intervenciones*
              </h5>
              <i className={`fa-solid fa-chevron-right table__arrow ${openColumn === 8 ? 'open-arrow' : ''}`}></i>
              <p className={`table__colum-p ${openColumn === 8 ? 'open-p' : ''}`}>
                Si hace falta comprobar que todo está bien, enviamos a un
                vigilante a tu hogar o negocio, las veces que haga falta durante
                la vigencia del contrato sin coste adicional. <br/><span className='table__colum-p-span'>*Servicio
                no disponible en: Cuenca, Huesca, Palencia, Soria, Teruel,
                Ceuta, Melilla y las islas de La Gomera, El Hierro y La Palma.</span>
              </p>
            </th>
            <th className='table__colum-two'>
              <img
                src={tickGreen}
                title='Tick Verde'
                alt='Tick Verde'
                className='table__icon'
              />
            </th>
            <th className='table__colum-three'>
              <img
                src={tickRed}
                title='Tick rojo'
                alt='Tick rojo'
                className='table__icon'
              />
            </th>
          </tr>
          <tr className='table__fila odd'>
          <th className={`table__colum ${openColumn === 9 ? 'open-column' : ''}`}
            isOpen={openColumn === 9}
            onClick={() => handleColumnClick(9)}>
              <h5 className='table__colum-title'>
                Detectores de acceso con triple detección: vibraciones, golpes y
                apertura
              </h5>
              <i className={`fa-solid fa-chevron-right table__arrow ${openColumn === 9 ? 'open-arrow' : ''}`}></i>
              <p className={`table__colum-p ${openColumn === 9 ? 'open-p' : ''}`}>
                Única empresa que incluye en todas sus alarmas dispositivos con
                tecnología Shocksensor, capaces de detectar al intruso antes de
                que entre.
              </p>
            </th>
            <th className='table__colum-two'>
              <img
                src={tickGreen}
                title='Tick Verde'
                alt='Tick Verde'
                className='table__icon'
              />
            </th>
            <th className='table__colum-three'>
              <img
                src={tickRed}
                title='Tick rojo'
                alt='Tick rojo'
                className='table__icon'
              />
            </th>
          </tr>
          <tr className='table__fila'>
          <th className={`table__colum ${openColumn === 10 ? 'open-column' : ''}`}
            isOpen={openColumn === 10}
            onClick={() => handleColumnClick(10)}>
              <h5 className='table__colum-title'>
                Panel de control móvil con habla-escucha en caso de emergencia
              </h5>
              <i className={`fa-solid fa-chevron-right table__arrow ${openColumn === 10 ? 'open-arrow' : ''}`}></i>
              <p className={`table__colum-p ${openColumn === 10 ? 'open-p' : ''}`}>
                En caso de salto de alarma el panel puede desanclarse de la
                pared para facilitar la comunicación con la Central de Alarmas.
              </p>
            </th>
            <th className='table__colum-two'>
              <img
                src={tickGreen}
                title='Tick Verde'
                alt='Tick Verde'
                className='table__icon'
              />
            </th>
            <th className='table__colum-three'>
              <img
                src={tickRed}
                title='Tick rojo'
                alt='Tick rojo'
                className='table__icon'
              />
            </th>
          </tr>
          <tr className='table__fila odd'>
          <th className={`table__colum ${openColumn === 11 ? 'open-column' : ''}`}
            isOpen={openColumn === 11}
            onClick={() => handleColumnClick(11)}>
              <h5 className='table__colum-title'>
                Red exclusiva de comunicación de alta seguridad
              </h5>
              <i className={`fa-solid fa-chevron-right table__arrow ${openColumn === 11 ? 'open-arrow' : ''}`}></i>
              <p className={`table__colum-p ${openColumn === 11 ? 'open-p' : ''}`}>
                Única alarma con red ATN de Securitas Direct anti-inhibición y
                anti-sabotaje y con varias vías seguras de transmisión (4G, Wifi
                / Ethernet)
              </p>
            </th>
            <th className='table__colum-two'>
              <img
                src={tickGreen}
                title='Tick Verde'
                alt='Tick Verde'
                className='table__icon'
              />
            </th>
            <th className='table__colum-three'>
              <img
                src={tickRed}
                title='Tick rojo'
                alt='Tick rojo'
                className='table__icon'
              />
            </th>
          </tr>
          <tr className='table__fila '>
          <th className={`table__colum ${openColumn === 12 ? 'open-column' : ''}`}
            isOpen={openColumn === 12}
            onClick={() => handleColumnClick(12)}>
              <h5 className='table__colum-title'>
                Protección anti-inhibición con detección inmediata
              </h5>
              <i className={`fa-solid fa-chevron-right table__arrow ${openColumn === 12 ? 'open-arrow' : ''}`}></i>
              <p className={`table__colum-p ${openColumn === 12 ? 'open-p' : ''}`}>
                Nuestra alarma es la única que detecta e identifica y transmite
                la inhibición, a través de red ATN, en el mismo instante en que
                se produce y envía una alerta inmediata a prueba de inhibidores
                y sabotaje.
              </p>
            </th>
            <th className='table__colum-two'>
              <img
                src={tickGreen}
                title='Tick Verde'
                alt='Tick Verde'
                className='table__icon'
              />
            </th>
            <th className='table__colum-three'>
              <img
                src={tickRed}
                title='Tick rojo'
                alt='Tick rojo'
                className='table__icon'
              />
            </th>
          </tr>
          <tr className='table__fila odd'>
          <th className={`table__colum ${openColumn === 13 ? 'open-column' : ''}`}
            isOpen={openColumn === 13}
            onClick={() => handleColumnClick(13)}>
              <h5 className='table__colum-title'>ZeroVision®</h5>
              <i className={`fa-solid fa-chevron-right table__arrow ${openColumn === 13 ? 'open-arrow' : ''}`}></i>
              <p className={`table__colum-p ${openColumn === 13 ? 'open-p' : ''}`}>
                Sistema de humo certificado de Grado II integrado en un sistema
                de seguridad.
              </p>
            </th>
            <th className='table__colum-two'>
              <img
                src={tickGreen}
                title='Tick Verde'
                alt='Tick Verde'
                className='table__icon'
              />
            </th>
            <th className='table__colum-three'>
              <img
                src={tickRed}
                title='Tick rojo'
                alt='Tick rojo'
                className='table__icon'
              />
            </th>
          </tr>
        </tbody>
      </table>
    </section>
  );
};
export default Table;
