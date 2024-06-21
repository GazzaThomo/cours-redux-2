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
