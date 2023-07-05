import commerces from "../assets/data/commercesListData"
import "../styles/elements.css"

function CommerceList() {

    return (
        <div>
            {commerces.map((commerce, idc) => (

                <div key={idc} className="element-label">
                    <h3>{commerce.name}</h3>
                    <p>Adresse : {commerce.adress}</p>
                    <p className='element-description'>Description : {commerce.description}</p>
                    <img className ="element-photo" src ={commerce.photo} alt={commerce.name} />
                </div>         
            ))}
        </div>

    )
}

export default CommerceList