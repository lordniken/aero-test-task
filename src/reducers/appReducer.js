import {
  SET_PRODUCTS_DATA,
  SET_FAV_STATE,
  SET_FILTERED_DATA,
} from "../actions";

const initialState = {
  data: null,
  filtered: null,
};

export function appReducer(state = initialState, action) {
  switch (action.type) {
    case SET_PRODUCTS_DATA:
      return {
        ...state,
        data: action.payload,
      };
    case SET_FAV_STATE:
      return {
        ...state,
        data: state.data.map((item) =>
          item.id === action.payload.id
            ? { ...item, inFav: action.payload.inFav }
            : { ...item }
        ),
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
