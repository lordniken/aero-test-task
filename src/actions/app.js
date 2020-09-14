export const SET_PRODUCTS_DATA = "SET_PRODUCTS_DATA";
export const SET_ERROR = "SET_ERROR";
export const SET_FAV_STATE = "SET_FAV_STATE";

export const setProductsData = (payload) => ({
  type: SET_PRODUCTS_DATA,
  payload,
});

export const setError = (payload) => ({
  type: SET_ERROR,
  payload,
});

export const setFav = (id, inFav) => ({
  type: SET_FAV_STATE,
  payload: { id, inFav },
});
