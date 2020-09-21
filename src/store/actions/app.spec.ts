import { setProductsData, setFav, setFiltered } from "./app";
import { ActionTypeKeys } from "./types";

describe("Action creators tests", () => {
  it("setProductsData() should attach products data", () => {
    const action = {
      type: ActionTypeKeys.SET_PRODUCTS_DATA,
      payload: [],
    };

    expect(setProductsData(action.payload)).toEqual(action);
  });

  it("setFav() should attach new fav state", () => {
    const action = {
      type: ActionTypeKeys.SET_FAV_STATE,
      payload: {
        id: 1,
        inFav: false,
      },
    };

    expect(setFav(action.payload.id, action.payload.inFav)).toEqual(action);
  });

  it("setFiltered() should attach filtered data", () => {
    const action = {
      type: ActionTypeKeys.SET_FILTERED_DATA,
      payload: [],
    };

    expect(setFiltered(action.payload)).toEqual(action);
  });
});
