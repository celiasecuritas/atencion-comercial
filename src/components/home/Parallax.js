import "../../styles/layout/parallax.scss";

const Parallax = ({ backgroundImage, title, subtitle }) => {
  const parallaxStyle = {
    backgroundImage: `url(${backgroundImage})`,
  };

  // ========== JSK =============

  return (
    // ========== HERO =============

    <section className='parallax' style={parallaxStyle}>
      <div className='fondo'></div>

      <h2 className='parallax__title  '> {title}</h2>
      <p className='parallax__subtitle'>{subtitle} </p>
      <div className='parallax__peak'></div>
    </section>
  );
};
export default Parallax;
