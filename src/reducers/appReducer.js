import { SET_PRODUCTS_DATA, SET_ERROR, SET_FAV_STATE } from "../actions/app";

const initialState = {
  data: null,
  errorText: null,
};

export function appReducer(state = initialState, action) {
  switch (action.type) {
    case SET_PRODUCTS_DATA:
      return {
        ...state,
        data: action.payload,
      };
    case SET_ERROR:
      return {
        ...state,
        errorText: action.payload,
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
    default:
      return state;
  }
}
