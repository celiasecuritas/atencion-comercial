import React, { useState} from 'react';

import "../../../styles/core/Animated.scss";

import "../../../styles/layout/carrousel.scss";
import Title from "../title/Title";

// =============== IMG DISPOSITIVOS ==============

import iconPlaca from "../../../img/carousel/imagen-modulo-3d-placa.png";
import iconUnidad from "../../../img/carousel/Unidad-central-1.png";
import iconPanel from "../../../img/carousel/svk-llave.png";
import iconFoto from "../../../img/carousel/imagen-modulo-3d-fotodetector.png";
import iconSentinel from "../../../img/carousel/sentinelII-slider.png";
import iconShock from "../../../img/carousel/imagen-modulo-3d-shocksensor.png";
import iconArlo from "../../../img/carousel/imagen-modulo-3d-camara.png";
import iconDetect from "../../../img/carousel/detector-perimetral.png";
import iconApp from "../../../img/carousel/pantalla1_0.png";
import iconZero from "../../../img/carousel/zerovision.png";

// =============== IMG FONDOS DISPOSITIVOS==============
import contentDisuasorio from "../../../img/carousel/background/disuarorio.jpeg";
import contentUnidadCentral from "../../../img/carousel/background/unidad-central.jpg";
import contentUnidadPanel from "../../../img/carousel/background/panel-control.jpg";
import contentFotodetector from "../../../img/carousel/background/fotodetector.jpg";
import contentSentinel from "../../../img/carousel/background/sentinel.jpg";
import contentShock from "../../../img/carousel/background/Shock-sensor1.jpg";
import contentArlo from "../../../img/carousel/background/arlo.jpg";
import contentPerimetral from "../../../img/carousel/background/perimetral.jpeg";
import contentApp from "../../../img/carousel/background/content-movil.jpg";
import contentZero from "../../../img/carousel/zerovision.jpg";

const Carrousel = () => {
  const carouselItems = [
    {
      imageIcon: iconPlaca,
      imageContent: contentDisuasorio,
      title: "Placa disuasoria",
      subTitle: "La primera barrera frente al robo",
      text: "La placa de Securitas Direct es la primera barrera ante las intrusiones gracias a su potente efecto disuasorio que repele a ladrones y diferencia las viviendas y negocios protegidos de los que no lo están. Nuestros clientes reciben varias placas al contratar nuestro sistema de alarma de alta visibilidad y durabilidad.",
      textOne:
        "Nuestros clientes reciben varias placas al contratar nuestro sistema de alarma de alta visibilidad y durabilidad.",
    },
    {
      imageIcon: iconUnidad,
      imageContent: contentUnidadCentral,
      title: "Unidad Central",
      subTitle: "El cerebro de una alarma inteligente",
      text: "La unidad central, con tecnología PreSense™, recibe y analiza las señales de la alarma en tiempo real. Cuenta con inteligencia artificial, tecnología Big Data y análisis inteligente de imagen. ",
      textOne:
        "Conectada 24 horas con nuestra Central de Alarmas gracias a las comunicaciones encriptadas de alta seguridad, a prueba de inhibidores, cortes de corriente y de línea telefónica, la unidad central está siempre conectada con nuestros expertos en seguridad.",
      spanTwo: "Siempre protegida.",
      textTwo:
        " Instalada en un lugar oculto y de difícil acceso, la unidad central está a salvo de sabotajes para mantener sus comunicaciones activas en todo momento.",
    },
    {
      imageIcon: iconPanel,
      imageContent: contentUnidadPanel,
      title: "Panel de control",
      subTitle: "Una entrada más protegida",
      text: "El panel de control refuerza la protección en el principal punto de acceso: la entrada. Si salta la alarma de seguridad, podemos escuchar lo que pasa y disuadir al intruso avisándole de que ha sido detectado.",
      spanOne: "Un control a tu medida.",
      textOne:
        " Tú eliges cómo conectar y desconectar tu alarma: con el mando a distancia, las llaves inteligentes o tu código personal.",
      spanTwo: "Tan fácil como escuchar.",
      textTwo:
        " El panel de control cuenta con notificaciones por voz para que siempre sepas en qué estado está tu alarma. Pide ayuda ante cualquier emergencia. Incluye un botón SOS para pedir ayuda en caso de emergencia. Te atenderemos en segundos y avisaremos por ti al 112.",
    },
    {
      imageIcon: iconFoto,
      imageContent: contentFotodetector,
      title: "Fotodetector",
      subTitle: "Nuestra mejor tecnología para una verificación",
      text: "Los fotodetectores detectan movimiento en el interior de tu hogar y toman imágenes en alta resolución con las que, gracias al protocolo de envío de alta velocidad, nuestros expertos comprueban en segundos lo que está ocurriendo. ",
      spanOne: "Seguridad en alta resolución.",
      textOne:
        " Cuenta con calidad de imagen Full HD, un ángulo de visión que abarca grandes espacios y visión nocturna para captar todos los detalles a cualquier hora del día.",
    },
    {
      imageIcon: iconSentinel,
      imageContent: contentSentinel,
      title: "Sentinel: Alarma Anti-inhibición",
      subTitle: "La protección que nunca descansa",
      span: "Seguridad en alta resolución.",
      text: " Vela por tu seguridad las 24 horas: detecta si alguien intenta bloquear las señales de la alarma para casas y envía una alerta inmediata. Desde nuestra Central de Alarmas actuamos en segundos, anticipándonos al intento de intrusión.",
      spanOne: "Tu día a día fuera de peligros. ",
      textOne:
        " Monitoriza temperatura, humedad y calidad del aire para avisarte ante un posible riesgo. Además, puedes recibir alertas personalizadas en tu móvil. ",
      spanTwo: "SOS a prueba de inhibidores. ",
      textTwo:
        " Ante cualquier emergencia puedes pulsar el botón SOS: recibiremos el aviso, incluso si hay un inhibidor de frecuencias cerca, y te ayudaremos de inmediato.",
    },
    {
      imageIcon: iconShock,
      imageContent: contentShock,
      title: "Detector de acceso Shocksensor",
      subTitle: "El detector de acceso Shocksensor protege puertas y ventanas",
      text: "El dispositivo Shocksensor protege puertas y ventanas y envía una alerta al detectar que alguien está intentando abrir o manipular un punto de acceso. ",
      spanOne: "Protección avanzada en puertas y ventanas.",
      textOne:
        " Protegemos todos los puntos de acceso vulnerables creando un escudo completo que, gracias a la tecnología PreSenseTM, nos permite anticiparnos a cualquier intento de intrusión.",
    },
    {
      imageIcon: iconArlo,
      imageContent: contentArlo,
      title: "Cámaras de seguridad",
      subTitle: "Ve, disuade y protege",
      text: "Refuerza la protección en zonas exteriores e interiores y vigila lo que ocurre desde cualquier lugar gracias a las cámaras de seguridad Arlo Security.  ",
      spanOne: "Más que una cámara:",
      textOne:
        " protección inteligente Su avanzada tecnología permite grabar vídeo en alta definición, tanto de día como de noche. Detectan actividad y, gracias al análisis inteligente de imágenes, distinguen personas, animales y vehículos.",
      spanTwo: "La máxima disuasión.",
      textTwo:
        " Cuenta con sirena integrada y un potente foco de luz que se activa automáticamente al detectar movimiento. Así, los intrusos saben que han sido detectados.",
    },
    {
      imageIcon: iconDetect,
      imageContent: contentPerimetral,
      title: "Detector perimetral",
      subTitle: "Seguridad avanzada, también en el exterior",
      text: "Nos anticipamos a los intentos de intrusión protegiendo las zonas exteriores: los detectores perimetrales detectan actividad y envían imágenes para que comprobemos lo que ocurre. ",
      spanOne: "Protección inteligente",
      textOne:
        " en jardines y terrazas. Gracias a la tecnología PreSense™ y a su doble sensor, distinguimos en tiempo real si el movimiento es de personas o animales, facilitando la mejor respuesta de nuestros expertos ante un peligro real.",
    },
    {
      imageIcon: iconApp,
      imageContent: contentApp,
      title: "App My verisure",
      subTitle: "Conectada o desconectada tu alarma estés donde estés",
      text: "Puedes controlar tu alarma desde cualquier lugar gracias a la app móvil My Verisure, que te permite conectar o desconectar tu sistema de seguridad fácilmente, acceder a tus cámaras o pedir ayuda ante cualquier emergencia, dentro o fuera de casa. ",
      textOne:
        "También puedes recibir notificaciones y avisos en tiempo real para estar al tanto de lo que ocurre en tu hogar o negocio, estés donde estés.",
    },
    {
      imageIcon: iconZero,
      imageContent: contentZero,
      title: "ZeroVision",
      subTitle: "La alarma que cambia las reglas del juego",
      text: "Ante una intrusión confirmada, damos aviso a Policía y activamos ZeroVision, que impide la visión para expulsar al intruso en segundos. ",
      textOne:
        "Actuamos directamente, incluso antes de que llegue la Policía, para evitar el robo o la ocupación.",
    },
  ];

  const [currentIndex, setCurrentIndex] = useState(0);
  const [selectedElement, setSelectedElement] = useState(null);
  const [fadeClass, setFadeClass] = useState('');
  


  const updateSelectedElement = (index) => {
    setSelectedElement(index);
  };

  const nextSlide = () => {
    setFadeClass('fade-out-previous ');
    setTimeout(() => {
      setCurrentIndex((prevIndex) => {
        const newIndex = (prevIndex + 1) % carouselItems.length;
        updateSelectedElement(newIndex);
        setFadeClass('fade-in-previous');
        return newIndex;
      });
    }, 300);
  };

  const previousSlide = () => {
    setFadeClass('fade-out-next  '); 
    setTimeout(() => {
   
    setCurrentIndex((prevIndex) => {
      const newIndex =
        prevIndex === 0 ? carouselItems.length - 1 : prevIndex - 1;
      updateSelectedElement(newIndex);
      setFadeClass('fade-in-next  '); 
      return newIndex;
    });
  }, 300);
  };
  // ========== JSK =============



  return (
    <section className='carrousel' id='dispositivos'>
      <Title grey='Dispositivos:' black='Descubre un mundo de posibilidades' />

      <article className='content-img '>
        {carouselItems.map((item, index) => (
          <img
            className={`content-img__img ${
              index === selectedElement ? "selected" : ""
            }`}
            key={index}
            src={item.imageIcon}
            alt={item.title}
            onClick={() => {
              setCurrentIndex(index);
              setSelectedElement(index);
            }}
          />
        ))}
      </article>

      <section className='carrousel__section  '>
        <article className={`carrousel__article  ${fadeClass}`}>
          <h3 className='carrousel__title  '>
            {carouselItems[currentIndex].title}
          </h3>
          <hr className='carrousel__hr '></hr>
          <h4 className='carrousel__subtitle '>
            {carouselItems[currentIndex].subTitle}
          </h4>
          <p className='carrousel__paragrahp'>
            <span className='carrousel__span'>
              {carouselItems[currentIndex].span}
            </span>
            {carouselItems[currentIndex].text}
          </p>
          <p className='carrousel__paragrahp'>
            <span className='carrousel__span'>
              {carouselItems[currentIndex].spanOne}
            </span>
            {carouselItems[currentIndex].textOne}
          </p>
          <p className='carrousel__paragrahp'>
            <span className='carrousel__span'>
              {carouselItems[currentIndex].spanTwo}
            </span>
            {carouselItems[currentIndex].textTwo}
          </p>
        </article>
        <img
          src={carouselItems[currentIndex].imageContent}
          alt={carouselItems[currentIndex].title}
          className={`carrousel__img  ${fadeClass}`}
        />
        <article className='carrousel__div-buttons'>
          <button onClick={previousSlide} className='carrousel__button'>
            <i className='fa-solid fa-chevron-left'></i>
          </button>
          <button onClick={nextSlide} className='carrousel__button'>
            <i className='fa-solid fa-chevron-right'></i>
          </button>
        </article>
      </section>
    </section>
  );
};
export default Carrousel;
