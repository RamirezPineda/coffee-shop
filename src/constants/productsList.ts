export interface Product {
  id: number;
  name: string;
  price: number;
  image: string;
  description: string;
  category: string;
}


export const productsList: Product[] = [
  {
    id: 1,
    name: "Nitro Cold Brew",
    price: 5.5,
    image:
      "https://www.borealcoffee.ch/images/thumbnails/440/460/detailed/1/Coldbrew_shop_online_.png",
    description: `Notre Nitro Cold Brew débarque enfin ! \n

    Vous connaissez notre House Blend, le voici en version froide pour accompagner les jours de chaleur. Ce café 100% arabica organique est composé de 50% de café d'Honduras et de 50% de café du Nicaragua.
    \n
    Ce dernier est également disponible en pack de 40 canettes.`,
    category: "BEANS",
  },
  {
    id: 2,
    name: "Nitro Cold Brew Pack x40",
    price: 150.0,
    image:
      "https://www.borealcoffee.ch/images/thumbnails/440/460/detailed/1/Sans_titre_(500%C2%A0%C3%97%C2%A0500%C2%A0px)_(1).png",
    description: "",
    category: "BEANS",
  },
  {
    id: 3,
    name: "Yesid Galindo, Colombie",
    price: 29.5,
    image:
      "https://www.borealcoffee.ch/images/thumbnails/440/460/detailed/1/Yesid_Galindo.png",
    description: "",
    category: "OMNI-ROAST L 350G",
  },
  {
    id: 4,
    name: "House Blend",
    price: 17.5,
    image:
      "https://www.borealcoffee.ch/images/thumbnails/440/460/detailed/1/House_Blend.png",
    description: "",
    category: "ESPRESSO ROAST L 350G",
  },
  {
    id: 5,
    name: "Mamma Mia's",
    price: 17.5,
    image:
      "https://www.borealcoffee.ch/images/thumbnails/440/460/detailed/1/Mamma_Mia's.png",
    description: "",
    category: "ESPRESSO ROAST L 350G",
  },
];
