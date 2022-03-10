import axios from "axios";
import {
  GET_OBRAID,
  GET_OBRAIDRANDON,
  GET_PAITINGS,
  GET_PAINTINGS_BY_ARTIST,
  GET_REVIEWS,
  GET_ARTIST_ID,
  SET_LOGIN,
  GET_ARTIST,
  GET_TECHNIQUE,
  SET_LOGOUT,
  GET_SEARCH,
} from "../action-types/index.js";


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

//Trae los reviews
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

//Artista
export function getArtistById(id) {
  return async function (dispatch) {
    try {
      var json = await axios.get(`http://localhost:3001/artist/get/${id}`);
      dispatch({
        type: GET_ARTIST_ID,
        payload: json.data,
      });
    } catch (error) {
      console.log(error);
    }
  };
}

//pinturas por artista
export function getPaitingsByArtist(id) {
  return async function (dispatch) {
    try {
      var json = await axios.get(
        `http://localhost:3001/painting/search?artist=${id}`
      );
      //console.log(json)
      dispatch({
        type: GET_PAINTINGS_BY_ARTIST,
        payload: json.data,
      });
    } catch (error) {
      console.log(error);
    }
  };
}

export const setLogin = (payload) => {
  return {
    type: SET_LOGIN,
    payload
  }
}

export const setLogout = (payload) => {
  return{
    type: SET_LOGOUT,
    payload
  }
}

export const getObraDetail = (id) => {
  return async (dispatch) => {
    try {
      let resp = await fetch(`http://localhost:3001/painting/get/${id}`);
      let data = await resp.json();
      dispatch({
        type: GET_OBRAID,
        payload: data,
      });
    } catch (error) {
      console.log("Id not found");
    }
  };
};
export const getObrasRandon = (id) => {
  return async (dispatch) => {
    try {
      let resp = await fetch(
        `http://localhost:3001/painting/getrecommended/${id}`
      );
      let data = await resp.json();
      dispatch({
        type: GET_OBRAIDRANDON,
        payload: data,
      });
    } catch (error) {
      console.log("Id not found");
    }
  };
};

 
export function getArtist(name) {
  return async (dispatch) => {
    try {
      let json;
      !name
        ? (json = await axios.get("http://localhost:3001/artist/getAll"))
        : (json = await axios.get(
            `http://localhost:3001/artist/getbyname/?name=${name}`
          ));
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


export const addNewArtist = (payload) => {
  return async function (dispatch) {
      try{
      const post = await axios.post('http://localhost:3001/artist/create', payload);
      console.log(post)
      return post;
  }catch(err){
  console.log(err)
}
}};


export const addNewPainting = (payload) => {
  return async function (dispatch) {
      try{
      const post = await axios.post('http://localhost:3001/painting/create', payload);
      console.log(post)
      return post;
  }catch(err){
  console.log(err)
}
}};
export function getSearchAuto(text) {
  return async (dispatch) => {
    try {
      let search = text ? text : "a";
      let json = await axios.get(`http://localhost:3001/painting/search/suggestions/${search}`);
      dispatch({type: GET_SEARCH, payload: json.data});
    } catch (error) {
      console.log(error);
    }
  }
}


