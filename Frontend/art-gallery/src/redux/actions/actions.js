import axios from "axios";
import { AiFillBoxPlot } from "react-icons/ai";
import{
  GET_OBRAID,
  GET_OBRAIDRANDON,
  GET_PAITINGS,
  GET_PAINTINGS_BY_ARTIST,
  GET_REVIEWS,
  GET_ARTIST_ID,
  GET_ARTIST,
  GET_TECHNIQUE,
  GET_SEARCH,
  GET_STATS_ARTIST,
  GET_USER_ADMIN,
  ORDER_BY_A_Z,
  ORDER_BY_TYPE,
  GET_FAVS,
  CLEAR_ARTISTBYID,
  ADD_ARTIST,
  EDIT_ARTIST,
  EDIT_PAINT,
  ADD_TECHNIQUE,
  GET_ALL_SP,
  ADD_PAINTING,
  CONTACT_INFO,
  ADD_REVIEW
} from "../action-types/index.js";

export function getPaintings(filters) {
  return async function (dispatch) {
    try {
      let json;

      !filters
        ? (json = await axios.get("/painting/getall"))
        : (json = await axios.get("/painting/search", {
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
      var json = await axios.get("/review/getByArtist/" + id);
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
  if (id) {
    return async function (dispatch) {
      try {
        var json = await axios.get(`/artist/get/${id}`);
        dispatch({
          type: GET_ARTIST_ID,
          payload: json.data,
        });
      } catch (error) {
        console.log(error);
      }
    };
  }
  return { type: CLEAR_ARTISTBYID };
}

//pinturas por artista

export function getPaitingsByArtist(id) {
  return async function (dispatch) {
    try {
      var json = await axios.get(`/painting/search?artist=${id}`);
      return dispatch({
        type: GET_PAINTINGS_BY_ARTIST,
        payload: json.data,
      });
    } catch (error) {
      console.log(error);
    }
  };
}

export const getObraDetail = (id) => {
  return async (dispatch) => {
    try {
      let { data } = await axios.get(`/painting/get/${id}`);
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
      let { data } = await axios.get(`/painting/getrecommended/${id}`);
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
        ? (json = await axios.get("/artist/getall"))
        : (json = await axios.get(`artist/getbyname/?name=${name}`));
      dispatch({ type: GET_ARTIST, payload: json.data });
    } catch (error) {
      console.log(error);
    }
  };
}

export function getTechnique() {
  return async (dispatch) => {
    try {
      let json = await axios.get("/technique/getAll");
      dispatch({ type: GET_TECHNIQUE, payload: json.data });
    } catch (error) {
      console.log(error);
    }
  };
}

export const addNewArtist = (payload) => {
  return async function (dispatch) {
    try {
      const response = await axios.post("/artist/create", payload);
      return dispatch({
        type: ADD_ARTIST,
        payload: response.data,
      });
    } catch (err) {
      console.log(err);
    }
  };
};

export const addNewPainting = (payload) => {
  return async function (dispatch) {
    try {
      const response = await axios.post("/painting/create", payload);
      return dispatch({
        type: ADD_PAINTING,
        payload: response.data,
      });
    } catch (err) {
      console.log(err);
    }
  };
};

export function getSearchAuto(text) {
  return async (dispatch) => {
    try {
      if (!text) return dispatch({ type: GET_SEARCH, payload: "" });
      let json = await axios.get(`/painting/search/suggestions/${text}`);
      dispatch({ type: GET_SEARCH, payload: json.data });
    } catch (error) {
      console.log(error);
    }
  };
}

export function getFavs() {
  return async function (dispatch) {
    try {
      const json = await axios.get("favorites/getAll");
      return dispatch({
        type: GET_FAVS,
        payload: json.data,
      });
    } catch (error) {
      console.log(error);
    }
  };
}

export function getArtitsStat(filters) {
  return async function (dispatch) {
    try {
      const json = await axios.get("/artist/getstats", {
        params: { ...filters },
      });
      return dispatch({
        type: GET_STATS_ARTIST,
        payload: json.data,
      });
    } catch (error) {
      console.log(error);
    }
  };
}

export const editArtist = (id, payload) => {
  return async function (dispatch) {
    try {
      const response = await axios.put(`/artist/update/${id}`, payload);
      const { data: newArtist } = await axios.get(`/artist/get/${id}`);
      return dispatch({
        type: EDIT_ARTIST,
        payload: newArtist,
      });
    } catch (err) {
      console.log(err);
    }
  };
};

export const editPainting = (id, payload) => {
  return async function (dispatch) {
    try {
      const response = await axios.put(`/painting/update/${id}`, payload);
      //Pendiente ajustar response desde el backend
      return dispatch({
        type: EDIT_PAINT,
        payload: response.data,
      });
    } catch (err) {
      console.log(err);
    }
  };
};

export const addTechnique = (payload) => {
  return async function (dispatch) {
    try {
      const response = await axios.post("/technique/add", payload);
      return dispatch({
        type: ADD_TECHNIQUE,
        payload: response.data,
      });
    } catch (err) {
      console.log(err);
    }
  };
};

export const removeTechnique = (id) => {
  return async function (dispatch) {
    try {
      const post = await axios.delete(`/technique/remove/${id}`);
      return post;
    } catch (err) {
      console.log(err);
    }
  };
};
export const getUserAdmin = () => {
  return async (dispatch) => {
    try {
      const json = await axios.get(`/user/getall`);
      dispatch({
        type: GET_USER_ADMIN,
        payload: json.data,
      });
    } catch (error) {
      console.log(error);
    }
  };
};
export const removeUser = (id) => {
  return async (dispatch) => {
    try {
      const json = await axios.put(`/user/removeadmin/${id}`);
      dispatch(getUserAdmin());
    } catch (error) {
      console.log(error);
    }
  };
};
export const giveUserAdmin = (id) => {
  return async (dispatch) => {
    try {
      const json = await axios.put(`/user/giveadmin/${id}`);
      dispatch(getUserAdmin());
    } catch (error) {
      console.log(error);
    }
  };
};
export const banUser = (id) => {
  return async (dispatch) => {
    try {
      const json = await axios.put(`/user/ban/${id}`);
      dispatch(getUserAdmin());
    } catch (error) {
      console.log(error);
    }
  };
};
export function unBanUser(id) {
  return async function (dispatch) {
    try {
      const json = await axios.put(`/user/unban/${id}`);
      return dispatch(getUserAdmin());
    } catch (error) {
      console.log(error);
    }
  };
}

export const resetPasswordUser = (id) => {
  return async (dispatch) => {
    try {
      const json = await axios.put(`/user/passreset/${id}`);
      dispatch(getUserAdmin());
    } catch (error) {
      console.log(error);
    }
  };
};

export const orderBySort = (name) => {
  return async (dispatch) => {
    try {
      const json = await axios.get(`/user/getall?order=${name}`);
      dispatch({
        type: ORDER_BY_A_Z,
        payload: json.data,
      });
    } catch (error) {
      console.log(error);
    }
  };
};
export const orderBySortType = (name) => {
  return async (dispatch) => {
    try {
      const json = await axios.get(`/user/getall?orderBy=${name}`);
      dispatch({
        type: ORDER_BY_TYPE,
        payload: json.data,
      });
    } catch (error) {
      console.log(error);
    }
  };
};

export const contactInfo = (info) => {
  return {
    type: CONTACT_INFO,
    payload: info,
  };
};

//Funciones para la disponibilidad de las pinturas

export async function availablePainting(id) {
  try {
    await axios.put(`/painting/setAvailable/${id}`);
  } catch (error) {}
}

export async function notAvailablePainting(id) {
  try {
    await axios.put(`/painting/setNotAvailable/${id}`);
  } catch (error) {}
}

//Funciones Sales and Purchase
export const getAllPurchase = (filters) => {
  return async (dispatch) => {
    try {
      const json = await axios.get("/purchase/get/all", {
        params: { ...filters },
      });
      dispatch({ type: GET_ALL_SP, payload: json.data });
    } catch (error) {
      console.log(error);
    }
  };
};

export const addReview = (review) => {
  return async (dispatch) => {
    try{
      const response = axios.post('/review/add', review)
      dispatch({
        type: ADD_REVIEW,
        payload: response.data
      })
    }
    catch(e){
      console.log(e)
    }
  }
}
