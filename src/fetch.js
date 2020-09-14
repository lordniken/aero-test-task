import { FETCH_PRODUCTS_DATA, FETCH_ERROR } from "./actions/app";

const makeRequest = async (url, method) => {
  const res = await fetch(url, {
    method,
  });

  return await res.json();
};

export const getProductsData = (dispatch) => {
  return async (dispatch) => {
    const fetchedData = await makeRequest(
      "https://my-json-server.typicode.com/aero-frontend/test-task/PRODUCTS_SUCCESS",
      "GET"
    );

    try {
      if (fetchedData.success) {
        dispatch({
          type: FETCH_PRODUCTS_DATA,
          payload: fetchedData.data.products,
        });
      } else {
        dispatch({
          type: FETCH_ERROR,
          payload: "Ошибка при загрузке данных",
        });
      }
    } catch (e) {
      console.log(e);
    }
  };
};
