export const SET_PRODUCTS_DATA = "SET_PRODUCTS_DATA";
export const SET_FAV_STATE = "SET_FAV_STATE";
export const SET_FILTERED_DATA = "SET_FILTERED_DATA";

export const setProductsData = (payload) => ({
  type: SET_PRODUCTS_DATA,
  payload,
});

export const setFav = (id, inFav) => ({
  type: SET_FAV_STATE,
  payload: { id, inFav },
});

export const setFiltered = (payload) => ({
  type: SET_FILTERED_DATA,
  payload,
});
