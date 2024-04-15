 import "../../styles/layout/bodegon.scss";
 import Title from "./title/Title";

import imgBodegon from "../../img/bodegon-dispositivos.png";

const Bodegon = () => {

    // ========== JSK =============
  
    return (
  
      // ========== HERO =============
      
      <section className="bodegon">
        <Title 
             grey="Alarma anti-ocupación"
             black="con expulsión inmediata"
             parragraph="Cuenta con grabación de imágenes que serán facilitadas
              a la Policía como prueba y tecnología ZeroVision para expulsar 
              al intruso en segundos."
        />

        <img src={ imgBodegon} 
         title="Bodegon dispositivos" alt="Bodegon dispositivos" className="bodegon__img" />

      </section>
    );
  };
  export default Bodegon ;