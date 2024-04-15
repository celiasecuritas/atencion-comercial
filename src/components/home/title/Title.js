
import "../../../styles/layout/title.scss";

const Title = ({grey, black, parragraph}) => {

    // ========== JSK =============
  
    return (
  
      // ========== HERO =============
      <>
      <article className="title">
            <h2 className="title__title">{grey}
           <span className="title__span">{black}</span></h2>
           <p className="title__paragraph">{parragraph}</p>
         </article>
</>
    );
  };
  export default Title ;