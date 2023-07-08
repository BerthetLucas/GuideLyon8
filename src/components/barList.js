import '../styles/elements.css'
import bars from '../assets/data/barsListeData'

function BarList() {

    return (
        <div>
            {bars.map((bar, id) => (

                <div key={id} className="element-label">
                    <h3>{bar.name}</h3>
                    <p>Adresse : {bar.adress}</p>
                    <p className='element-description'>Description : {bar.description}</p>
                    <p>Niveau de prix : {bar.priceLevel}</p> 
          
                    <img className ="element-photo" src ={bar.photo} alt={bar.name}/>
                    <figcaption><em>Photo libre de droit en provenance de Pixabay à but d'illustration, ne reflète pas le lieu réel.</em></figcaption>
                
                </div>         
            ))}
        </div>

    )
}

export default BarList