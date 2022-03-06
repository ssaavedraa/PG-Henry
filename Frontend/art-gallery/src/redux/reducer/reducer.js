import {
  GET_OBRAID,
  GET_OBRAIDRANDON,
  GET_PAITINGS,
  GET_PAINTINGS_BY_ARTIST,
  GET_REVIEWS,
  GET_ARTIST_ID,
  SET_LOGIN
} from "../action-types";

const initialState = {
  //Aca estan todas las pinturas
  paintings: [],
  auth: false,
  reviews: [],
  paintingsArtist: [],
  artist: []
};

function rootReducer(state = initialState, action) {
  switch (action.type) {
    case GET_PAITINGS:
      return {
        ...state,
        paintings: action.payload,
      };
    case GET_PAINTINGS_BY_ARTIST:
      return {
        ...state,
        paintingsArtist: action.payload,
      };
    case GET_ARTIST_ID:
      return {
        ...state,
        artist: action.payload
      }
    case GET_REVIEWS:
      return {
        ...state,
        reviews: action.payload,
      };
    case SET_LOGIN:
      return{
        ...state,
        auth: true
      }
    case GET_OBRAID:
      return {
        ...state,
        detailObra: action.payload,
      };
    case GET_OBRAIDRANDON:
      return {
        ...state,
        obraRandon: action.payload,
      };
    default:
      return state;
  }
}



export default rootReducer;
