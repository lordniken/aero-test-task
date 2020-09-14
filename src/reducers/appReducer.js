import { FETCH_PRODUCTS_DATA, FETCH_ERROR } from "../actions/app";

const initialState = {
  data: null,
  errorText: null,
};

export function appReducer(state = initialState, action) {
  switch (action.type) {
    case FETCH_PRODUCTS_DATA:
      return {
        ...state,
        data: action.payload,
      };
    case FETCH_ERROR:
      return {
        ...state,
        errorText: action.payload,
      };
    default:
      return state;
  }
}
