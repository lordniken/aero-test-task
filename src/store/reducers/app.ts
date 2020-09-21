import { IAppState } from "../types";
import { TActionTypes, IFavPayload, ActionTypeKeys } from "../actions/types";
import { IProduct } from "../../components/Product/types";

export const initialState: IAppState = {
  data: null,
  filtered: null,
};

const changeItemFav = (
  elState: IProduct[],
  { id, inFav }: IFavPayload
): IProduct[] =>
  elState.map((item) =>
    item.id === id ? { ...item, inFav: inFav } : { ...item }
  );

export default function appReducer(
  state = initialState,
  action: TActionTypes
): IAppState {
  switch (action.type) {
    case ActionTypeKeys.SET_PRODUCTS_DATA:
      return {
        ...state,
        data: action.payload,
      };
    case ActionTypeKeys.SET_FAV_STATE:
      return {
        data: state.data && changeItemFav(state.data, action.payload),
        filtered:
          state.filtered && changeItemFav(state.filtered, action.payload),
      };
    case ActionTypeKeys.SET_FILTERED_DATA:
      return {
        ...state,
        filtered: action.payload,
      };
    default:
      return state;
  }
}
