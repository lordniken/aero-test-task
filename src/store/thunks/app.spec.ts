import configureMockStore from "redux-mock-store";
import thunk from "redux-thunk";
import fetchMock from "fetch-mock";
import expect from "expect";
import { API_BASE_PATH } from "./app";
import { setProductsData, setFav, setFiltered } from "../actions/app";
import { getProductsData, fetchFavState, fetchFilter } from "./app";

const mockStore = configureMockStore([thunk]);

describe("Async actions (thunks)", () => {
  afterEach(() => {
    fetchMock.restore();
  });

  const respHeader = { headers: { "content-type": "application/json" } };

  it("Fetched products data and SET_PRODUCTS_DATA action created", () => {
    fetchMock.getOnce(API_BASE_PATH + "PRODUCTS", {
      body: {
        status: "PRODUCTS_SUCCESS",
        data: {
          products: [],
        },
      },
      ...respHeader,
    });

    const expectedActions = [setProductsData([])];
    const store = mockStore({});
    //@ts-ignore
    return store.dispatch(getProductsData()).then(() => {
      expect(store.getActions()).toEqual(expectedActions);
    });
  });

  it("Fav state of product successfully changed, SET_FAV_STATE action created", () => {
    fetchMock.putOnce(API_BASE_PATH + "FAVORITE", {
      body: {
        status: "FAVORITE_SUCCESS",
        data: {
          inFav: false,
        },
      },
      ...respHeader,
    });

    const expectedActions = [setFav(1, false)];
    const store = mockStore({});

    //@ts-ignore
    return store.dispatch(fetchFavState(1)).then(() => {
      expect(store.getActions()).toEqual(expectedActions);
    });
  });

  it("Failed to change fav state of product. Message was written in console", () => {
    fetchMock.putOnce(API_BASE_PATH + "FAVORITE", {
      body: {
        status: "FAVORITE_FAIL",
        data: {
          message: "FAILED",
        },
      },
      ...respHeader,
    });

    const store = mockStore({});

    let outputData = "";
    let storeLog = (inputs: string) => (outputData += inputs);
    console["log"] = jest.fn(storeLog);
    //@ts-ignore
    return store.dispatch(fetchFavState(1)).then(() => {
      expect(outputData).toBe("FAILED");
    });
  });

  it("Fetched filtered data and SET_FILTERED_DATA action created", () => {
    fetchMock.postOnce(API_BASE_PATH + "FILTER", {
      body: {
        status: "FILTER_SUCCESS",
        data: {
          products: [],
        },
      },
      ...respHeader,
    });

    const expectedActions = [setFiltered([])];
    const store = mockStore({});

    //@ts-ignore
    return store.dispatch(fetchFilter([])).then(() => {
      expect(store.getActions()).toEqual(expectedActions);
    });
  });

  it("Failed to get filtered list of products. Message was written in console", () => {
    fetchMock.postOnce(API_BASE_PATH + "FILTER", {
      body: {
        status: "FILTER_FAIL",
        data: {
          message: "FAILED",
        },
      },
      ...respHeader,
    });

    const store = mockStore({});

    let outputData = "";
    let storeLog = (inputs: string) => (outputData += inputs);
    console["log"] = jest.fn(storeLog);
    //@ts-ignore
    return store.dispatch(fetchFilter([])).then(() => {
      expect(outputData).toBe("FAILED");
    });
  });
});
