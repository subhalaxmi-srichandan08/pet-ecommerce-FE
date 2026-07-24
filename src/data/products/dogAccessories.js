const dogAccessoryProducts = [
  {
    id: 4001,
    sku: "TRIXIE-STEEL-BOWL-L",
    slug: "trixie-stainless-steel-dog-bowl-large",

    name: "Trixie Stainless Steel Dog Bowl 1.8L",

    shortDescription: "Rust-resistant stainless steel feeding bowl.",

    description:
      "Premium stainless steel dog bowl with anti-skid rubber base suitable for food and water.",

    brandId: 9,
    categoryId: 4,

    pet: "Dog",

    price: 899,
    discountPrice: 699,
    discountPercent: 22,

    currency: "INR",

    rating: 4.8,
    reviews: 312,

    stock: 120,

    featured: false,
    bestSeller: true,
    newArrival: false,

    tags: [
      "Bowl",
      "Steel",
      "Anti Slip"
    ],

    images: [
      "/assets/products/trixie/bowl-1.jpg",
      "/assets/products/trixie/bowl-2.jpg",
      "/assets/products/trixie/bowl-3.jpg"
    ],

    specifications: {
      Capacity: "1.8 L",
      Material: "Stainless Steel",
      DishwasherSafe: "Yes"
    },

    relatedProducts: [4002]
  },

  {
    id:4002,

    sku:"TRIXIE-DOUBLE-BOWL",

    slug:"trixie-double-feeding-bowl",

    name:"Trixie Double Feeding Bowl Set",

    shortDescription:"Food and water bowl combo.",

    description:"Twin stainless steel bowls with elevated holder.",

    brandId:9,

    categoryId:4,

    pet:"Dog",

    price:1499,

    discountPrice:1299,

    discountPercent:13,

    currency:"INR",

    rating:4.7,

    reviews:167,

    stock:53,

    featured:true,

    bestSeller:false,

    newArrival:true,

    tags:[
      "Double Bowl",
      "Feeding"
    ],

    images:[
      "/assets/products/trixie/double-bowl-1.jpg",
      "/assets/products/trixie/double-bowl-2.jpg",
      "/assets/products/trixie/double-bowl-3.jpg"
    ],

    specifications:{
      Material:"Steel",
      Bowls:"2"
    },

    relatedProducts:[4001]
  },

  {
    id:4003,

    sku:"TRIXIE-HARNESS-M",

    slug:"trixie-reflective-harness-medium",

    name:"Trixie Reflective Dog Harness",

    shortDescription:"Comfortable padded reflective harness.",

    description:"Adjustable harness with reflective stitching for safe evening walks.",

    brandId:9,

    categoryId:5,

    pet:"Dog",

    price:1599,

    discountPrice:1399,

    discountPercent:13,

    currency:"INR",

    rating:4.8,

    reviews:251,

    stock:61,

    featured:true,

    bestSeller:true,

    newArrival:false,

    tags:[
      "Harness",
      "Reflective"
    ],

    images:[
      "/assets/products/trixie/harness-1.jpg",
      "/assets/products/trixie/harness-2.jpg",
      "/assets/products/trixie/harness-3.jpg"
    ],

    specifications:{
      Size:"Medium",
      Material:"Nylon"
    },

    relatedProducts:[4004]
  },

  {
    id:4004,

    sku:"TRIXIE-LEASH",

    slug:"trixie-premium-leash",

    name:"Trixie Premium Nylon Dog Leash",

    shortDescription:"Heavy-duty walking leash.",

    description:"Strong nylon leash with padded handle and metal hook.",

    brandId:9,

    categoryId:5,

    pet:"Dog",

    price:999,

    discountPrice:849,

    discountPercent:15,

    currency:"INR",

    rating:4.7,

    reviews:344,

    stock:79,

    featured:false,

    bestSeller:true,

    newArrival:true,

    tags:[
      "Leash",
      "Walking"
    ],

    images:[
      "/assets/products/trixie/leash-1.jpg",
      "/assets/products/trixie/leash-2.jpg",
      "/assets/products/trixie/leash-3.jpg"
    ],

    specifications:{
      Length:"1.5 Meter",
      Material:"Nylon"
    },

    relatedProducts:[4003]
  },

  {
    id:4005,

    sku:"HIMALAYA-SHAMPOO",

    slug:"himalaya-herbal-dog-shampoo",

    name:"Himalaya Erina EP Dog Shampoo",

    shortDescription:"Herbal shampoo for healthy skin and coat.",

    description:"Natural herbal ingredients reduce itching and promote shiny fur.",

    brandId:10,

    categoryId:6,

    pet:"Dog",

    price:499,

    discountPrice:399,

    discountPercent:20,

    currency:"INR",

    rating:4.8,

    reviews:502,

    stock:98,

    featured:true,

    bestSeller:true,

    newArrival:false,

    tags:[
      "Shampoo",
      "Herbal"
    ],

    images:[
      "/assets/products/himalaya/shampoo-1.jpg",
      "/assets/products/himalaya/shampoo-2.jpg",
      "/assets/products/himalaya/shampoo-3.jpg"
    ],

    specifications:{
      Volume:"450 ml"
    },

    relatedProducts:[4006]
  },

  {
    id:4006,

    sku:"TRIXIE-BRUSH",

    slug:"trixie-slicker-brush",

    name:"Trixie Slicker Grooming Brush",

    shortDescription:"Removes loose fur and tangles.",

    description:"Soft pin slicker brush suitable for all coat types.",

    brandId:9,

    categoryId:6,

    pet:"Dog",

    price:799,

    discountPrice:649,

    discountPercent:19,

    currency:"INR",

    rating:4.6,

    reviews:223,

    stock:64,

    featured:false,

    bestSeller:false,

    newArrival:true,

    tags:[
      "Brush",
      "Grooming"
    ],

    images:[
      "/assets/products/trixie/brush-1.jpg",
      "/assets/products/trixie/brush-2.jpg",
      "/assets/products/trixie/brush-3.jpg"
    ],

    specifications:{
      Type:"Slicker Brush"
    },

    relatedProducts:[4005]
  },

  {
    id:4007,

    sku:"TRIXIE-NAIL",

    slug:"trixie-nail-clipper",

    name:"Trixie Professional Nail Clipper",

    shortDescription:"Safe stainless steel nail trimmer.",

    description:"Ergonomic anti-slip handle with safety lock.",

    brandId:9,

    categoryId:6,

    pet:"Dog",

    price:699,

    discountPrice:549,

    discountPercent:21,

    currency:"INR",

    rating:4.7,

    reviews:186,

    stock:71,

    featured:false,

    bestSeller:true,

    newArrival:false,

    tags:[
      "Nail Clipper"
    ],

    images:[
      "/assets/products/trixie/nail-1.jpg",
      "/assets/products/trixie/nail-2.jpg",
      "/assets/products/trixie/nail-3.jpg"
    ],

    specifications:{
      Material:"Steel"
    },

    relatedProducts:[4006]
  },

  {
    id:4008,

    sku:"TRIXIE-WATER-BOTTLE",

    slug:"trixie-travel-water-bottle",

    name:"Trixie Travel Water Bottle 750ml",

    shortDescription:"Portable water bottle for dogs.",

    description:"Leak-proof travel bottle with foldable drinking tray.",

    brandId:9,

    categoryId:5,

    pet:"Dog",

    price:1299,

    discountPrice:1099,

    discountPercent:15,

    currency:"INR",

    rating:4.8,

    reviews:278,

    stock:56,

    featured:true,

    bestSeller:false,

    newArrival:true,

    tags:[
      "Travel",
      "Bottle"
    ],

    images:[
      "/assets/products/trixie/bottle-1.jpg",
      "/assets/products/trixie/bottle-2.jpg",
      "/assets/products/trixie/bottle-3.jpg"
    ],

    specifications:{
      Capacity:"750 ml",
      LeakProof:"Yes"
    },

    relatedProducts:[4004]
  }
];

export default dogAccessoryProducts;