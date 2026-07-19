/**
 * Returns product by id
 */
export const getProductById = (products, id) =>
  products.find((product) => product.id === Number(id));

/**
 * Returns products by pet
 */
export const getProductsByPet = (products, pet) =>
  products.filter((product) => product.pet === pet);

/**
 * Returns featured products
 */
export const getFeaturedProducts = (products) =>
  products.filter((product) => product.featured);

/**
 * Returns best sellers
 */
export const getBestSellerProducts = (products) =>
  products.filter((product) => product.bestSeller);

/**
 * Returns new arrivals
 */
export const getNewArrivalProducts = (products) =>
  products.filter((product) => product.newArrival);

/**
 * Returns products by brand
 */
export const getProductsByBrand = (products, brandId) =>
  products.filter((product) => product.brandId === brandId);

/**
 * Returns products by category
 */
export const getProductsByCategory = (products, categoryId) =>
  products.filter((product) => product.categoryId === categoryId);

/**
 * Returns products in stock
 */
export const getAvailableProducts = (products) =>
  products.filter((product) => product.stock > 0);

/**
 * Returns related products
 */
export const getRelatedProducts = (
  products,
  relatedIds = []
) =>
  products.filter((product) =>
    relatedIds.includes(product.id)
  );

  /**
 * Search Products
 */

export const searchProducts = (
  products,
  keyword = ""
) => {
  if (!keyword.trim()) return products;

  const search = keyword.toLowerCase();

  return products.filter((product) => {
    return (
      product.name.toLowerCase().includes(search) ||
      product.brand.toLowerCase().includes(search) ||
      product.pet.toLowerCase().includes(search)
    );
  });
};