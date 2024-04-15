import "../../styles/layout/hero.scss";
import "../../styles/core/Animated.scss";

import logo from "../../img/header/logo.png";

const Hero = () => {
  return (
    // ========== HERO =============

    <section className='hero ' id='home'>
      <h2 className='hero__title  animated-title '>
        Bienvenido al portal web de Securitas Direct y Vodafone
      </h2>
      <img
        src={logo}
        title='Logo Securitas y Vodafone'
        alt='Logo Securitas y Vodafone'
        className='hero__img animated-title'
      />
      <p className='hero__subtitle animated-title'>
        Nueva alarma de Securitas Direct con tecnología PreSense™, que nos
        permite actuar antes de que una situación se convierta en un problema
      </p>
    </section>
  );
};
export default Hero;
