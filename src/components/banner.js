import { NavLink } from "react-router-dom";
import "../styles/banner.css";

function Banner() {
  return (

<nav className="navbar navbar-expand-lg bg-body-tertiary">
  <div className="container-fluid">
    <NavLink className="navbar-brand" to="/">Home</NavLink>
    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon"></span>
    </button>
    <div className="collapse navbar-collapse" id="navbarNav">
      <ul className="navbar-nav">
        <li className="nav-item">
          <NavLink className="nav-link active" aria-current="page" to="/bars">Bars</NavLink>
        </li>
        <li className="nav-item">
          <NavLink className="nav-link" to="/commerces">Features</NavLink>
        </li>
        <li className="nav-item">
          <NavLink className="nav-link" to="/restaurants">Pricing</NavLink>
        </li>
        <li className="nav-item">
          <NavLink className="nav-link" to="/culture">Pricing</NavLink>
        </li>
        <li className="nav-item">
          <NavLink className="nav-link" to="/culture">Pricing</NavLink>
        </li>
        
      </ul>
    </div>
  </div>
</nav>

  );
}

export default Banner;
