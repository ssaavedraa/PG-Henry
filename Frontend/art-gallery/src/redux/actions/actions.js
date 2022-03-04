import axios from "axios";
import { GET_PAITINGS } from "../action-types/index.js";

//obtener pinturas
export function getPaintings() {
    return async function (dispatch) {
      try {
        var json = await axios.get("http://localhost:3001/painting/getall");
        //console.log('paintings', json)
        return dispatch({
          type: GET_PAITINGS,
          payload: json.data,
        });
      } catch (error) {
        console.log(error);
      }
    };
  }
  