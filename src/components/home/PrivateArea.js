import "../../styles/layout/privatearea.scss";

import iconOperadora from "../../img/click.png";

const PrivateArea = () => {

  
    return (
        <a href='https://www.securitasdirect.es/'>
        <section className='area'>
            <img
            src={iconOperadora}
            title='Operadora'
            alt='Operadora'
            className='area__icon'
          />
          <h3 className='area__title'>
           Área<br></br>
            privada
          </h3>
          
          
        </section> 
         </a>
    );
  };
  export default PrivateArea;
  