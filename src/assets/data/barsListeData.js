import restaurant1 from "../restaurant1.jpeg";
import bistrotAutrement from "../bistrotAutrement.jpg";
import ninkasi from "../ninkasi.jpg";
import KF from "../KF.jpg";
import redhouse from "../redhouse.jpg";

const bars = [
  {
    id: "0",
    name: "Kaffee Berlin",
    adress: "26 Cr Albert Thomas, 69008 Lyon",
    description:
      "Bar sympathique qui vend de la bière Allemande, l'équipe est aux petits soins pour les clients. En plus si vous avez faim ils servent à manger, je recommande les burgers qui sont excellents.",
    priceLevel: "€",
    photo: KF,
  },

  {
    id: "2",
    name: "Ninkasi Sans Souci",
    adress: "26 Cr Albert Thomas, 69008 Lyon",
    description:
      "On ne présente plus la chaîne lyonnaise qui est un incontournable. La bière et la nourriture sont une valeur sûre, et il y a de temps en temps un DJ set en début de soirée. En bref, jamais déçu, un classique.",
    priceLevel: "€",
    photo: ninkasi,
  },

  {
    id: "3",
    name: "Le bistro autrement",
    adress: "12 Pl. Ambroise Courtois, 69008 Lyon",
    description:
      "Une des deux plus belles terrasses pour aller boire un verre dans le 8ème, à deux pas de la station Monplaisir l'accès est aisé. Normalement il y a des suggestions de cocktails du moment. Font à manger.",
    priceLevel: "€",
    photo: bistrotAutrement,
  },

  {
    id: "4",
    name: "L' Industrie Café Comptoir",
    adress: "10 Pl. Ambroise Courtois, 69008 Lyon",
    description:
      "La deuxième terrasse incontournable du 8ème arrondissement avec de la nourriture type bistrot français de bonne qualité.",
    priceLevel: "€€",
    photo: restaurant1,
  },

  {
    id: "5",
    name: "Red House",
    adress: "2 Pt Rue de Monplaisir, 69008 Lyon",
    description:
      "Bien connu des étudiants de l'université située juste à côté c'est un bar à ambiance type pub, qui passe de la musique et ferme tard. Ambiance très sympa avec des billards disponibles.",
    priceLevel: "€",
    photo: redhouse,
  },
];

export default bars;
