
import { Link } from 'react-router-dom'
import '../styles/banner.css'

function Banner (){
    return (
        
        <div className='ban'>
        <h1 className='title'>Le guide de la vie à Lyon 8</h1>

        <div className='menu'>
        <p><Link to=' /'>Menu Principal</Link></p>
        <p><Link to='/bars'>Bars</Link></p>
        <p><Link to=' /commerces'>Commerces</Link></p>
        <p>Restaurants</p>
        <p>Culture</p>
  
        </div>
        </div>  
    )
}

export default Banner