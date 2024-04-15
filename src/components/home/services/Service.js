import "../../../styles/layout/service.scss";
import CardService from "./Card-service";
// ========== IMG =============

import imgRobo from "../../../img/service/ladron.jpg";
import imgSensor from "../../../img/service/piso_bajo-min.jpg";
import imgCamara from "../../../img/service/persona_detectada-min.jpg";
import imgSistema from "../../../img/service/chip.jpg";
import imgActuar from "../../../img/service/actuacion-inmediata@2x.jpg";
import Title from "../title/Title";

const Service = () => {
  // ========== JSK =============

  return (
    // ========== HERO =============

    <>
      {/* =========== services ============== */}
      <section className='service' id='miancla'>
        <Title
          grey='PreSense™'
          black='la tecnología que se anticipa al peligro'
          parragraph='Gracias a PreSense™, nuestros sistemas de 
            alarma pueden detectar cualquier situación de peligro para actuar de inmediato.'
        />
        <CardService
          imgPhoto={imgRobo}
          serviceTitle='Protección anti-inhibición'
          serviceSubtitle='La alarma anti-inhibición está siempre activa 
            y nos avisa si alguien intenta sabotear las comunicaciones de la alarma activando 
            un inhibidor de frecuencias cerca de tu casa.'
        />
        <CardService
          imgPhoto={imgSensor}
          serviceTitle='Sensores avanzados en puertas y ventanas'
          serviceSubtitle='Protegemos los puntos de acceso vulnerables con detectores de acceso sensibles, no solo a apertura, 
                sino también a vibraciones y golpes, que nos permiten detectar al intruso antes de que entre.'
        />

        <CardService
          imgPhoto={imgCamara}
          serviceTitle='Cámaras de seguridad con análisis de imagen'
          serviceSubtitle='Si hay cualquier movimiento sospechoso,
                 nuestras cámaras de seguridad lo detectan e identifican si se trata de animales,
                  vehículos o personas gracias al análisis inteligente de imágenes'
        />
        <CardService
          imgPhoto={imgSistema}
          serviceTitle='Sistema con inteligencia artificial'
          serviceSubtitle='Analiza en tiempo real las señales e imágenes 
                de la alarma. Así, nuestros expertos cuentan con toda la información para
                identificar el peligro e intervenir de inmediato.'
        />
        <CardService
          imgPhoto={imgActuar}
          serviceTitle='Detectamos antes para actuar de inmediato'
          serviceSubtitle='Un experto recibe la alerta y cuenta con toda la información para responder en segundos'
        />
        {/* =========== INPUT SUBIR ARCHIVO ============== 
         <form className="form">
         <label for="fileUpload" className="form__label">Subir archivo</label> 
        <input type="file" id="fileUpload" className="form__inputfile"/>
       </form>*/}
      </section>
    </>
  );
};
export default Service;
