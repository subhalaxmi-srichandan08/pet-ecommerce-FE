const banners = [
  {
    id: 1,

    title: "Healthy Pets, Happy Life",

    subtitle: "Premium Nutrition For Dogs & Cats",

    description:
      "Discover high-quality pet food, toys, grooming essentials and accessories from trusted brands.",

    desktopImage: "/assets/banners/banner-1-desktop.jpg",

    mobileImage: "/assets/banners/banner-1-mobile.jpg",

    badge: "UP TO 40% OFF",

    buttonText: "Shop Now",

    buttonVariant: "primary",

    redirectTo: "/products",

    backgroundColor: "#FFF7ED",

    priority: 1,

    active: true
  },

  {
    id: 2,

    title: "Premium Dog Collection",

    subtitle: "Everything Your Dog Needs",

    description:
      "Explore premium food, toys, beds and grooming products from Royal Canin, Pedigree, Drools and more.",

    desktopImage: "/assets/banners/banner-2-desktop.jpg",

    mobileImage: "/assets/banners/banner-2-mobile.jpg",

    badge: "BEST SELLERS",

    buttonText: "Shop Dog",

    buttonVariant: "secondary",

    redirectTo: "/products?pet=Dog",

    backgroundColor: "#EFF6FF",

    priority: 2,

    active: true
  },

  {
    id: 3,

    title: "Luxury Cat Collection",

    subtitle: "Everything Your Cat Loves",

    description:
      "Premium cat food, beds, toys, litter solutions and grooming essentials.",

    desktopImage: "/assets/banners/banner-3-desktop.jpg",

    mobileImage: "/assets/banners/banner-3-mobile.jpg",

    badge: "NEW ARRIVALS",

    buttonText: "Shop Cat",

    buttonVariant: "primary",

    redirectTo: "/products?pet=Cat",

    backgroundColor: "#FDF2F8",

    priority: 3,

    active: true
  },

  {
    id: 4,

    title: "Premium Grooming Collection",

    subtitle: "Keep Your Pets Healthy & Clean",

    description:
      "Professional grooming products including shampoo, brushes, nail clippers and skincare essentials.",

    desktopImage: "/assets/banners/banner-4-desktop.jpg",

    mobileImage: "/assets/banners/banner-4-mobile.jpg",

    badge: "BUY 2 GET 1",

    buttonText: "Explore",

    buttonVariant: "outline",

    redirectTo: "/products?category=grooming",

    backgroundColor: "#ECFDF5",

    priority: 4,

    active: true
  }
];

export default banners;