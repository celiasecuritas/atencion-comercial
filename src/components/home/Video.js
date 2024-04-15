/* eslint-disable jsx-a11y/iframe-has-title */
/* eslint-disable react/no-unknown-property */

import "../../styles/layout/video.scss";

import Title from "./title/Title";

// import iconPlay from "../../img/video/Play.png";
// import imgVideo from "../../img/video/video3D.jpg";

const Video = () => {
  // ========== JSK =============

  return (
    // ========== HERO =============

    <section className='video' id='video'>
      <Title
        grey='Nuestra tecnología más avanzada, '
        black='conectada con nuestros expertos en seguridad'
        parragraph='Descubre cómo funciona nuestro sistema de seguirdad'
      />

      <article className='video__article'>
        <iframe
          src='https://player.vimeo.com/video/642674695?h=f94eda3760&amp;badge=0&amp;autopause=0&amp;player_id=0&amp;app_id=5847p'
          className='video__iframe'
          frameBorder='0'
        ></iframe>
      </article>
    </section>
  );
};
export default Video;
