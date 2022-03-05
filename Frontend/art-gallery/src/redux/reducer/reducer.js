import { GET_OBRAID, GET_OBRAIDRANDON, GET_PAITINGS } from "../action-types";

const initialState = {
  //Aca estan todas las pinturas
  paintings: [],
};

function rootReducer(state = initialState, action) {
  switch (action.type) {
    case GET_PAITINGS:
      return {
        ...state,
        paintings: action.payload,
      };
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
    default:
      return state;
  }
}

export default rootReducer;
