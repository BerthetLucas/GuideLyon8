import '../styles/barList.css'
import bars from '../assets/data/barsListeData'

function BarList() {

    return (
        <div>
            {bars.map((bar, id) => (

                <div key={id} className="bar-label">
                    <h3>{bar.name}</h3>
                    <p>Adresse : {bar.adress}</p>
                    <p className='bar-description'>Description : {bar.description}</p>
                    <p>Niveau de prix : {bar.priceLevel}</p> 
                    <img className ="photo-bar" src ={bar.photo} alt={bar.name} />
                </div>         
            ))}
        </div>

    )
}

export default BarList