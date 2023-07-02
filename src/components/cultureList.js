import cultures from "../assets/data/cultureListData";

function CultureList (){

    return (
        <div>
            {cultures.map((culture, idculture)=>(
                <div key={idculture} className="culture-label">
                     <h3>{culture.name}</h3>
                    <p>Adresse : {culture.adress}</p>
                    <p className='culture-description'>Description : {culture.description}</p>
                    <img className ="photo-bar" src ={culture.photo} alt={culture.name} />
                </div>
            )
            )}
        </div>
    )
}

export default CultureList