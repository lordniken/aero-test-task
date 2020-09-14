import { setProductsData, setError, setFav } from "./actions/app";

const apiUrl = "https://my-json-server.typicode.com/aero-frontend/test-task";

const makeRequest = async (url) => {
  const res = await fetch(url, {
    method: "GET",
  });

  return await res.json();
};

export const getProductsData = () => {
  return async (dispatch) => {
    try {
      const fetchedData = await makeRequest(`${apiUrl}/PRODUCTS_SUCCESS`);

      if (fetchedData.success) {
        dispatch(setProductsData(fetchedData.data.products));
      } else {
        dispatch(setError("Ошибка при загрузке данных"));
      }
    } catch (e) {
      console.log(`Ошибка: ${e}`);
    }
  };
};

export const setFavState = (id) => {
  return async (dispatch) => {
    try {
      const fetchedData = await makeRequest(
        `${apiUrl}/FAVORITE_SUCCESS?productID=${id}`
      );

      if (fetchedData.status === "FAVORITE_SUCCESS") {
        dispatch(setFav(id, fetchedData.data.inFav));
      } else {
        console.log(fetchedData.data.message);
      }
    } catch (e) {
      console.log(`Ошибка: ${e}`);
    }
  };
};
