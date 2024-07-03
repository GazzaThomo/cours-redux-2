import * as ProductList from "../common/models";

export const getProductList = (state) => state?.list;

export const getTotalOrder = (state) =>
  getProductList(state).reduce(
    (prv, cur) => Math.round((cur.price + prv) * 100) / 100,
    0
  );

export const isVoucherAvailable = (state) =>
  getProductList(state).find((product) => product.title === "Super Crémeux");

export const orderNumber = (state) =>
  countProductOccurrences(getProductList(state));

function countProductOccurrences(productArray) {
  const productCount = {};

  productArray.forEach((product) => {
    if (productCount[product.title]) {
      productCount[product.title]++;
    } else {
      productCount[product.title] = 1;
    }
  });

  return productCount;
}

export const getQuantityProductPerName = (name) => (state) =>
  getProductList(state).filter((product) => product.title === name).length;

export const getListQuantityProductPerName = (state) =>
  Object.values(ProductList).map((product) => ({
    title: product.title,
    quantity: getQuantityProductPerName(product.title)(state),
  }));

export const getUnavailableProducts = (state) =>
  state?.mennu?.unavailableProducts;
