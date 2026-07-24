const dogBedProducts = [
  {
    id: 3001,
    sku: "TRIXIE-ORTHO-L",

    slug: "trixie-orthopedic-dog-bed-large",

    name: "Trixie Orthopedic Memory Foam Dog Bed - Large",

    shortDescription:
      "Premium orthopedic memory foam bed for large breed dogs.",

    description:
      "Provides maximum comfort and joint support with high-density orthopedic memory foam. Ideal for senior dogs and large breeds.",

    brandId: 9,

    categoryId: 3,

    pet: "Dog",

    price: 5999,

    discountPrice: 5299,

    discountPercent: 12,

    currency: "INR",

    rating: 4.9,

    reviews: 284,

    stock: 28,

    featured: true,

    bestSeller: true,

    newArrival: false,

    tags: [
      "Orthopedic",
      "Memory Foam",
      "Large Breed"
    ],

    size: "Large",

    color: "Grey",

    material: "Memory Foam",

    images: [
      "/assets/products/trixie/ortho-bed-1.jpg",
      "/assets/products/trixie/ortho-bed-2.jpg",
      "/assets/products/trixie/ortho-bed-3.jpg"
    ],

    specifications: {
      Material: "Memory Foam",
      Washable: "Yes",
      Waterproof: "No",
      Size: "Large"
    },

    relatedProducts: [3002,3003]
  },

  {
    id:3002,

    sku:"TRIXIE-DONUT-M",

    slug:"trixie-donut-bed-medium",

    name:"Trixie Donut Calming Dog Bed",

    shortDescription:"Soft calming donut bed for better sleep.",

    description:"Ultra-soft plush bed with raised edges that helps anxious dogs relax.",

    brandId:9,

    categoryId:3,

    pet:"Dog",

    price:3499,

    discountPrice:2999,

    discountPercent:14,

    currency:"INR",

    rating:4.8,

    reviews:191,

    stock:37,

    featured:true,

    bestSeller:false,

    newArrival:true,

    tags:[
      "Calming",
      "Plush"
    ],

    size:"Medium",

    color:"Beige",

    material:"Faux Fur",

    images:[
      "/assets/products/trixie/donut-bed-1.jpg",
      "/assets/products/trixie/donut-bed-2.jpg",
      "/assets/products/trixie/donut-bed-3.jpg"
    ],

    specifications:{
      Material:"Plush",
      Washable:"Yes"
    },

    relatedProducts:[3001]
  },

  {
    id:3003,

    sku:"TRIXIE-WATERPROOF",

    slug:"trixie-waterproof-bed",

    name:"Trixie Waterproof Outdoor Dog Bed",

    shortDescription:"Water-resistant dog bed for indoor and outdoor use.",

    description:"Durable waterproof fabric suitable for balconies, gardens and travel.",

    brandId:9,

    categoryId:3,

    pet:"Dog",

    price:4199,

    discountPrice:3699,

    discountPercent:12,

    currency:"INR",

    rating:4.7,

    reviews:132,

    stock:41,

    featured:false,

    bestSeller:true,

    newArrival:true,

    tags:[
      "Outdoor",
      "Waterproof"
    ],

    size:"Large",

    color:"Black",

    material:"Oxford Fabric",

    images:[
      "/assets/products/trixie/waterproof-bed-1.jpg",
      "/assets/products/trixie/waterproof-bed-2.jpg",
      "/assets/products/trixie/waterproof-bed-3.jpg"
    ],

    specifications:{
      Waterproof:"Yes",
      Washable:"Yes"
    },

    relatedProducts:[3001]
  },

  {
    id:3004,

    sku:"TRIXIE-COOLING",

    slug:"trixie-cooling-mat",

    name:"Trixie Cooling Mat",

    shortDescription:"Self-cooling mat for hot summer days.",

    description:"Gel cooling mat keeps pets cool without refrigeration.",

    brandId:9,

    categoryId:3,

    pet:"Dog",

    price:2499,

    discountPrice:2199,

    discountPercent:12,

    currency:"INR",

    rating:4.8,

    reviews:227,

    stock:59,

    featured:true,

    bestSeller:true,

    newArrival:false,

    tags:[
      "Cooling",
      "Summer"
    ],

    size:"XL",

    color:"Blue",

    material:"Cooling Gel",

    images:[
      "/assets/products/trixie/cooling-mat-1.jpg",
      "/assets/products/trixie/cooling-mat-2.jpg",
      "/assets/products/trixie/cooling-mat-3.jpg"
    ],

    specifications:{
      Cooling:"Gel",
      Foldable:"Yes"
    },

    relatedProducts:[3003]
  },

  {
    id:3005,

    sku:"TRIXIE-BOLSTER",

    slug:"trixie-bolster-bed",

    name:"Trixie Bolster Dog Bed",

    shortDescription:"Raised-edge bed for neck support.",

    description:"Comfortable cushioned bed with removable washable cover.",

    brandId:9,

    categoryId:3,

    pet:"Dog",

    price:3199,

    discountPrice:2799,

    discountPercent:13,

    currency:"INR",

    rating:4.6,

    reviews:174,

    stock:36,

    featured:false,

    bestSeller:false,

    newArrival:true,

    tags:[
      "Bolster",
      "Washable"
    ],

    size:"Medium",

    color:"Brown",

    material:"Polyester",

    images:[
      "/assets/products/trixie/bolster-1.jpg",
      "/assets/products/trixie/bolster-2.jpg",
      "/assets/products/trixie/bolster-3.jpg"
    ],

    specifications:{
      Cover:"Removable"
    },

    relatedProducts:[3002]
  },

  {
    id:3006,

    sku:"TRIXIE-TRAVEL",

    slug:"trixie-travel-bed",

    name:"Trixie Foldable Travel Dog Bed",

    shortDescription:"Portable foldable travel bed.",

    description:"Easy to carry lightweight travel bed for vacations and road trips.",

    brandId:9,

    categoryId:3,

    pet:"Dog",

    price:2899,

    discountPrice:2499,

    discountPercent:14,

    currency:"INR",

    rating:4.7,

    reviews:144,

    stock:48,

    featured:false,

    bestSeller:false,

    newArrival:true,

    tags:[
      "Travel",
      "Portable"
    ],

    size:"Large",

    color:"Grey",

    material:"Oxford Fabric",

    images:[
      "/assets/products/trixie/travel-bed-1.jpg",
      "/assets/products/trixie/travel-bed-2.jpg",
      "/assets/products/trixie/travel-bed-3.jpg"
    ],

    specifications:{
      Foldable:"Yes"
    },

    relatedProducts:[3003]
  },

  {
    id:3007,

    sku:"TRIXIE-SOFA",

    slug:"trixie-sofa-bed",

    name:"Trixie Luxury Sofa Dog Bed",

    shortDescription:"Premium sofa-style pet bed.",

    description:"Elegant sofa bed with plush cushioning and raised sides.",

    brandId:9,

    categoryId:3,

    pet:"Dog",

    price:6999,

    discountPrice:6299,

    discountPercent:10,

    currency:"INR",

    rating:4.9,

    reviews:116,

    stock:18,

    featured:true,

    bestSeller:false,

    newArrival:true,

    tags:[
      "Luxury",
      "Sofa"
    ],

    size:"XL",

    color:"Charcoal",

    material:"Velvet",

    images:[
      "/assets/products/trixie/sofa-bed-1.jpg",
      "/assets/products/trixie/sofa-bed-2.jpg",
      "/assets/products/trixie/sofa-bed-3.jpg"
    ],

    specifications:{
      Material:"Velvet",
      Washable:"Yes"
    },

    relatedProducts:[3001]
  },

  {
    id:3008,

    sku:"TRIXIE-ROUND",

    slug:"trixie-round-plush-bed",

    name:"Trixie Round Plush Dog Bed",

    shortDescription:"Soft plush bed for small dogs.",

    description:"Comfortable round plush bed suitable for puppies and toy breeds.",

    brandId:9,

    categoryId:3,

    pet:"Dog",

    price:1999,

    discountPrice:1699,

    discountPercent:15,

    currency:"INR",

    rating:4.6,

    reviews:208,

    stock:74,

    featured:false,

    bestSeller:true,

    newArrival:false,

    tags:[
      "Round",
      "Plush"
    ],

    size:"Small",

    color:"Cream",

    material:"Plush",

    images:[
      "/assets/products/trixie/round-bed-1.jpg",
      "/assets/products/trixie/round-bed-2.jpg",
      "/assets/products/trixie/round-bed-3.jpg"
    ],

    specifications:{
      Material:"Plush",
      Washable:"Yes"
    },

    relatedProducts:[3002]
  }
];

export default dogBedProducts;