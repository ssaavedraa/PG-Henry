import React from 'react';
import { useState } from 'react';
import './Login.css'

const {users} = require('../../assets/Json/users.json')

export default function Login(){

    const [user, setUser] = useState('');
    const [password, setPassword] = useState('');

    const handleLogin =() => {
        let authUser = users.find(u => {
            console.log(u.username.toLowerCase(), user.toLowerCase())
            return (u.username === user && u.password === password)
        })
        if(authUser){
            window.localStorage.setItem('user', `${user}`)
        }
        else{
            alert('User not found')
        }
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
                </div>
                <div className="login-notuser">
                    <h3>Not registered yet?</h3>
                    <button>Join us!</button>
                </div>
            </div>
        </div>
    )
}