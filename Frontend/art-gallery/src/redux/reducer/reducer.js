import { GET_PAITINGS, GET_REVIEWS } from "../action-types";

const initialState = {
  //Aca estan todas las pinturas
  paintings: [],
  reviews: [],
};

function rootReducer(state = initialState, action) {
  switch (action.type) {
    case GET_PAITINGS:
      return {
        ...state,
        paintings: action.payload,
      };
      case GET_REVIEWS:
        return {
          ...state,
         reviews: action.payload,
        };
    default:
      return state;
  }
}

export default rootReducer;
