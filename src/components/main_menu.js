
import { Link } from "react-router-dom";
import '../styles/main_menu.css'



function MainMenu() {
  return (
    <div className="d-flex justify-content-evenly mt-5 mb-5 md lg">
      <div>
        <h2>
          <Link to="/restaurants" className="main-menu-lien btn btn-lg mb-4 btn-dark">
            Sortir au restaurant
          </Link>
        </h2>
        <h2>
          <Link to="/bars" className="btn btn-lg btn-dark">
            Sortir boire un verre
          </Link>
        </h2>
      </div>

      <div>
        <h2>
          <Link to="/culture" className="btn btn-lg mb-4 btn-dark">
            Culture
          </Link>
        </h2>
        <h2>
          <Link to="/commerces" className="btn btn-lg btn-dark">
            Shopping
          </Link>
        </h2>
      </div>
    </div>
  );
}

export default MainMenu;
