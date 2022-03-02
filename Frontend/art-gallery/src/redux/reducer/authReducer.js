import { types } from "../../types/types";




const initialState = {
    uid:'',
    name:''
}

export const authReducer = (state= initialState, action) => {

        switch (action.type) {

            case types.LOGIN:
                return{
                    ...state,
                    uid: action.payload.uid,
                    name: action.payload.displayName
                };

            case types.LOGOUT:
                return{
                    ...state,
                    uid: {},
                    name: {}
                }
        
            default:
                return state;
        }



}