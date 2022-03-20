import {
  GET_OBRAID,
  GET_OBRAIDRANDON,
  GET_PAITINGS,
  GET_PAINTINGS_BY_ARTIST,
  GET_REVIEWS,
  GET_ARTIST_ID,
  GET_ARTIST,
  GET_TECHNIQUE,
  GET_SEARCH,
  POST_FAVS,
  DELETE_FAVS,
  GET_USER_ADMIN,
  ORDER_BY_A_Z,
  ORDER_BY_TYPE,
  GET_FAVS,
  CLEAR_ARTISTBYID,
  GET_STATS_ARTIST,
  ADD_ARTIST,
  EDIT_PAINT,
  ADD_TECHNIQUE,
  GET_ALL_SP,
  UPDATE__SP,
} from "../action-types";

const detailObra = {
  orientation: "",
  id: 1,
  title: "",
  description: "",
  height: 0,
  width: 0,
  price: 0,
  techniques: [
    {
      id: 1,
      name: "",
      description: "",
    },
  ],
  artist: {
    id: 1,
    name: "",
    biography: "",
    photo: "",
    email: "",
    score: 1,
  },
  photos: [
    {
      url: "",
    },
  ],
};

const artistId = {
  id: 1,
  name: "",
  biography: "",
  photo: "",
  email: "",
  location: "",
};

const initialState = {
  //Aca estan todas las pinturas
  paintings: [],
  reviews: [],
  paintingsArtist: [],
  artistId,
  artist: [],
  technique: [],
  resultSearch: [],
  favs: [],
  detailObra,
  purchase: [],
};

function rootReducer(state = initialState, action) {
  switch (action.type) {
    case GET_PAITINGS:
      return {
        ...state,
        paintings: action.payload,
      };
    case GET_PAINTINGS_BY_ARTIST:
      return {
        ...state,
        paintingsArtist: action.payload,
      };
    case GET_ARTIST_ID:
      return {
        ...state,
        artistId: action.payload,
      };
    case GET_REVIEWS:
      return {
        ...state,
        reviews: action.payload,
      };
    case GET_ARTIST:
      return {
        ...state,
        artist: action.payload,
      };
    case GET_TECHNIQUE:
      return {
        ...state,
        technique: action.payload,
      };
    case GET_OBRAID:
      return {
        ...state,
        detailObra: action.payload,
      };
    case GET_OBRAIDRANDON:
      return {
        ...state,
        obraRandon: action.payload,
      };
    case GET_SEARCH:
      return {
        ...state,
        resultSearch: action.payload,
      };
    case POST_FAVS:
      return {
        ...state,
        favs: action.payload,
      };
    case DELETE_FAVS:
      return {
        ...state,
        favs: action.payload,
      };
    case GET_USER_ADMIN:
      return {
        ...state,
        userAdmin: action.payload,
      };
    case ORDER_BY_A_Z:
      return {
        ...state,
        userAdmin: action.payload,
      };

    case ORDER_BY_TYPE:
      return {
        ...state,
        userAdmin: action.payload,
      };
    case GET_FAVS:
      return {
        ...state,
        favs: action.payload,
      };

    case CLEAR_ARTISTBYID:
      return {
        ...state,
        artistId: [],
      };

    case GET_STATS_ARTIST:
      return {
        ...state,
        artist: action.payload,
      };

    case ADD_ARTIST:
      return {
        ...state,
        artist: [...state.artist, action.payload],
      };
    case EDIT_PAINT:
      let artworks = [...state.paintings];
      let modifiedArtworkIndex = artworks.findIndex(
        (paint) => paint.id === action.payload[0].id
      );
      artworks[modifiedArtworkIndex] = action.payload[0];
      return {
        ...state,
        paintings: artworks,
      };
    case ADD_TECHNIQUE:
      return {
        ...state,
        technique: [...state.technique, action.payload],
      };
    case GET_ALL_SP:
      return {
        ...state,
        purchase: action.payload,
      };
    default:
      return state;
  }
}

export default rootReducer;
