


const CardService = ({imgPhoto, imgIcon, serviceTitle, serviceSubtitle}) => {

    return (
        <section className={`service__section show-service `}>
              <img src={imgPhoto} 
              title="Securitas Direct" alt="Securitas Direct" className="service__img" />
              <article className="service__article">
                        {/* <img src={imgIcon} alt="Servicio" className="service__img-icon" /> */}
                        <h3 className="service__subtitle">{serviceTitle}</h3>
                        <hr className="service__hr"></hr>
                        <p className="service__paragrahp"> {serviceSubtitle} </p>
              </article>
         </section>
    )
}

export default CardService;