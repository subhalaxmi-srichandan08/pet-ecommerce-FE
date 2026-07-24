const catFoodProducts = [
  {
    id: 5001,
    sku: "WHISKAS-ADULT-TUNA-7KG",
    slug: "whiskas-adult-tuna-dry-food-7kg",

    name: "Whiskas Adult Tuna Dry Cat Food 7kg",

    shortDescription: "Complete and balanced nutrition for adult cats.",

    description:
      "Whiskas Adult Tuna recipe provides essential vitamins, minerals, and Omega fatty acids to support healthy skin, coat, digestion, and urinary health.",

    brandId: 4,
    categoryId: 7,

    pet: "Cat",

    price: 2899,
    discountPrice: 2499,
    discountPercent: 14,

    currency: "INR",

    rating: 4.8,
    reviews: 742,

    stock: 86,

    featured: true,
    bestSeller: true,
    newArrival: false,

    tags: [
      "Dry Food",
      "Adult",
      "Tuna"
    ],

    weight: "7kg",

    images: [
      "/assets/products/whiskas/adult-tuna-1.jpg",
      "/assets/products/whiskas/adult-tuna-2.jpg",
      "/assets/products/whiskas/adult-tuna-3.jpg"
    ],

    specifications: {
      LifeStage: "Adult",
      Flavor: "Tuna",
      FoodType: "Dry",
      Weight: "7kg"
    },

    relatedProducts: [5002,5003]
  },

  {
    id:5002,

    sku:"WHISKAS-KITTEN-3KG",

    slug:"whiskas-kitten-ocean-fish",

    name:"Whiskas Kitten Ocean Fish Dry Food 3kg",

    shortDescription:"Nutrition for growing kittens.",

    description:"Rich in DHA, calcium and protein for healthy kitten growth.",

    brandId:4,

    categoryId:7,

    pet:"Cat",

    price:1499,

    discountPrice:1299,

    discountPercent:13,

    currency:"INR",

    rating:4.8,

    reviews:394,

    stock:74,

    featured:true,

    bestSeller:false,

    newArrival:true,

    tags:[
      "Kitten",
      "Ocean Fish"
    ],

    weight:"3kg",

    images:[
      "/assets/products/whiskas/kitten-1.jpg",
      "/assets/products/whiskas/kitten-2.jpg",
      "/assets/products/whiskas/kitten-3.jpg"
    ],

    specifications:{
      LifeStage:"Kitten",
      Flavor:"Ocean Fish"
    },

    relatedProducts:[5001]
  },

  {
    id:5003,

    sku:"MEO-ADULT-SEAFOOD",

    slug:"meo-adult-seafood",

    name:"Me-O Adult Seafood Dry Cat Food",

    shortDescription:"Premium seafood recipe for adult cats.",

    description:"Complete dry food with taurine and essential vitamins.",

    brandId:5,

    categoryId:7,

    pet:"Cat",

    price:2399,

    discountPrice:2099,

    discountPercent:13,

    currency:"INR",

    rating:4.7,

    reviews:321,

    stock:67,

    featured:true,

    bestSeller:true,

    newArrival:false,

    tags:[
      "Seafood",
      "Dry Food"
    ],

    weight:"7kg",

    images:[
      "/assets/products/me-o/adult-1.jpg",
      "/assets/products/me-o/adult-2.jpg",
      "/assets/products/me-o/adult-3.jpg"
    ],

    specifications:{
      Flavor:"Seafood",
      FoodType:"Dry"
    },

    relatedProducts:[5001]
  },

  {
    id:5004,

    sku:"RC-PERSIAN",

    slug:"royal-canin-persian-adult",

    name:"Royal Canin Persian Adult Cat Food",

    shortDescription:"Breed-specific nutrition for Persian cats.",

    description:"Supports long hair, digestion and hairball reduction.",

    brandId:1,

    categoryId:7,

    pet:"Cat",

    price:4199,

    discountPrice:3799,

    discountPercent:10,

    currency:"INR",

    rating:4.9,

    reviews:206,

    stock:41,

    featured:true,

    bestSeller:false,

    newArrival:true,

    tags:[
      "Persian",
      "Premium"
    ],

    weight:"4kg",

    images:[
      "/assets/products/royal-canin/persian-1.jpg",
      "/assets/products/royal-canin/persian-2.jpg",
      "/assets/products/royal-canin/persian-3.jpg"
    ],

    specifications:{
      Breed:"Persian",
      FoodType:"Dry"
    },

    relatedProducts:[5001]
  },

  {
    id:5005,

    sku:"SHEBA-TUNA",

    slug:"sheba-tuna-wet-food",

    name:"Sheba Premium Tuna Wet Cat Food (Pack of 12)",

    shortDescription:"Delicious premium wet food.",

    description:"Tender tuna chunks in rich gravy made for picky eaters.",

    brandId:6,

    categoryId:7,

    pet:"Cat",

    price:1199,

    discountPrice:999,

    discountPercent:17,

    currency:"INR",

    rating:4.9,

    reviews:611,

    stock:113,

    featured:true,

    bestSeller:true,

    newArrival:false,

    tags:[
      "Wet Food",
      "Tuna"
    ],

    weight:"12 x 85g",

    images:[
      "/assets/products/sheba/tuna-1.jpg",
      "/assets/products/sheba/tuna-2.jpg",
      "/assets/products/sheba/tuna-3.jpg"
    ],

    specifications:{
      FoodType:"Wet",
      Pack:"12"
    },

    relatedProducts:[5006]
  },

  {
    id:5006,

    sku:"SHEBA-CHICKEN",

    slug:"sheba-chicken-gravy",

    name:"Sheba Chicken Gravy Wet Food",

    shortDescription:"Tender chicken in delicious gravy.",

    description:"Premium wet food enriched with protein and vitamins.",

    brandId:6,

    categoryId:7,

    pet:"Cat",

    price:1199,

    discountPrice:999,

    discountPercent:17,

    currency:"INR",

    rating:4.8,

    reviews:288,

    stock:92,

    featured:false,

    bestSeller:false,

    newArrival:true,

    tags:[
      "Chicken",
      "Wet Food"
    ],

    weight:"12 x 85g",

    images:[
      "/assets/products/sheba/chicken-1.jpg",
      "/assets/products/sheba/chicken-2.jpg",
      "/assets/products/sheba/chicken-3.jpg"
    ],

    specifications:{
      FoodType:"Wet"
    },

    relatedProducts:[5005]
  },

  {
    id:5007,

    sku:"RC-KITTEN",

    slug:"royal-canin-kitten",

    name:"Royal Canin Kitten Dry Food",

    shortDescription:"Balanced nutrition for kittens.",

    description:"Supports healthy growth, immunity and digestion during early life.",

    brandId:1,

    categoryId:7,

    pet:"Cat",

    price:2899,

    discountPrice:2599,

    discountPercent:10,

    currency:"INR",

    rating:4.9,

    reviews:177,

    stock:58,

    featured:true,

    bestSeller:false,

    newArrival:true,

    tags:[
      "Kitten",
      "Dry Food"
    ],

    weight:"2kg",

    images:[
      "/assets/products/royal-canin/kitten-1.jpg",
      "/assets/products/royal-canin/kitten-2.jpg",
      "/assets/products/royal-canin/kitten-3.jpg"
    ],

    specifications:{
      LifeStage:"Kitten"
    },

    relatedProducts:[5002]
  },

  {
    id:5008,

    sku:"MEO-KITTEN",

    slug:"meo-kitten-ocean-fish",

    name:"Me-O Kitten Ocean Fish Dry Food",

    shortDescription:"Complete kitten nutrition with DHA.",

    description:"Supports brain development, strong bones and healthy digestion.",

    brandId:5,

    categoryId:7,

    pet:"Cat",

    price:1399,

    discountPrice:1199,

    discountPercent:14,

    currency:"INR",

    rating:4.7,

    reviews:214,

    stock:83,

    featured:false,

    bestSeller:true,

    newArrival:false,

    tags:[
      "Kitten",
      "Ocean Fish"
    ],

    weight:"3kg",

    images:[
      "/assets/products/me-o/kitten-1.jpg",
      "/assets/products/me-o/kitten-2.jpg",
      "/assets/products/me-o/kitten-3.jpg"
    ],

    specifications:{
      LifeStage:"Kitten",
      Flavor:"Ocean Fish"
    },

    relatedProducts:[5002]
  }
];

export default catFoodProducts;