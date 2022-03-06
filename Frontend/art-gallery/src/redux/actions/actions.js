import axios from "axios";
import { GET_PAITINGS, SET_LOGIN } from "../action-types/index.js";

//login auth test
const {users} = require('../../assets/Json/users.json')

//obtener pinturas
//filters:
/*
{
    searchTerm:string,
    minPrice:number,
    maxPrice:number,
    minWidth:number,
    maxWidth:number,
    minHeight:number,
    maxHeight:number,
    artist:array de ids -> [artistId,artistId],
    technique:array de ids -> [techniqueId,techniqueId],
    orientation:string ("vertical" | "horizontal" | "square"),
    isAvailable: boolean (true por defecto),
    orderBy: string ( "price" | "title" | "createdAt" | "id" | "description" | "orientation" | "height" | "width") (default id),
    order: string ("ASC"|"DESC") (default "ASC"),
}
*/
export function getPaintings(filters) {
  return async function (dispatch) {
    console.log(filters);
    try {
      var json = await axios.get("http://localhost:3001/painting/search", {
        params: {
          ...filters,
          artist: filters?.artist?.join(","),
          technique: filters?.technique?.join(","),
        },
      });
      return dispatch({
        type: GET_PAITINGS,
        payload: json.data,
      });
    } catch (error) {
      console.log(error);
    }
  };
}

export const setLogin = (payload) => {
  return{
    type: SET_LOGIN,
    payload
  }
}