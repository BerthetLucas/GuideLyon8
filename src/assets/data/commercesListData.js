import cave from "../caveMonplaisir.jpg"
import pralus from "../pralus.jpg"
import marcheMP from '../marcheMP.jpg'
import marcheEU from "../marcheEU.jpg"
import cocotte from "../cocotte.jpg"

const commerces = [
  {
    idc: "0",
    name: "Pâtisserie Chocolaterie Pralus Lyon Monplaisir",
    adress: "103 Av. des Frères Lumière, 69008 Lyon",
    description: "Chaîne de patisserie emblématique de Lyon, essayer la brioche au praline c'est l'adopter !",
    photo: pralus,
  },

  {
    idc: "1",
    name: "CAVE MONPLAISIR",
    adress: "36 Rue Villon, 69008 Lyon",
    description: "Super cave à vin où le caviste est de bon conseil, il y en a pour tout les budgets",
    photo: cave,
  },

  {
    idc: "2",
    name: "Marché alimentaire Ambroise Courtois",
    adress: "Place Ambroise Courtois 69008 Lyon",
    description: "Marché alimentaire, coup de coeur pour le traiteur asiatique et ses samousas",
    photo: marcheMP,
  },

  {
    idc: "3",
    name: "Marché alimentaire des Etats-Unis",
    adress: "Place du 8 Mai 1945 69008 Lyon",
    description: "Grand marché alimentaire, prix abordables !",
    photo: marcheEU,
  },


  {
    idc: "4",
    name: "La P'tite Cocotte Monplaisir",
    adress: "115 Av. des Frères Lumière, 69008 Lyon",
    description: "Commerce vendant des articles pour la cuisine qui sont originaux, il y en a pour tous les prix, on adore leurs article faisant références à des rues de Monplaisir",
    photo: cocotte,
  },



];

export default commerces;
