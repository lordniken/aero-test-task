import { format } from "path";
import { IProduct } from "../components/Product/types";

export interface IAppState {
  data: IProduct[] | null;
  filtered: IProduct[] | null;
}

export interface IStore {
  app: IAppState;
}
