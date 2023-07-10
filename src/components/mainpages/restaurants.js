import Banner from '../banner.js'
import Ligne from '../ligne.js'
import RestaurantList from '../restaurantList.js'
import Footer from '../footer.js'


function Restaurant (){
    return (
        <div>
        <Banner />
        <Ligne />
        <RestaurantList />
        <Footer />
        </div>
        )
}

export default Restaurant