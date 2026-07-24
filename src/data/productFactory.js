import { CURRENCY, PRODUCT_STATUS } from "./productEnums";

export const createProduct = ({
  id,
  sku,
  slug,

  name,

  shortDescription,
  description,

  pet,

  brand,

  category,

  price,

  discountPrice = price,

  currency = CURRENCY.INR,

  stock = 0,

  rating = 0,

  reviews = 0,

  featured = false,

  bestSeller = false,

  newArrival = false,

  thumbnail,

  images = [],

  tags = [],

  specifications = {},

  shipping = {},

  relatedProducts = [],

  status = PRODUCT_STATUS.ACTIVE,

  createdAt = new Date().toISOString(),

  updatedAt = new Date().toISOString(),
}) => ({
  id,

  sku,

  slug,

  name,

  shortDescription,

  description,

  pet,

  brand,

  category,

  price,

  discountPrice,

  discountPercent:
    price > discountPrice
      ? Math.round(((price - discountPrice) / price) * 100)
      : 0,

  currency,

  stock,

  status,

  rating,

  reviews,

  featured,

  bestSeller,

  newArrival,

  thumbnail,

  images,

  tags,

  specifications,

  shipping,

  relatedProducts,

  createdAt,

  updatedAt,
});