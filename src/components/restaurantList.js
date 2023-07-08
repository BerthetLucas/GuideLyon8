import restaurants from "../assets/data/restaurantListData";
import "../styles/elements.css";

function RestaurantList() {
  return (
    <div>
      {restaurants.map((restaurant, idr) => (
        <div key={idr} className="element-label">
          <h3>{restaurant.name}</h3>
          <p>Adresse : {restaurant.adress}</p>
          <p className="element-description">
            Description : {restaurant.description}
          </p>

          <img
            className="element-photo"
            src={restaurant.photo}
            alt={restaurant.name}
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

export default RestaurantList;
