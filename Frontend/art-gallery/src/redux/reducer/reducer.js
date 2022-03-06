import {
  GET_PAITINGS,
  GET_REVIEWS,
  GET_ARTIST,
  GET_TECHNIQUE,
} from "../action-types";

const initialState = {
  //Aca estan todas las pinturas
  paintings: [],
  reviews: [],
  artist: [],
  technique: [],
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
    case GET_ARTIST:
      return {
        ...state,
        artist: action.payload,
      };
    case GET_TECHNIQUE:
      return {
        ...state,
        technique: action.payload,
      };
    default:
      return state;
  }
}

export default rootReducer;
