import React, {useState} from 'react';
import {AiOutlineCloseCircle} from 'react-icons/ai'
import useAuth from '../../customHooks/useAuth';
import './register.css'

export default function Register({open, onClose}){

    const [isPasswordSecure, setIsPasswordSecure] = useState(false)
    const [registerUser, setRegisterUser] = useState({
        firstName: '',
        lastName: '',
        email: '',
        password: ''
    });

    const {register} = useAuth()

    const passwordValidation = () => {
        let upperCaseAmount = 0
        let numberAmount = 0
        let passRequirementsAmount = 0

        let pass1 = document.getElementById('password-reg').value
        let pass2 = document.getElementById('verify-pass').value

        //password length
        if(pass1.length >= 8){
            document.getElementById('pass-length').classList.replace('pass-fail', 'pass-success')
            passRequirementsAmount++
        }
        else document.getElementById('pass-length').classList.replace('pass-success', 'pass-fail')
        for(let i = 0; i < pass1.length; i++){
            if(!isNaN(pass1.charAt(i))) numberAmount++
            else if(pass1.charAt(i) === pass1.charAt(i).toUpperCase()) upperCaseAmount++
        }
        ///password uppercase
        if(upperCaseAmount >= 1){
            document.getElementById('pass-letters').classList.replace('pass-fail', 'pass-success')
            passRequirementsAmount++
        }
        else document.getElementById('pass-letters').classList.replace('pass-success', 'pass-fail')
        ///password numbers
        if(numberAmount >= 1){
            document.getElementById('pass-numbers').classList.replace('pass-fail', 'pass-success')
            passRequirementsAmount++
        }
        else document.getElementById('pass-numbers').classList.replace('pass-success', 'pass-fail')
        //passwords match
        if(pass1 === pass2){
            document.getElementById('pass-match').classList.replace('pass-fail', 'pass-success')
            passRequirementsAmount++
        }
        else document.getElementById('pass-match').classList.replace('pass-success', 'pass-fail')
        //enable register-btn
        if(passRequirementsAmount === 4){
            setIsPasswordSecure(true)
            setRegisterUser(user => {
                return{
                    ...user,
                    password: pass1
                }
            })
        }
        else setIsPasswordSecure(false)
    }

    const fieldsValidation = () => {
        console.log(registerUser)
        let firstName = document.getElementById('firstName')
        let lastName = document.getElementById('lastName')
        let email = document.getElementById('email')

        if(!firstName.value){
            firstName.classList.add('fail')
        }
        else firstName.classList.remove('fail')

        if(!lastName.value){
            lastName.classList.add('fail')
        }
        else lastName.classList.remove('fail')

        if(!email.value.includes('@')){
            email.classList.add('fail')
        }
        else email.classList.remove('fail')

        if(registerUser.firstName && registerUser.lastName && registerUser.email && registerUser.password) onRegister()
        else alert('Please input required information')
    }

    const handleChange = (e) => {
        console.log(registerUser)
        setRegisterUser(user => {
            return{
                ...user,
                [e.target.id]: e.target.value
            }
        })
    }

    const onRegister = () =>{
        register(registerUser)
            .then(user => {
                alert(`Bienvendido ${user.firstName}, Por favor inicia sesion`)
                onClose()
                setRegisterUser({
                    firstName: '',
                    lastName: '',
                    email: '',
                    password: ''
                })
                setIsPasswordSecure(false)
            })
            .catch(err => alert(err))
    }

    if(!open) return null
    return(
        <div className="register-modal">
            <div className="modal-background"></div>
            <div className="register">
                <AiOutlineCloseCircle className='modal-close' onClick={onClose}/>
                <div className="field">
                    <label htmlFor='first-name'>First name</label>
                    <input type="text" name='first-name' id='firstName' value={registerUser.firstName} onChange={handleChange} />
                </div>
                <div className="field">
                    <label htmlFor='last-name'>Last name</label>
                    <input type="text" name='last-name' id='lastName' value={registerUser.lastName} onChange={handleChange} />
                </div>
                <div className="field">
                    <label htmlFor='email'>email</label>
                    <input type="text" name='email' id='email' value={registerUser.email} onChange={handleChange} />
                </div>
                <div className="field">
                    <label htmlFor='password'>Password</label>
                    <input type="password" name='password' id='password-reg' onChange={(e) => passwordValidation()} />
                </div>
                <div className="field">
                    <label htmlFor='verify-pass'>Verify password</label>
                    <input type="password" name='verify-pass' id='verify-pass' onChange={(e) => passwordValidation()} />
                </div>

                <div className="password-requirements">
                    <p>Password requirements:</p>
                    <ul>
                        <li className='pass-fail' id='pass-length'>At least 8 characters</li>
                        <li className='pass-fail' id='pass-letters'>A mixture of uppercase and lowercase letter</li>
                        <li className='pass-fail' id='pass-numbers'>A mixture of letters and numbers</li>
                        <li className='pass-fail' id='pass-match'>Passwords should match</li>
                    </ul>
                </div>
                <button id='register-btn' disabled={!isPasswordSecure} onClick={fieldsValidation}>Join SantArt</button>
            </div>
        </div>
    )
}