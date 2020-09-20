import { IProduct } from "../../components/Product/types";

export enum ActionTypeKeys {
  SET_PRODUCTS_DATA = "SET_PRODUCTS_DATA",
  SET_FAV_STATE = "SET_FAV_STATE",
  SET_FILTERED_DATA = "SET_FILTERED_DATA",
}

export interface IFavPayload {
  id: number;
  inFav: boolean;
}

interface IDataAction {
  type: typeof ActionTypeKeys.SET_PRODUCTS_DATA;
  payload: IProduct[] | null;
}

interface IFavAction {
  type: typeof ActionTypeKeys.SET_FAV_STATE;
  payload: IFavPayload;
}

interface IFilterAction {
  type: typeof ActionTypeKeys.SET_FILTERED_DATA;
  payload: IProduct[] | null;
}

export type TActionTypes = IDataAction | IFavAction | IFilterAction;
