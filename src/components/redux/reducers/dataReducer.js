import { ActionTypes } from "../constants/action-types";
const intialState = {
  products: [],
};

export const dataReducer = (state = intialState, { type, payload }) => {
  switch (type) {
    case ActionTypes.SET_DATA:
      return { ...state, data: payload };
    default:
      return state;
  }
};

