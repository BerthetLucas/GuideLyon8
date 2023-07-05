import "../styles/main_menu.css";
import { Link } from "react-router-dom";

function MainMenu() {
  return (
    <div className="maintable">
      <div>
        <h2>
          <Link to="/restaurants" className="main-menu-lien">
            Sortir au restaurant
          </Link>
        </h2>
        <h2>
          <Link to="/bars" className="main-menu-lien">Sortir boire un verre</Link>
        </h2>
      </div>

      <div>
        <h2>
          <Link to="/culture" className="main-menu-lien">Culture</Link>
        </h2>
        <h2>
          <Link to="/commerces" className="main-menu-lien">Shopping</Link>
        </h2>
      </div>
    </div>
  );
}

export default MainMenu;
