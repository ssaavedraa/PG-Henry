import axios from 'axios';
import React, { useContext } from 'react';
import GoogleLogin from 'react-google-login';
import AuthContext from '../../auth/authContext';
import userSet from '../../auth/utils/userSet';

export default function GoogleLoginBtn({ onSuccess, onFailure }){

    const {user, setUser} = useContext(AuthContext);

    const successResponseGoogle = (res) => {
        axios.post("/user/google/login", { tokenId: res.tokenId })
        .then(res => { 
            userSet(res.data.token);
            setUser((prev) => { return { ...prev, user: res.data.user } });
            onSuccess(res.data.user);
        })
        .catch(err => onFailure(err))
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