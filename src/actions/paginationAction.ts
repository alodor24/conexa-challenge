import { Dispatch } from "redux";

export const setPaginationUrl = (url: string) => (dispatch: Dispatch) => {
  dispatch({ type: "SET_PAGINATION_URL", payload: url });
};
