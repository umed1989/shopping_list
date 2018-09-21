import uuid from "uuid";
import { GET_ITEMS, ADD_ITEM, DELETE_ITEM } from "../actions/types";
const initialState = {
  items: [
    { id: uuid(), item: "Water" },
    { id: uuid(), item: "Bread" },
    { id: uuid(), item: "Apple" },
    { id: uuid(), item: "Sausage" },
    { id: uuid(), item: "Milk" }
  ]
};

export default function(state = initialState, action) {
  switch (action.type) {
    case GET_ITEMS:
      return {
        ...state
      };
    default:
      return state;
  }
}
