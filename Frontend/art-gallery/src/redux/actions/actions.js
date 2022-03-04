import axios from "axios";
import { GET_PAITINGS, GET_ORDER_PAINTS } from "../action-types/index.js";

//obtener pinturas
export function getPaintings() {
  return async function (dispatch) {
    try {
      var json = await axios.get("http://localhost:3001/painting/search");
      return dispatch({
        type: GET_PAITINGS,
        payload: json.data,
      });
    } catch (error) {
      console.log(error);
    }
  };
}

export function getPaintingsOrder(sort) {
  return async (dispatch) => {
    try {
      let paintings = await axios.get(`http://localhost:3001/painting/search`);
      if (sort) {
        paintings = await axios.get(
          `http://localhost:3001/painting/search?orderBy=title&order=${sort}`
        );
      }
      dispatch({ type: GET_ORDER_PAINTS, payload: paintings.data });
    } catch (error) {
      console.log(error);
    }
  };
}
