import {
  SET_PRODUCTS_DATA,
  SET_FAV_STATE,
  SET_FILTERED_DATA,
} from "../actions";

const initialState = {
  data: null,
  filtered: null,
};

// We need to change both states to display them correctly
const changeItemFav = (elState, payload) =>
  elState.map((item) =>
    item.id === payload.id ? { ...item, inFav: payload.inFav } : { ...item }
  );

export function appReducer(state = initialState, action) {
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
