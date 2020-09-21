import { IProduct } from "../../components/Product/types";
import { ActionTypeKeys, TActionTypes } from "../actions/types";

export const setProductsData = (payload: IProduct[]): TActionTypes => ({
  type: ActionTypeKeys.SET_PRODUCTS_DATA,
  payload,
});

export const setFav = (id: number, inFav: boolean): TActionTypes => ({
  type: ActionTypeKeys.SET_FAV_STATE,
  payload: { id, inFav },
});

export const setFiltered = (payload: IProduct[] | null): TActionTypes => ({
  type: ActionTypeKeys.SET_FILTERED_DATA,
  payload,
});
