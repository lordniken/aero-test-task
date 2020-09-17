// Actions

const SET_PRODUCTS_DATA = "app/SET_PRODUCTS_DATA";
const SET_FAV_STATE = "app/SET_FAV_STATE";
const SET_FILTERED_DATA = "app/SET_FILTERED_DATA";

// Initial state

const initialState = {
  data: null,
  filtered: null,
};

// Reducers

// We need to change both states to display them correctly
const changeItemFav = (elState, payload) =>
  elState.map((item) =>
    item.id === payload.id ? { ...item, inFav: payload.inFav } : { ...item }
  );

export default function reducer(state = initialState, action) {
  switch (action.type) {
    case SET_PRODUCTS_DATA:
      return {
        ...state,
        data: action.payload,
      };
    case SET_FAV_STATE:
      return {
        data: changeItemFav(state.data, action.payload),
        filtered:
          state.filtered && changeItemFav(state.filtered, action.payload),
      };
    case SET_FILTERED_DATA:
      return {
        ...state,
        filtered: action.payload,
      };
    default:
      return state;
  }
}

// Actions Creators

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
