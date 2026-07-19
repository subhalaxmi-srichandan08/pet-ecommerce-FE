/*
|--------------------------------------------------------------------------
| Master Data
|--------------------------------------------------------------------------
|
| Every product references these objects instead of recreating them.
| This keeps product files small and consistent.
|
*/

export const BRANDS = Object.freeze({
  ROYAL_CANIN: {
    id: 1,
    name: "Royal Canin",
    slug: "royal-canin",
    logo: "/assets/brands/royal-canin.png",
  },

  PEDIGREE: {
    id: 2,
    name: "Pedigree",
    slug: "pedigree",
    logo: "/assets/brands/pedigree.png",
  },

  DROOLS: {
    id: 3,
    name: "Drools",
    slug: "drools",
    logo: "/assets/brands/drools.png",
  },

  WHISKAS: {
    id: 4,
    name: "Whiskas",
    slug: "whiskas",
    logo: "/assets/brands/whiskas.png",
  },

  MEO: {
    id: 5,
    name: "Me-O",
    slug: "me-o",
    logo: "/assets/brands/me-o.png",
  },

  SHEBA: {
    id: 6,
    name: "Sheba",
    slug: "sheba",
    logo: "/assets/brands/sheba.png",
  },

  TEMPTATIONS: {
    id: 7,
    name: "Temptations",
    slug: "temptations",
    logo: "/assets/brands/temptations.png",
  },

  KONG: {
    id: 8,
    name: "KONG",
    slug: "kong",
    logo: "/assets/brands/kong.png",
  },

  TRIXIE: {
    id: 9,
    name: "Trixie",
    slug: "trixie",
    logo: "/assets/brands/trixie.png",
  },

  HIMALAYA: {
    id: 10,
    name: "Himalaya",
    slug: "himalaya",
    logo: "/assets/brands/himalaya.png",
  },
});

export const CATEGORIES = Object.freeze({
  DOG_FOOD: {
    id: 1,
    name: "Food",
    slug: "dog-food",
  },

  DOG_TOYS: {
    id: 2,
    name: "Toys",
    slug: "dog-toys",
  },

  DOG_BEDS: {
    id: 3,
    name: "Beds",
    slug: "dog-beds",
  },

  DOG_BOWLS: {
    id: 4,
    name: "Bowls",
    slug: "dog-bowls",
  },

  DOG_LEASHES: {
    id: 5,
    name: "Leashes",
    slug: "dog-leashes",
  },

  DOG_GROOMING: {
    id: 6,
    name: "Grooming",
    slug: "dog-grooming",
  },

  CAT_FOOD: {
    id: 7,
    name: "Food",
    slug: "cat-food",
  },

  CAT_TOYS: {
    id: 8,
    name: "Toys",
    slug: "cat-toys",
  },

  CAT_BEDS: {
    id: 9,
    name: "Beds",
    slug: "cat-beds",
  },

  CAT_LITTER: {
    id: 10,
    name: "Litter",
    slug: "cat-litter",
  },

  CAT_CARRIER: {
    id: 11,
    name: "Carrier",
    slug: "cat-carrier",
  },

  CAT_SCRATCHER: {
    id: 12,
    name: "Scratcher",
    slug: "cat-scratcher",
  },

  CAT_GROOMING: {
    id: 13,
    name: "Grooming",
    slug: "cat-grooming",
  },
});