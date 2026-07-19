const catBedProducts = [
  {
    id: 7001,
    sku: "TRIXIE-CAVE-BED",

    slug: "trixie-cat-cave-bed",

    name: "Trixie Cozy Cat Cave Bed",

    shortDescription: "Soft enclosed cave bed for maximum comfort.",

    description:
      "A plush enclosed bed that provides warmth, privacy and security for cats.",

    brandId: 9,
    categoryId: 9,

    pet: "Cat",

    price: 2899,
    discountPrice: 2499,
    discountPercent: 14,

    currency: "INR",

    rating: 4.9,
    reviews: 248,

    stock: 41,

    featured: true,
    bestSeller: true,
    newArrival: false,

    tags: [
      "Cave Bed",
      "Indoor",
      "Warm"
    ],

    size: "Medium",

    color: "Grey",

    material: "Plush",

    images: [
      "/assets/products/trixie/cave-bed-1.jpg",
      "/assets/products/trixie/cave-bed-2.jpg",
      "/assets/products/trixie/cave-bed-3.jpg"
    ],

    specifications: {
      Material: "Plush",
      Washable: "Yes",
      Foldable: "Yes"
    },

    relatedProducts: [7002,7003]
  },

  {
    id:7002,

    sku:"TRIXIE-DONUT-CAT",

    slug:"trixie-donut-cat-bed",

    name:"Trixie Donut Plush Cat Bed",

    shortDescription:"Soft donut bed with raised edges.",

    description:"Perfect for cats that love curling up while sleeping.",

    brandId:9,

    categoryId:9,

    pet:"Cat",

    price:2399,

    discountPrice:1999,

    discountPercent:17,

    currency:"INR",

    rating:4.8,

    reviews:177,

    stock:63,

    featured:true,

    bestSeller:false,

    newArrival:true,

    tags:[
      "Donut",
      "Plush"
    ],

    size:"Small",

    color:"Cream",

    material:"Faux Fur",

    images:[
      "/assets/products/trixie/donut-cat-1.jpg",
      "/assets/products/trixie/donut-cat-2.jpg",
      "/assets/products/trixie/donut-cat-3.jpg"
    ],

    specifications:{
      Material:"Faux Fur",
      Washable:"Yes"
    },

    relatedProducts:[7001]
  },

  {
    id:7003,

    sku:"TRIXIE-WINDOW-HAMMOCK",

    slug:"trixie-window-cat-hammock",

    name:"Trixie Window Cat Hammock",

    shortDescription:"Window-mounted lounging hammock.",

    description:"Strong suction cups hold the hammock securely, allowing cats to sunbathe while watching outside.",

    brandId:9,

    categoryId:9,

    pet:"Cat",

    price:3299,

    discountPrice:2899,

    discountPercent:12,

    currency:"INR",

    rating:4.8,

    reviews:164,

    stock:34,

    featured:true,

    bestSeller:true,

    newArrival:false,

    tags:[
      "Window",
      "Hammock"
    ],

    size:"Universal",

    color:"Beige",

    material:"Canvas",

    images:[
      "/assets/products/trixie/window-hammock-1.jpg",
      "/assets/products/trixie/window-hammock-2.jpg",
      "/assets/products/trixie/window-hammock-3.jpg"
    ],

    specifications:{
      MaxWeight:"20kg"
    },

    relatedProducts:[7006]
  },

  {
    id:7004,

    sku:"TRIXIE-IGLOO",

    slug:"trixie-cat-igloo-house",

    name:"Trixie Plush Cat Igloo House",

    shortDescription:"Warm enclosed igloo bed.",

    description:"Ideal for cats that enjoy privacy and warmth.",

    brandId:9,

    categoryId:9,

    pet:"Cat",

    price:3699,

    discountPrice:3199,

    discountPercent:14,

    currency:"INR",

    rating:4.9,

    reviews:131,

    stock:29,

    featured:false,

    bestSeller:true,

    newArrival:true,

    tags:[
      "Igloo",
      "House"
    ],

    size:"Medium",

    color:"Brown",

    material:"Velvet Plush",

    images:[
      "/assets/products/trixie/igloo-1.jpg",
      "/assets/products/trixie/igloo-2.jpg",
      "/assets/products/trixie/igloo-3.jpg"
    ],

    specifications:{
      Washable:"Yes"
    },

    relatedProducts:[7001]
  },

  {
    id:7005,

    sku:"TRIXIE-ROUND",

    slug:"trixie-round-cat-bed",

    name:"Trixie Round Plush Cat Bed",

    shortDescription:"Round soft bed for everyday comfort.",

    description:"Ultra-soft plush material with removable cushion.",

    brandId:9,

    categoryId:9,

    pet:"Cat",

    price:1899,

    discountPrice:1599,

    discountPercent:16,

    currency:"INR",

    rating:4.7,

    reviews:221,

    stock:82,

    featured:false,

    bestSeller:true,

    newArrival:false,

    tags:[
      "Round",
      "Plush"
    ],

    size:"Small",

    color:"Pink",

    material:"Plush",

    images:[
      "/assets/products/trixie/round-cat-1.jpg",
      "/assets/products/trixie/round-cat-2.jpg",
      "/assets/products/trixie/round-cat-3.jpg"
    ],

    specifications:{
      Cushion:"Removable"
    },

    relatedProducts:[7002]
  },

  {
    id:7006,

    sku:"TRIXIE-ELEVATED",

    slug:"trixie-elevated-cat-lounger",

    name:"Trixie Elevated Cat Lounger",

    shortDescription:"Raised breathable resting cot.",

    description:"Keeps cats cool and comfortable with elevated airflow.",

    brandId:9,

    categoryId:9,

    pet:"Cat",

    price:2999,

    discountPrice:2599,

    discountPercent:13,

    currency:"INR",

    rating:4.8,

    reviews:118,

    stock:37,

    featured:true,

    bestSeller:false,

    newArrival:true,

    tags:[
      "Elevated",
      "Lounger"
    ],

    size:"Medium",

    color:"Black",

    material:"Steel & Fabric",

    images:[
      "/assets/products/trixie/elevated-1.jpg",
      "/assets/products/trixie/elevated-2.jpg",
      "/assets/products/trixie/elevated-3.jpg"
    ],

    specifications:{
      Foldable:"Yes"
    },

    relatedProducts:[7003]
  },

  {
    id:7007,

    sku:"TRIXIE-COOLING",

    slug:"trixie-cooling-cat-mat",

    name:"Trixie Cooling Gel Cat Mat",

    shortDescription:"Self-cooling mat for summer.",

    description:"Gel cooling technology keeps cats comfortable during hot weather.",

    brandId:9,

    categoryId:9,

    pet:"Cat",

    price:1699,

    discountPrice:1399,

    discountPercent:18,

    currency:"INR",

    rating:4.7,

    reviews:206,

    stock:67,

    featured:false,

    bestSeller:true,

    newArrival:false,

    tags:[
      "Cooling",
      "Summer"
    ],

    size:"Medium",

    color:"Blue",

    material:"Cooling Gel",

    images:[
      "/assets/products/trixie/cooling-cat-1.jpg",
      "/assets/products/trixie/cooling-cat-2.jpg",
      "/assets/products/trixie/cooling-cat-3.jpg"
    ],

    specifications:{
      Cooling:"Gel"
    },

    relatedProducts:[7006]
  },

  {
    id:7008,

    sku:"TRIXIE-SOFA-CAT",

    slug:"trixie-luxury-cat-sofa",

    name:"Trixie Luxury Cat Sofa Bed",

    shortDescription:"Premium velvet sofa bed.",

    description:"Elegant furniture-style cat bed with plush cushioning and removable cover.",

    brandId:9,

    categoryId:9,

    pet:"Cat",

    price:5299,

    discountPrice:4699,

    discountPercent:11,

    currency:"INR",

    rating:4.9,

    reviews:97,

    stock:18,

    featured:true,

    bestSeller:false,

    newArrival:true,

    tags:[
      "Luxury",
      "Sofa"
    ],

    size:"Large",

    color:"Charcoal",

    material:"Velvet",

    images:[
      "/assets/products/trixie/sofa-cat-1.jpg",
      "/assets/products/trixie/sofa-cat-2.jpg",
      "/assets/products/trixie/sofa-cat-3.jpg"
    ],

    specifications:{
      Material:"Velvet",
      Washable:"Yes"
    },

    relatedProducts:[7001]
  }
];

export default catBedProducts;