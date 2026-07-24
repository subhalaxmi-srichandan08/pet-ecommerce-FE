import { createProduct } from "../productFactory";
import { PETS } from "../productEnums";

const dogFoodProducts = [
  createProduct({
    id: 1001,

    sku: "RC-MAXI-15KG",

    slug: "royal-canin-maxi-adult-15kg",

    name: "Royal Canin Maxi Adult Dry Dog Food 15kg",

    shortDescription:
      "Complete nutrition for adult large breed dogs.",

    description:
      "Royal Canin Maxi Adult supports digestion, bones and joints.",

    pet: PETS.DOG,

    brand: {
      id: 1,
      name: "Royal Canin",
      slug: "royal-canin",
      logo: "/assets/brands/royal-canin.png",
    },

    category: {
      id: 1,
      name: "Food",
      slug: "dog-food",
    },

    price: 7499,

    discountPrice: 6699,

    stock: 34,

    rating: 4.9,

    reviews: 241,

    featured: true,

    bestSeller: true,

    thumbnail:
      "/assets/products/royal-canin/maxi-adult-1.jpg",

    images: [
      "/assets/products/royal-canin/maxi-adult-1.jpg",
      "/assets/products/royal-canin/maxi-adult-2.jpg",
      "/assets/products/royal-canin/maxi-adult-3.jpg",
    ],

    tags: [
      "Adult",
      "Large Breed",
      "Chicken",
      "Dry Food",
    ],

    specifications: {
      lifeStage: "Adult",
      breedSize: "Large",
      flavor: "Chicken",
      weight: "15kg",
    },

    shipping: {
      weight: "15kg",
      dimensions: "80 x 45 x 15 cm",
    },

    relatedProducts: [1002, 1003],
  }),
];

export default dogFoodProducts;