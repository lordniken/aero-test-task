import { fetchProductsData, fetchError } from "./actions/app";

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
        dispatch(fetchProductsData(fetchedData.data.products));
      } else {
        dispatch(fetchError("Ошибка при загрузке данных"));
      }
    } catch (e) {
      console.log(e);
    }
  };
};
