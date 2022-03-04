import { GET_PAITINGS, GET_ORDER_PAINTS } from "../action-types";

const initialState = {
    //Aca estan todas las pinturas
    paintings: [],
  };
  
  function rootReducer(state = initialState, action) {
    switch (action.type) {
      case GET_PAITINGS: 
      return{
          ...state,
          paintings: action.payload
      }
      case GET_ORDER_PAINTS:
        return{
          ...state,
          paintings: action.payload
        }
      default:
        return state;
    }
  }
  
  export default rootReducer;