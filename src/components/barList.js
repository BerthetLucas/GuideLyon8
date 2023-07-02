import '../styles/barList.css'
import restaurant1 from '../assets/restaurant1.jpg'
import bistrotAutrement from '../assets/bistrotAutrement.jpeg'
import ninkasi from '../assets/ninkasi.jpeg'
import KF from '../assets/KF.jpeg'
import redhouse from '../assets/redhouse.jpeg'

function BarList() {

    const bars = [

        {id: "0", name : "Kaffee Berlin", adress : "26 Cr Albert Thomas, 69008 Lyon", description : "Bar très sympa qui vends de la bière Allemande, l'équipe est au petit soin pour les clients. En plus si vous avez faim ils servent à manger, je recommande les burgers qui sont excellents", priceLevel : "€", photo : KF}, 

        {id: "2", name : "Ninkasi Sans Souci", adress : "26 Cr Albert Thomas, 69008 Lyon", description : "On ne présente plus la chaîne Lyonnaise qui est un incontournable. La bière et la nourriture sont une valeur sûr et il y a de temps à autre un dj-set en début de soirée. En bref, jamais déçu, un classique", priceLevel : "€", photo : ninkasi}, 

        {id: "3", name : "Le bistro autrement", adress : "12 Pl. Ambroise Courtois, 69008 Lyon", description : "Une des deux plus belles terrasses pour aller boire un verre dans le 8ème, à deux pas du métro l'accès est simple. Normalement, il y a des suggestions de cocktails du moment. Font à manger", priceLevel : "€", photo : bistrotAutrement}, 

        {id: "4", name : "L' Industrie Café Comptoir", adress : "10 Pl. Ambroise Courtois, 69008 Lyon", description : "La deuxième terrasse incontournable du 8ème arrondissement avec de la nourriture type bistrot français de bonne qualité", priceLevel : "€€", photo : restaurant1}, 


        {id : "5", name : "Red House", adress : "2 Pt Rue de Monplaisir, 69008 Lyon", description : "Bien connu des étudiants de l'université à côté c'est un bar à ambiance type pub, qui passe de la musique et ferme tard. Ambiance très sympa avec des billards disponibles", priceLevel : "€", photo : redhouse}, 


    ];

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