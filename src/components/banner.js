
import { Link } from 'react-router-dom'
import '../styles/banner.css'

function Banner (){
    return (
        
        <div className='ban'>
        <h1 className='title'>Le guide de la vie à Lyon 8</h1>

        <div className='menu'>
        <p><Link to='/' className='menu-liens'>Menu Principal</Link></p>
        <p><Link to='/bars' className='menu-liens'>Bars</Link></p>
        <p><Link to='/commerces' className='menu-liens'>Commerces</Link></p>
        <p><Link to='/restaurants' className='menu-liens'>Restaurants</Link></p>
        <p><Link to='/culture' className='menu-liens'>Culture</Link></p>
  
        </div>
        </div>  
    )
}

export default Banner