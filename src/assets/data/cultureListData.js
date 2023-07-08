import institut from "../institut.jpg";
import musee from "../museeLumière.jpg";
import dance from "../dance.jpg";

const cultures = [
  {
    idculture: "0",
    name: "Institut Lumière",
    adress: "Rue du Premier Film, 69008 Lyon",
    description:
      "L'Institut Lumière, dont le siège se situe à la Villa Lumière à Lyon, est une association loi de 1901 créée à Lyon en 1982. Il consacre son activité à la diffusion et à la conservation du patrimoine cinématographique. ",
    photo: institut,
  },

  {
    idculture: "1",
    name: "Musée Lumière",
    adress: "25 Rue du Premier Film, 69008 Lyon",
    description:
      "La Villa Lumière est une maison située à Lyon, dans la métropole de Lyon. Ce monument situé à proximité du hangar du Premier-Film fait l'objet d'un classement au titre des monuments historiques depuis le 20 mai 1986.",
    photo: musee,
  },

  {
    idculture: "2",
    name: "Maison de la Danse",
    adress: "Rue du Premier Film, 69008 Lyon",
    description:
      "Lieu entièrement dédié à la danse, aussi bien contemporaine que classique, et destinée à un public varié.",
    photo: dance,
  },
];

export default cultures;
