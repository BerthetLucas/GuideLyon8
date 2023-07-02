import '../styles/main_menu.css'
import { Link } from 'react-router-dom'

function MainMenu (){
return (

    <div className = 'maintable'> 
    <div>
    <h2><Link to='/restaurants'>Sortir au restaurant</Link></h2>
    <h2><Link to='/bars'>Sortir boire un verre</Link></h2>
    </div>   

    <div>
    <h2><Link to='/culture'>Culture</Link></h2>
    <h2><Link to='/commerces'>Shopping</Link></h2>
    </div>

    </div>

)
}

export default MainMenu