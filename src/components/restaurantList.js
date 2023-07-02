import restaurants from '../assets/data/commercesListData'

function RestaurantList() {

    return (
        <div>
            {restaurants.map((restaurant, idr) => (

                <div key={idr} className="restaurant-label">
                    <h3>{restaurant.name}</h3>
                    <p>Adresse : {restaurant.adress}</p>
                    <p className='restaurant-description'>Description : {restaurant.description}</p>
                    <img className ="photo-bar" src ={restaurant.photo} alt={restaurant.name} />
                </div>         
            ))}
        </div>

    )
}

export default RestaurantList