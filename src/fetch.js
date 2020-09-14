import { setProductsData, setFav, setFiltered } from "./actions";

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

      if (fetchedData.status === "PRODUCTS_SUCCESS")
        dispatch(setProductsData(fetchedData.data.products));
    } catch (e) {
      console.log(`Ошибка: ${e}`);
    }
  };
};

export const fetchFavState = (id) => {
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

export const fetchFilter = (filters) => {
  return async (dispatch) => {
    try {
      const fetchedData = await makeRequest(
        `${apiUrl}/FILTER_SUCCESS?filters=${filters}`
      );

      if (fetchedData.status === "FILTER_SUCCESS") {
        dispatch(setFiltered(fetchedData.data.products));
      } else {
        console.log(fetchedData.data.message);
      }
    } catch (e) {
      console.log(`Ошибка: ${e}`);
    }
  };
};
