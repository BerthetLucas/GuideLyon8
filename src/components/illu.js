import imageDeLaPlace from "../assets/Monplaisir.jpg";
import "../styles/illu.css";

function BasDePagePrincipale() {
  return (
    <div className="main">
      <div className="containeralpha">
        <img
          src={imageDeLaPlace}
          className="imagePlace"
          alt="vue aerienne de la place monplaisir"
        ></img>
      </div>
    </div>
  );
}

export default BasDePagePrincipale;
