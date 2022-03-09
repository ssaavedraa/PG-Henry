import React from 'react';
import { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { setLogin } from '../../redux/actions/actions';
import GoogleLogin from 'react-google-login'
import './Login.css'
import GoogleIcon from './Google Icon/GoogleIcon.component';
import Register from '../Register/Register.component';
import useAuth from '../../customHooks/useAuth';

export default function Login(){

    const dispatch = useDispatch()
    const [userLogin, setUserLogin] = useState({
        email: '',
        password: ''
    })
    const [isLoginFailed, setIsLoginFailed] = useState(false)
    const [isRegisterOpen, setIsRegisterOpen] = useState(false)
    const session = useSelector(state => state.auth)
    const { login } = useAuth();

    const handleLogin =() => {
        console.log(userLogin)
        login({email: userLogin.email, password: userLogin.password})
            .then(user => {
                window.localStorage.setItem('user', user.firstName + ' ' + user.lastName)
                dispatch(setLogin())
            })
            .catch(err => {
                console.log(err)
                setIsLoginFailed(true)
            })
    }

    const handleChange =(e) => {
        setUserLogin( user => {
            return{...user, [e.target.id]: e.target.value}
        })
    }

    const responseGoogle = (response) => {
        window.localStorage.setItem('user', response.profileObj.name)
        dispatch(setLogin(response.profileObj.name))
        window.location.assign('/')
    }

    if(session)window.location.assign('/')
    else return(
        <div className="login-container">
            <div className="login">
                <h1>Login</h1>
                <div className='login-user'>
                    <h3>For our members</h3>
                    {isLoginFailed && <p className='login-failed'>Email/password incorrect</p>}
                    <label htmlFor="user">Email</label>
                    <input type="text" name="email" id="email" onChange={handleChange}/>
                    <label htmlFor="password">Password</label>
                    <input type="password" name="password" id="password" onChange={handleChange}/>
                    <button onClick={handleLogin}>Login</button>
                    <p>Or</p>
                    <GoogleLogin
                        clientId='978805617530-lt1c1k8amq1rkg9sk4q3rdhs7o2eqqs9.apps.googleusercontent.com'
                        onSuccess={responseGoogle}
                        onFailure={responseGoogle}
                        cookiePolicy={'single_host_origin'}
                        render={renderProps => (
      <button onClick={renderProps.onClick} disabled={renderProps.disabled} className='google-button'> Login with <GoogleIcon/> </button>
    )}
                    />
                </div>
                <div className="login-notuser" >
                    <h3>Not registered yet?</h3>
                    <button onClick={() => setIsRegisterOpen(true)}>Join us!</button>
                    <Register open={isRegisterOpen} onClose={() => setIsRegisterOpen(false)}/>
                </div>
            </div>
        </div>
    )
}