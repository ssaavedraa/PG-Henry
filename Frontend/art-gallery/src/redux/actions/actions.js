import axios from "axios";
import {
  GET_PAITINGS,
  GET_REVIEWS,
  GET_ARTIST,
  GET_TECHNIQUE,
} from "../action-types/index.js";

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
    /*    console.log(filters); */
    try {
      let json;

      !filters
        ? (json = await axios.get("http://localhost:3001/painting/getall"))
        : (json = await axios.get("http://localhost:3001/painting/search", {
            params: {
              ...filters,
              artist: filters?.artist?.join(","),
              technique: filters?.technique?.join(","),
            },
          }));
      return dispatch({
        type: GET_PAITINGS,
        payload: json.data,
      });
    } catch (error) {
      console.log(error);
    }
  };
}

export function getReviews(id) {
  return async function (dispatch) {
    try {
      var json = await axios.get(
        "http://localhost:3001/review/getByArtist/" + id
      );
      //console.log('llego en reviews', json)
      dispatch({
        type: GET_REVIEWS,
        payload: json.data,
      });
    } catch (error) {
      console.log(error);
    }
  };
}

export function getArtist() {
  return async (dispatch) => {
    try {
      let json = await axios.get("http://localhost:3001/artist/getAll");
      dispatch({ type: GET_ARTIST, payload: json.data });
    } catch (error) {
      console.log(error);
    }
  };
}

export function getTechnique() {
  return async (dispatch) => {
    try {
      let json = await axios.get("http://localhost:3001/technique/getAll");
      dispatch({ type: GET_TECHNIQUE, payload: json.data });
    } catch (error) {
      console.log(error);
    }
  };
}
