const catAccessoryProducts = [
  {
    id: 8001,
    sku: "TRIXIE-LITTER-BOX",

    slug: "trixie-open-cat-litter-box",

    name: "Trixie Open Cat Litter Box",

    shortDescription: "Spacious open litter tray.",

    description:
      "Durable plastic litter box with high sides to minimize litter scatter.",

    brandId: 9,
    categoryId: 10,

    pet: "Cat",

    price: 999,
    discountPrice: 799,
    discountPercent: 20,

    currency: "INR",

    rating: 4.7,
    reviews: 326,

    stock: 92,

    featured: false,
    bestSeller: true,
    newArrival: false,

    tags: [
      "Litter Box",
      "Open Tray"
    ],

    images: [
      "/assets/products/trixie/litter-box-1.jpg",
      "/assets/products/trixie/litter-box-2.jpg",
      "/assets/products/trixie/litter-box-3.jpg"
    ],

    specifications: {
      Material: "Plastic",
      Size: "Large"
    },

    relatedProducts: [8002]
  },

  {
    id:8002,

    sku:"TRIXIE-COVERED-LITTER",

    slug:"trixie-covered-litter-box",

    name:"Trixie Covered Cat Litter Box",

    shortDescription:"Enclosed litter box with carbon filter.",

    description:"Provides privacy and helps control odor with a replaceable charcoal filter.",

    brandId:9,

    categoryId:10,

    pet:"Cat",

    price:3299,

    discountPrice:2899,

    discountPercent:12,

    currency:"INR",

    rating:4.8,

    reviews:171,

    stock:48,

    featured:true,

    bestSeller:true,

    newArrival:true,

    tags:[
      "Covered",
      "Odor Control"
    ],

    images:[
      "/assets/products/trixie/covered-litter-1.jpg",
      "/assets/products/trixie/covered-litter-2.jpg",
      "/assets/products/trixie/covered-litter-3.jpg"
    ],

    specifications:{
      Filter:"Activated Carbon",
      Door:"Swing Door"
    },

    relatedProducts:[8001]
  },

  {
    id:8003,

    sku:"WHISKAS-LITTER",

    slug:"whiskas-clumping-cat-litter",

    name:"Whiskas Clumping Cat Litter 10kg",

    shortDescription:"Fast clumping, low dust cat litter.",

    description:"Highly absorbent bentonite litter with long-lasting odor control.",

    brandId:4,

    categoryId:10,

    pet:"Cat",

    price:899,

    discountPrice:749,

    discountPercent:17,

    currency:"INR",

    rating:4.8,

    reviews:543,

    stock:138,

    featured:true,

    bestSeller:true,

    newArrival:false,

    tags:[
      "Cat Litter",
      "Clumping"
    ],

    images:[
      "/assets/products/whiskas/litter-1.jpg",
      "/assets/products/whiskas/litter-2.jpg",
      "/assets/products/whiskas/litter-3.jpg"
    ],

    specifications:{
      Weight:"10kg",
      Type:"Clumping"
    },

    relatedProducts:[8001]
  },

  {
    id:8004,

    sku:"TRIXIE-WATER-FOUNTAIN",

    slug:"trixie-pet-water-fountain",

    name:"Trixie Automatic Pet Water Fountain",

    shortDescription:"Continuous filtered water fountain.",

    description:"Keeps water fresh and encourages cats to drink more.",

    brandId:9,

    categoryId:13,

    pet:"Cat",

    price:2999,

    discountPrice:2599,

    discountPercent:13,

    currency:"INR",

    rating:4.9,

    reviews:242,

    stock:39,

    featured:true,

    bestSeller:false,

    newArrival:true,

    tags:[
      "Water Fountain",
      "Automatic"
    ],

    images:[
      "/assets/products/trixie/fountain-1.jpg",
      "/assets/products/trixie/fountain-2.jpg",
      "/assets/products/trixie/fountain-3.jpg"
    ],

    specifications:{
      Capacity:"2.5L",
      Power:"USB"
    },

    relatedProducts:[8005]
  },

  {
    id:8005,

    sku:"TRIXIE-CARRIER",

    slug:"trixie-cat-travel-carrier",

    name:"Trixie Premium Cat Carrier",

    shortDescription:"Hard-shell travel carrier.",

    description:"Airline-friendly pet carrier with ventilation and locking door.",

    brandId:9,

    categoryId:11,

    pet:"Cat",

    price:4499,

    discountPrice:3999,

    discountPercent:11,

    currency:"INR",

    rating:4.8,

    reviews:156,

    stock:31,

    featured:true,

    bestSeller:true,

    newArrival:false,

    tags:[
      "Carrier",
      "Travel"
    ],

    images:[
      "/assets/products/trixie/carrier-1.jpg",
      "/assets/products/trixie/carrier-2.jpg",
      "/assets/products/trixie/carrier-3.jpg"
    ],

    specifications:{
      MaxWeight:"8kg"
    },

    relatedProducts:[8004]
  },

  {
    id:8006,

    sku:"TRIXIE-SCRATCHING-POST",

    slug:"trixie-sisal-scratching-post",

    name:"Trixie Sisal Scratching Post",

    shortDescription:"Natural sisal scratching post.",

    description:"Protect furniture while satisfying your cat's scratching instincts.",

    brandId:9,

    categoryId:12,

    pet:"Cat",

    price:1899,

    discountPrice:1599,

    discountPercent:16,

    currency:"INR",

    rating:4.8,

    reviews:382,

    stock:58,

    featured:true,

    bestSeller:true,

    newArrival:false,

    tags:[
      "Scratching",
      "Sisal"
    ],

    images:[
      "/assets/products/trixie/scratching-post-1.jpg",
      "/assets/products/trixie/scratching-post-2.jpg",
      "/assets/products/trixie/scratching-post-3.jpg"
    ],

    specifications:{
      Height:"60 cm",
      Material:"Natural Sisal"
    },

    relatedProducts:[8007]
  },

  {
    id:8007,

    sku:"TRIXIE-GROOMING",

    slug:"trixie-cat-grooming-brush",

    name:"Trixie Self Cleaning Grooming Brush",

    shortDescription:"Self-cleaning slicker brush.",

    description:"Removes loose fur and undercoat with one-click cleaning.",

    brandId:9,

    categoryId:13,

    pet:"Cat",

    price:899,

    discountPrice:699,

    discountPercent:22,

    currency:"INR",

    rating:4.7,

    reviews:273,

    stock:81,

    featured:false,

    bestSeller:true,

    newArrival:true,

    tags:[
      "Brush",
      "Grooming"
    ],

    images:[
      "/assets/products/trixie/cat-brush-1.jpg",
      "/assets/products/trixie/cat-brush-2.jpg",
      "/assets/products/trixie/cat-brush-3.jpg"
    ],

    specifications:{
      Type:"Self Cleaning"
    },

    relatedProducts:[8006]
  },

  {
    id:8008,

    sku:"TRIXIE-DOUBLE-BOWL",

    slug:"trixie-double-cat-bowl",

    name:"Trixie Ceramic Double Cat Bowl",

    shortDescription:"Ceramic food and water bowl set.",

    description:"Premium ceramic bowl with bamboo stand for food and water.",

    brandId:9,

    categoryId:13,

    pet:"Cat",

    price:1499,

    discountPrice:1249,

    discountPercent:17,

    currency:"INR",

    rating:4.8,

    reviews:201,

    stock:63,

    featured:false,

    bestSeller:false,

    newArrival:true,

    tags:[
      "Ceramic",
      "Bowl"
    ],

    images:[
      "/assets/products/trixie/cat-bowl-1.jpg",
      "/assets/products/trixie/cat-bowl-2.jpg",
      "/assets/products/trixie/cat-bowl-3.jpg"
    ],

    specifications:{
      Material:"Ceramic",
      Capacity:"350ml x2"
    },

    relatedProducts:[8004]
  }
];

export default catAccessoryProducts;