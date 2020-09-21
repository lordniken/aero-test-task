import appReducer from "./app";
import { ActionTypeKeys } from "../actions/types";

const initialState = {
  data: null,
  filtered: null,
};

describe("Reducer tests", () => {
  it("SET_PRODUCTS_DATA, passing array of data", () => {
    const action = {
      type: ActionTypeKeys.SET_PRODUCTS_DATA,
      payload: [],
    };

    expect(appReducer(initialState, action)).toEqual({
      ...initialState,
      data: [],
    });
  });

  it("SET_FAV_STATE, changing fav state of data item", () => {
    const state = {
      data: [
        {
          id: 1,
          inFav: false,
        },
      ],
      filtered: null,
    };

    const action = {
      type: ActionTypeKeys.SET_FAV_STATE,
      payload: { id: 1, inFav: true },
    };

    expect(appReducer(state, action)).toEqual({
      ...state,
      data: [
        {
          id: 1,
          inFav: true,
        },
      ],
    });
  });

  it("SET_FAV_STATE, changing fav state of filtered item", () => {
    const state = {
      data: null,
      filtered: [
        {
          id: 1,
          inFav: false,
        },
      ],
    };

    const action = {
      type: ActionTypeKeys.SET_FAV_STATE,
      payload: { id: 1, inFav: true },
    };

    expect(appReducer(state, action)).toEqual({
      ...state,
      filtered: [
        {
          id: 1,
          inFav: true,
        },
      ],
    });
  });

  it("SET_FILTERED_DATA, passing array of data", () => {
    const action = {
      type: ActionTypeKeys.SET_FILTERED_DATA,
      payload: [],
    };

    expect(appReducer(initialState, action)).toEqual({
      ...initialState,
      filtered: [],
    });
  });
});
