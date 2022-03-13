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
	GET_FAVS,
	CLEAR_ARTISTBYID,
	GET_STATS_ARTIST,
	CLEAR_ARTIST
} from "../action-types";

const initialState = {
	//Aca estan todas las pinturas
	paintings: [],
	reviews: [],
	paintingsArtist: [],
	artistId: [],
	artist: [],
	technique: [],
	resultSearch: [],
	favs: [],
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

		case GET_FAVS:
			return {
				...state,
				favs: action.payload,
			};

		case CLEAR_ARTISTBYID:
			return{
				...state,
				artistId: [],
			}

		case GET_STATS_ARTIST:
			return{
				...state,
				artist: action.payload
			}

		case CLEAR_ARTIST:
			return{
				...state,
				artist: []
			}
		default:
			return state;
	}
}

export default rootReducer;
