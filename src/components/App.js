/* IMPORT */
// import { useLocation, matchPath } from "react-router";
//import { BrowserRouter as  Route, } from 'react-router-dom';
import "../styles/App.scss";

/* COMPONENTES */
import Header from "./Header";
import Footer from "./Footer";

import Service from "./home/services/Service";
import Hero from "./home/Hero";
import Bodegon from "./home/Bodegon";
import Instructions from "./home/Instructions";
import Mobile from "./home/Mobile";
import Parallax from "./home/Parallax";
import Functionalarm from "./home/Functionalarm";
import Carrousel from "./home/carrousel/Carrousel";
import Includes from "./home/Includes";
import Video from "./home/Video";
import Table from "./home/Table";
import Button from "./home/Button";
/* IMAGENES PARALLAX */

import parallaxInstaladora from "../img/parallax/instaladora.jpg";
import parallaxReceptora from "../img/parallax/receptora.jpg";
import parallaxCasa from "../img/parallax/casa.jpg";
import Guardian from "./home/Guardian";
import Country from "./home/Country";
import PrivateArea from "./home/PrivateArea";

function App() {
  /* VARIABLES Y DATOS */

  /* EFECTOS */
  /* FUNCIONES HANDLER */
  /* FUNCIONES Y VARIABLES AUXILIARES PARA PINTAR EL HTML */
  /* HTML */

  // const { pathname } = useLocation();
  // const routeData = matchPath("product/:productId", pathname);

  // const productId = routeData !== null ? routeData.params.productId : "";

  return (
    <div className='App'>
      <Header />
      <main>
        {/* <Routes>
          <Route path='/' element={<Home />} />
        </Routes> 
        <Home />*/}
        <PrivateArea />
        <Hero />
        <Service />
        <Video />
        <Parallax
          backgroundImage={parallaxInstaladora}
          title='En Securitas Direct tenemos una alarma para ti'
          subtitle='Sabemos que cada hogar es diferente y sus necesidades de protección, 
         también. Por eso, en Securitas Direct hemos creado una alarma con tecnología
          PreSense™ que se adapta a cada familia.'
        />
        <Bodegon />
        <Includes />
        <Functionalarm />
        <Parallax
          backgroundImage={parallaxReceptora}
          title='Al otro lado, siempre estamos nosotros'
          subtitle='Contamos con expertos preparados para responder las 24horas y protocolos de actuación basados en más de 30 años de experiencia y miles de casos de éxito.'
        />
        <Carrousel />
        <Instructions />
        <Parallax
          backgroundImage={parallaxCasa}
          title='La empresa de alarmas líder en España y Europa'
          subtitle='Más de 30 años de experiencia y 1.900.000 clientes en España avalan el liderazgo de Securitas Direct.

          Además, nuestros clientes son los más satisfechos del sector: valoran nuestro servicio con un 9,1 sobre 10, sobresaliente.'
        />
        <Country />
        <Guardian />
        <Mobile />
        <Table />

        <Button />
      </main>
      <Footer />
    </div>
  );
}

export default App;
