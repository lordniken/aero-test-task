export const FETCH_PRODUCTS_DATA = "FETCH_PRODUCTS_DATA";
export const FETCH_ERROR = "FETCH_ERROR";

export const fetchProductsData = (payload) => ({
  type: FETCH_PRODUCTS_DATA,
  payload,
});

export const fetchError = (payload) => ({
  type: FETCH_ERROR,
  payload,
});
