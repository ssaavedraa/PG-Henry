import { GET_PAITINGS, SET_LOGIN } from "../action-types";

const initialState = {
  //Aca estan todas las pinturas
  paintings: [],
  auth: false
};

function rootReducer(state = initialState, action) {
  switch (action.type) {
    case GET_PAITINGS:
      return {
        ...state,
        paintings: action.payload,
      };
    case SET_LOGIN:
      return{
        ...state,
        auth: true
      }
    default:
      return state;
  }
}



export default rootReducer;
