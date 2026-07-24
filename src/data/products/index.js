import dogFoodProducts from "./dogFood";
import dogToyProducts from "./dogToys";
import dogBedProducts from "./dogBeds";
import dogAccessoryProducts from "./dogAccessories";

import catFoodProducts from "./catFood";
import catToyProducts from "./catToys";
import catBedProducts from "./catBeds";
import catAccessoryProducts from "./catAccessories";

export const products = [
  ...dogFoodProducts,
  ...dogToyProducts,
  ...dogBedProducts,
  ...dogAccessoryProducts,
  ...catFoodProducts,
  ...catToyProducts,
  ...catBedProducts,
  ...catAccessoryProducts,
];

export default products;