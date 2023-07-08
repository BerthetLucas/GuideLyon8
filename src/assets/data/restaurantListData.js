
import traiteur from"../traiteurSassoun.jpg";
import senchiki from "../Senkichi.jpg"
import chef from "../chef.jpg"
import casa from "../casaLula.jpg"
import boispizza from "../boisPizza.jpg"
import cotecours from "../cotecours.jpg"

const restaurants = [
  {
    idr: "0",
    name: "Monplaisir Côté Cour",
    adress: "64 Av. des Frères Lumière, 69008 Lyon",
    description: "Restaurant avec terrasse extérieur très sympa, la nourriture y est particulière bonne dans l'esprit bistrot français. La salle intérieur est très bien décorée",
    photo: cotecours,
  },

  {
    idr: "1",
    name: "Traiteur Sassoun Monplaisir",
    adress: "73 Av. des Frères Lumière, 69008 Lyon",
    description: "Traiteur libannais, ils propose de nombreuses spécialitées qui sont toutes plus gouteuses les unes que les autres. A noter une formule du midi très accessible en prix",
    photo: traiteur,
  },

  {
    idr: "2",
    name: "Senkichi",
    adress: "31 Av. des Frères Lumière, 69008 Lyon",
    description: "Restaurant japonnais, je recommande les brochettes.",
    photo: senchiki,
  },

  {
    idr: "3",
    name: "CHËF - berliner kebap | LUMIÈRE",
    adress: "123 Av. des Frères Lumière, 69008 Lyon",
    description: "Le meilleur kebab de France s'est implanté à Lyon 8. Le titre n'est pas volé c'est clairement un régale, tout simplement un sans faute",
    photo: chef,
  },

  {
    idr: "4",
    name: "CASA LULA",
    adress: "3 Rue Edouard Nieuport, 69008 Lyon",
    description: "Petit nouveau entre le Bachut et Mermoz, pas encore testé mais la carte donne envie, c'est simple c'est clair. Ils proposent de la nourriture Italienne et possèdent une terrase sympa avec un boulodrome",
    photo: casa,
  },

  {
    idr: "5",
    name: "Bois Pizza",
    adress: "26 Rue Thomas Blanchet, 69008 Lyon",
    description: "Exellentes pizzas, patron super sympa un de mes bons plans pour un dimanche soir de qualité",
    photo: boispizza,
  },



];

export default restaurants;
