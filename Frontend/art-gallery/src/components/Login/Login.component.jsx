import React from 'react';
import { useState } from 'react';
import { useDispatch } from 'react-redux';
import { setLogin } from '../../redux/actions/actions';
import GoogleLogin from 'react-google-login'
import './Login.css'
import GoogleIcon from './Google Icon/GoogleIcon.component';

const {users} = require('../../assets/Json/users.json')

export default function Login(){

    const dispatch = useDispatch()
    const [user, setUser] = useState('');
    const [password, setPassword] = useState('');

    const handleLogin =() => {
        let authUser = users.find(u => {
            return (u.username === user && u.password === password)
        })
        if(authUser){
            window.localStorage.setItem('user', authUser.name)
            dispatch(setLogin(authUser.name))
        }
        else{
            alert('User not found')
        }
    }

    const responseGoogle = (response) => {
        window.localStorage.setItem('user', response.profileObj.name)
        dispatch(setLogin(response.profileObj.name))
        window.location.assign('/under')
      }

    return(
        <div className="login-container">
            <div className="login">
                <h1>Login</h1>
                <div className='login-user'>
                    <h3>For our members</h3>
                    <label htmlFor="user">Username</label>
                    <input type="text" name="user" id="user" onChange={e => setUser(e.target.value)}/>
                    <label htmlFor="password">Password</label>
                    <input type="password" name="password" id="password" onChange={e => setPassword(e.target.value)}/>
                    <button onClick={e => handleLogin()}>Login</button>
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
                <div className="login-notuser" onClick={() => window.location.assign('/under')}>
                    <h3>Not registered yet?</h3>
                    <button>Join us!</button>
                </div>
            </div>
        </div>
    )
}