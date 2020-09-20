import { setProductsData, setFav, setFiltered } from "../actions";
import { Dispatch } from "redux";
import { TActionTypes } from "../actions/types";
import { IRespData } from "../thunks/types";

const makeRequest = async (
  urlPath: string,
  method: string = "GET",
  body: string | undefined = undefined
): Promise<IRespData> => {
  const res = await fetch(`http://aero-task.lnkdev.ru/api/${urlPath}`, {
    method,
    body,
    headers: {
      "Content-Type": "application/json",
    },
  });

  return await res.json();
};

export const getProductsData = () => {
  return async (dispatch: Dispatch<TActionTypes>) => {
    try {
      const fetchedData = await makeRequest("PRODUCTS");

      if (fetchedData.status === "PRODUCTS_SUCCESS")
        dispatch(setProductsData(fetchedData.data.products));
    } catch (e) {
      console.log(`Ошибка: ${e}`);
    }
  };
};

export const fetchFavState = (id: number) => {
  return async (dispatch: Dispatch<TActionTypes>) => {
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

export const fetchFilter = (filters: string[]) => {
  return async (dispatch: Dispatch<TActionTypes>) => {
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
