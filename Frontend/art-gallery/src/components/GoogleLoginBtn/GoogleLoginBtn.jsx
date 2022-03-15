import axios from 'axios';
import React, { useContext } from 'react';
import GoogleLogin from 'react-google-login';
import AuthContext from '../../auth/authContext';
import userSet from '../../auth/utils/userSet';
import useCart from "../../customHooks/useCart.js";

export default function GoogleLoginBtn({ onSuccess, onFailure }){
    
    const { add, removeAll } = useCart();
    const { setUser } = useContext(AuthContext);
    const cartSync = (paintings) => {
        if (paintings) {
            add(paintings)
        };
        axios.get("http://localhost:3001/cart/getAll").then(res => {
            if (Array.isArray(res.data)) {
                add(res.data)
            }
        }).catch(err => onFailure(err));
    };

    const successResponseGoogle = (res) => {
        const paintings = JSON.parse(localStorage.getItem("painting"));
        removeAll();
        axios.post("http://localhost:3001/user/google/login", { tokenId: res.tokenId })
        axios.post("/user/google/login", { tokenId: res.tokenId })
        .then(res => { 
            userSet(res.data.token);
            setUser((prev) => { return { ...prev, user: res.data.user } });
            onSuccess(res.data.user);
            cartSync(paintings);
        })
        .catch(err => onFailure(err));
    };

    const failureResponseGoogle = (err) => {
        onFailure(err);
    };
    
    return(
        <GoogleLogin
            clientId='977904409468-90cv2ah8dvlo2djnafa7osm3h4i99bec.apps.googleusercontent.com' //ToDo poner el client Id en un .env
            onSuccess={successResponseGoogle}
            onFailure={failureResponseGoogle}
            cookiePolicy={'single_host_origin'}
        />
    )
};