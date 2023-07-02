import commerces from "../assets/data/commercesListData"

function CommerceList() {

    return (
        <div>
            {commerces.map((commerce, idc) => (

                <div key={idc} className="commerce-label">
                    <h3>{commerce.name}</h3>
                    <p>Adresse : {commerce.adress}</p>
                    <p className='commerce-description'>Description : {commerce.description}</p>
                    <img className ="photo-bar" src ={commerce.photo} alt={commerce.name} />
                </div>         
            ))}
        </div>

    )
}

export default CommerceList