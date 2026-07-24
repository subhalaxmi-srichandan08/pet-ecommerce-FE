const catToyProducts = [
  {
    id: 6001,
    sku: "KONG-CATNIP-MOUSE",

    slug: "kong-catnip-mouse-toy",

    name: "KONG Catnip Mouse Toy",

    shortDescription: "Premium refillable catnip mouse toy.",

    description:
      "Soft plush mouse filled with premium North American catnip to keep cats entertained for hours.",

    brandId: 8,
    categoryId: 8,

    pet: "Cat",

    price: 699,
    discountPrice: 549,
    discountPercent: 21,

    currency: "INR",

    rating: 4.8,
    reviews: 341,

    stock: 74,

    featured: true,
    bestSeller: true,
    newArrival: false,

    tags: [
      "Catnip",
      "Mouse",
      "Interactive"
    ],

    images: [
      "/assets/products/kong/catnip-mouse-1.jpg",
      "/assets/products/kong/catnip-mouse-2.jpg",
      "/assets/products/kong/catnip-mouse-3.jpg"
    ],

    specifications: {
      Material: "Plush",
      Filling: "Premium Catnip"
    },

    relatedProducts: [6002,6003]
  },

  {
    id:6002,

    sku:"TRIXIE-FEATHER-WAND",

    slug:"trixie-feather-wand",

    name:"Trixie Feather Wand Cat Teaser",

    shortDescription:"Interactive feather teaser wand.",

    description:"Encourages exercise and hunting instincts through interactive play.",

    brandId:9,

    categoryId:8,

    pet:"Cat",

    price:499,

    discountPrice:399,

    discountPercent:20,

    currency:"INR",

    rating:4.7,

    reviews:226,

    stock:98,

    featured:true,

    bestSeller:false,

    newArrival:true,

    tags:[
      "Feather",
      "Wand"
    ],

    images:[
      "/assets/products/trixie/feather-1.jpg",
      "/assets/products/trixie/feather-2.jpg",
      "/assets/products/trixie/feather-3.jpg"
    ],

    specifications:{
      Material:"Feather & Plastic"
    },

    relatedProducts:[6001]
  },

  {
    id:6003,

    sku:"TRIXIE-BALL-TRACK",

    slug:"trixie-ball-track",

    name:"Trixie Ball Track Interactive Toy",

    shortDescription:"Rolling ball puzzle toy.",

    description:"Stimulates your cat mentally while encouraging active play.",

    brandId:9,

    categoryId:8,

    pet:"Cat",

    price:1299,

    discountPrice:1099,

    discountPercent:15,

    currency:"INR",

    rating:4.8,

    reviews:173,

    stock:56,

    featured:true,

    bestSeller:true,

    newArrival:false,

    tags:[
      "Puzzle",
      "Ball Track"
    ],

    images:[
      "/assets/products/trixie/track-1.jpg",
      "/assets/products/trixie/track-2.jpg",
      "/assets/products/trixie/track-3.jpg"
    ],

    specifications:{
      Material:"ABS Plastic"
    },

    relatedProducts:[6004]
  },

  {
    id:6004,

    sku:"TRIXIE-LASER",

    slug:"trixie-laser-pointer",

    name:"Trixie Interactive Laser Pointer",

    shortDescription:"Rechargeable laser toy for cats.",

    description:"Automatic laser movement encourages cats to chase and exercise.",

    brandId:9,

    categoryId:8,

    pet:"Cat",

    price:999,

    discountPrice:849,

    discountPercent:15,

    currency:"INR",

    rating:4.6,

    reviews:194,

    stock:63,

    featured:false,

    bestSeller:true,

    newArrival:true,

    tags:[
      "Laser",
      "Rechargeable"
    ],

    images:[
      "/assets/products/trixie/laser-1.jpg",
      "/assets/products/trixie/laser-2.jpg",
      "/assets/products/trixie/laser-3.jpg"
    ],

    specifications:{
      Battery:"USB Rechargeable"
    },

    relatedProducts:[6003]
  },

  {
    id:6005,

    sku:"KONG-PLUSH-FISH",

    slug:"kong-plush-fish",

    name:"KONG Plush Fish Cat Toy",

    shortDescription:"Soft fish toy infused with catnip.",

    description:"Plush fish toy with crinkle sound and catnip for endless fun.",

    brandId:8,

    categoryId:8,

    pet:"Cat",

    price:649,

    discountPrice:499,

    discountPercent:23,

    currency:"INR",

    rating:4.7,

    reviews:282,

    stock:89,

    featured:false,

    bestSeller:false,

    newArrival:true,

    tags:[
      "Fish",
      "Catnip"
    ],

    images:[
      "/assets/products/kong/fish-1.jpg",
      "/assets/products/kong/fish-2.jpg",
      "/assets/products/kong/fish-3.jpg"
    ],

    specifications:{
      Material:"Plush"
    },

    relatedProducts:[6001]
  },

  {
    id:6006,

    sku:"TRIXIE-TUNNEL",

    slug:"trixie-cat-tunnel",

    name:"Trixie Foldable Cat Tunnel",

    shortDescription:"Collapsible play tunnel for cats.",

    description:"Encourages exploration, hiding and active play.",

    brandId:9,

    categoryId:8,

    pet:"Cat",

    price:1599,

    discountPrice:1399,

    discountPercent:13,

    currency:"INR",

    rating:4.8,

    reviews:148,

    stock:51,

    featured:true,

    bestSeller:false,

    newArrival:true,

    tags:[
      "Tunnel",
      "Foldable"
    ],

    images:[
      "/assets/products/trixie/tunnel-1.jpg",
      "/assets/products/trixie/tunnel-2.jpg",
      "/assets/products/trixie/tunnel-3.jpg"
    ],

    specifications:{
      Length:"120 cm"
    },

    relatedProducts:[6007]
  },

  {
    id:6007,

    sku:"TRIXIE-SPRING",

    slug:"trixie-colorful-spring-toy",

    name:"Trixie Colorful Spring Toy Set",

    shortDescription:"Pack of colorful bouncing springs.",

    description:"Cats love chasing these lightweight bouncing spring toys.",

    brandId:9,

    categoryId:8,

    pet:"Cat",

    price:349,

    discountPrice:249,

    discountPercent:29,

    currency:"INR",

    rating:4.6,

    reviews:397,

    stock:160,

    featured:false,

    bestSeller:true,

    newArrival:false,

    tags:[
      "Spring",
      "Pack"
    ],

    images:[
      "/assets/products/trixie/spring-1.jpg",
      "/assets/products/trixie/spring-2.jpg",
      "/assets/products/trixie/spring-3.jpg"
    ],

    specifications:{
      Quantity:"10 Pieces"
    },

    relatedProducts:[6005]
  },

  {
    id:6008,

    sku:"KONG-PUZZLE",

    slug:"kong-cat-puzzle-feeder",

    name:"KONG Interactive Puzzle Feeder",

    shortDescription:"Slow feeder puzzle toy for cats.",

    description:"Keeps cats mentally stimulated while rewarding them with treats.",

    brandId:8,

    categoryId:8,

    pet:"Cat",

    price:1899,

    discountPrice:1649,

    discountPercent:13,

    currency:"INR",

    rating:4.9,

    reviews:132,

    stock:39,

    featured:true,

    bestSeller:false,

    newArrival:true,

    tags:[
      "Puzzle",
      "Slow Feeder"
    ],

    images:[
      "/assets/products/kong/puzzle-1.jpg",
      "/assets/products/kong/puzzle-2.jpg",
      "/assets/products/kong/puzzle-3.jpg"
    ],

    specifications:{
      Material:"Food Grade Plastic"
    },

    relatedProducts:[6003]
  }
];

export default catToyProducts;