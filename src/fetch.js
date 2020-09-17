import { setProductsData, setFav, setFiltered } from "./redux";

const makeRequest = async (url, method = "GET", body = undefined) => {
  const res = await fetch(`http://aero-task.lnkdev.ru/api/${url}`, {
    method,
    body,
    headers: {
      "Content-Type": "application/json",
    },
  });

  return await res.json();
};

export const getProductsData = () => {
  return async (dispatch) => {
    try {
      const fetchedData = await makeRequest(`PRODUCTS`);

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
        `FAVORITE`,
        "PUT",
        JSON.stringify({ id })
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
        `FILTER`,
        "POST",
        JSON.stringify({ filters })
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
