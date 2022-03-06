import {
  GET_PAITINGS,
  GET_REVIEWS,
  GET_ARTIST,
  GET_TECHNIQUE,
  GET_OBRAID,
  GET_OBRAIDRANDON,
  SET_LOGIN,
} from "../action-types";


const initialState = {
  //Aca estan todas las pinturas
  paintings: [],
  auth: false,
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
    case SET_LOGIN:
      return{
        ...state,
        auth: true
      }
    case GET_OBRAID:
      return {
        ...state,
        detailObra: action.payload
      };
      case GET_OBRAIDRANDON:
      return {
        ...state,
        obraRandon: action.payload
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
