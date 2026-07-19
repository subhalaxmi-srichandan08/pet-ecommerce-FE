const dogToyProducts = [
  {
    id: 2001,
    sku: "KONG-CLASSIC-L",
    slug: "kong-classic-large",

    name: "KONG Classic Dog Toy - Large",

    shortDescription: "Durable natural rubber chew toy for aggressive chewers.",

    description:
      "The KONG Classic satisfies dogs' instinctual needs to chew while helping reduce boredom. Fill it with treats for extended playtime.",

    brandId: 8,
    categoryId: 2,

    pet: "Dog",

    price: 1299,
    discountPrice: 1099,
    discountPercent: 15,

    currency: "INR",

    rating: 4.9,
    reviews: 684,

    stock: 56,

    featured: true,
    bestSeller: true,
    newArrival: false,

    tags: [
      "Chew Toy",
      "Interactive",
      "Rubber"
    ],

    images: [
      "/assets/products/kong/classic-1.jpg",
      "/assets/products/kong/classic-2.jpg",
      "/assets/products/kong/classic-3.jpg"
    ],

    specifications: {
      Material: "Natural Rubber",
      Size: "Large",
      Color: "Red"
    },

    relatedProducts: [2002,2003]
  },

  {
    id:2002,

    sku:"KONG-EXTREME",

    slug:"kong-extreme-black",

    name:"KONG Extreme Black Dog Toy",

    shortDescription:"Extra tough chew toy for powerful chewers.",

    description:"Made with ultra-durable rubber for long-lasting play.",

    brandId:8,
    categoryId:2,

    pet:"Dog",

    price:1499,
    discountPrice:1299,
    discountPercent:13,

    currency:"INR",

    rating:4.8,

    reviews:432,

    stock:39,

    featured:true,

    bestSeller:true,

    newArrival:true,

    tags:[
      "Heavy Duty",
      "Chew"
    ],

    images:[
      "/assets/products/kong/extreme-1.jpg",
      "/assets/products/kong/extreme-2.jpg",
      "/assets/products/kong/extreme-3.jpg"
    ],

    specifications:{
      Material:"Natural Rubber",
      Color:"Black"
    },

    relatedProducts:[2001]
  },

  {
    id:2003,

    sku:"TRIXIE-ROPE",

    slug:"trixie-rope-toy",

    name:"Trixie Cotton Rope Tug Toy",

    shortDescription:"Strong rope toy for tug and fetch games.",

    description:"Made from premium cotton fibers that help clean teeth while playing.",

    brandId:9,

    categoryId:2,

    pet:"Dog",

    price:499,

    discountPrice:399,

    discountPercent:20,

    currency:"INR",

    rating:4.7,

    reviews:218,

    stock:81,

    featured:false,

    bestSeller:true,

    newArrival:false,

    tags:[
      "Rope",
      "Tug"
    ],

    images:[
      "/assets/products/trixie/rope-1.jpg",
      "/assets/products/trixie/rope-2.jpg",
      "/assets/products/trixie/rope-3.jpg"
    ],

    specifications:{
      Material:"Cotton",
      Length:"40 cm"
    },

    relatedProducts:[2004]
  },

  {
    id:2004,

    sku:"TRIXIE-FRISBEE",

    slug:"trixie-flying-disc",

    name:"Trixie Flying Disc Dog Frisbee",

    shortDescription:"Soft flying disc for outdoor fetch.",

    description:"Flexible and lightweight frisbee designed for safe outdoor games.",

    brandId:9,

    categoryId:2,

    pet:"Dog",

    price:699,

    discountPrice:549,

    discountPercent:21,

    currency:"INR",

    rating:4.6,

    reviews:164,

    stock:62,

    featured:false,

    bestSeller:false,

    newArrival:true,

    tags:[
      "Frisbee",
      "Outdoor"
    ],

    images:[
      "/assets/products/trixie/frisbee-1.jpg",
      "/assets/products/trixie/frisbee-2.jpg",
      "/assets/products/trixie/frisbee-3.jpg"
    ],

    specifications:{
      Diameter:"22 cm"
    },

    relatedProducts:[2003]
  },

  {
    id:2005,

    sku:"KONG-BALL",

    slug:"kong-squeezz-ball",

    name:"KONG Squeezz Ball",

    shortDescription:"Durable squeaky fetch ball.",

    description:"Bounce, squeak and fetch with this long-lasting rubber ball.",

    brandId:8,

    categoryId:2,

    pet:"Dog",

    price:799,

    discountPrice:649,

    discountPercent:19,

    currency:"INR",

    rating:4.8,

    reviews:348,

    stock:71,

    featured:true,

    bestSeller:false,

    newArrival:true,

    tags:[
      "Ball",
      "Fetch"
    ],

    images:[
      "/assets/products/kong/ball-1.jpg",
      "/assets/products/kong/ball-2.jpg",
      "/assets/products/kong/ball-3.jpg"
    ],

    specifications:{
      Material:"Rubber"
    },

    relatedProducts:[2001]
  },

  {
    id:2006,

    sku:"TRIXIE-PLUSH",

    slug:"trixie-plush-elephant",

    name:"Trixie Plush Elephant Toy",

    shortDescription:"Soft plush toy with squeaker.",

    description:"Ideal for gentle dogs who enjoy cuddling and indoor play.",

    brandId:9,

    categoryId:2,

    pet:"Dog",

    price:899,

    discountPrice:749,

    discountPercent:17,

    currency:"INR",

    rating:4.5,

    reviews:127,

    stock:45,

    featured:false,

    bestSeller:false,

    newArrival:true,

    tags:[
      "Plush",
      "Soft Toy"
    ],

    images:[
      "/assets/products/trixie/plush-1.jpg",
      "/assets/products/trixie/plush-2.jpg",
      "/assets/products/trixie/plush-3.jpg"
    ],

    specifications:{
      Material:"Polyester Plush"
    },

    relatedProducts:[2007]
  },

  {
    id:2007,

    sku:"KONG-WOBBLER",

    slug:"kong-wobbler",

    name:"KONG Wobbler Treat Dispensing Toy",

    shortDescription:"Interactive food dispensing toy.",

    description:"Encourages slow feeding and mental stimulation.",

    brandId:8,

    categoryId:2,

    pet:"Dog",

    price:1799,

    discountPrice:1599,

    discountPercent:11,

    currency:"INR",

    rating:4.9,

    reviews:285,

    stock:28,

    featured:true,

    bestSeller:true,

    newArrival:false,

    tags:[
      "Puzzle",
      "Treat Dispenser"
    ],

    images:[
      "/assets/products/kong/wobbler-1.jpg",
      "/assets/products/kong/wobbler-2.jpg",
      "/assets/products/kong/wobbler-3.jpg"
    ],

    specifications:{
      Material:"Food Grade Plastic"
    },

    relatedProducts:[2001]
  },

  {
    id:2008,

    sku:"TRIXIE-TENNIS",

    slug:"trixie-tennis-ball-pack",

    name:"Trixie Tennis Ball Pack (4 pcs)",

    shortDescription:"Pack of four durable tennis balls.",

    description:"Perfect for fetch games in the park or backyard.",

    brandId:9,

    categoryId:2,

    pet:"Dog",

    price:599,

    discountPrice:449,

    discountPercent:25,

    currency:"INR",

    rating:4.7,

    reviews:403,

    stock:94,

    featured:false,

    bestSeller:true,

    newArrival:false,

    tags:[
      "Ball",
      "Outdoor"
    ],

    images:[
      "/assets/products/trixie/tennis-1.jpg",
      "/assets/products/trixie/tennis-2.jpg",
      "/assets/products/trixie/tennis-3.jpg"
    ],

    specifications:{
      Quantity:"4 Balls"
    },

    relatedProducts:[2005]
  }
];

export default dogToyProducts;