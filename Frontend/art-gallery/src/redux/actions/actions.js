import axios from "axios";
import { GET_OBRAID, GET_OBRAIDRANDON, GET_PAITINGS,  GET_PAINTINGS_BY_ARTIST,  GET_REVIEWS, GET_ARTIST_ID, SET_LOGIN  } from "../action-types/index.js";

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

//Trae los reviews
export function getReviews(id) {
  return async function (dispatch) {
    try {
      var json = await axios.get('http://localhost:3001/review/getByArtist/' + id);
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

//Artista
export function getArtistById(id) {
  return async function (dispatch) {
    try {
      var json = await axios.get(`http://localhost:3001/artist/get/${id}`)
      dispatch({
        type: GET_ARTIST_ID,
        payload: json.data
      })
    } catch (error) {
      console.log(error);
    }
  }
}

//pinturas por artista
export function getPaitingsByArtist(id) {
  return async function (dispatch) {
  try {
    var json = await axios.get(`http://localhost:3001/painting/search?artist=${id}`);
   //console.log(json)
    dispatch({
      type: GET_PAINTINGS_BY_ARTIST,
      payload: json.data
    })
  } catch (error) {
    console.log(error)
  }
  }
}

export const setLogin = (payload) => {
  return{
    type: SET_LOGIN,
    payload
  }
}
export const getObraDetail = (id) => {
  return async (dispatch) => {
    try {
      let resp = await fetch(`http://localhost:3001/painting/get/${id}`)
      let data = await resp.json()
      dispatch({
        type: GET_OBRAID,
        payload: data
      })
    } catch (error) {
      console.log('Id not found')
    }
  }
}
export const getObrasRandon = (id) => {
  return async (dispatch) => {
    try {
      let resp = await fetch(`http://localhost:3001/painting/getrecommended/${id}`)
      let data = await resp.json()
      dispatch({
        type: GET_OBRAIDRANDON,
        payload: data
      })
    } catch (error) {
      console.log('Id not found')
    }
  }
}

