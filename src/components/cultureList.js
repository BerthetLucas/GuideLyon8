import cultures from "../assets/data/cultureListData";
import "../styles/elements.css";

function CultureList() {
  return (
    <div>
      {cultures.map((culture, idculture) => (
        <div key={idculture} className="element-label">
          <h3>{culture.name}</h3>
          <p>Adresse : {culture.adress}</p>
          <p className="element-description">
            Description : {culture.description}
          </p>

          <img
            className="element-photo"
            src={culture.photo}
            alt={culture.name}
          />
          <figcaption>
            <em>
              Photo libre de droit en provenance de Pixabay à but
              d'illustration, ne reflète pas le lieu réel.
            </em>
          </figcaption>
        </div>
      ))}
    </div>
  );
}

export default CultureList;
