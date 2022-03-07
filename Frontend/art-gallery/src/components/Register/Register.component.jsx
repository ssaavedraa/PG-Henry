import React, {useState} from 'react';
import {AiOutlineCloseCircle} from 'react-icons/ai'
import './register.css'

export default function Register({open, onClose}){

    const [isPasswordSecure, setIsPasswordSecure] = useState(false)

    const passwordValidation = () => {
        let upperCaseAmount = 0
        let numberAmount = 0
        let passRequirementsAmount = 0

        let value1 = document.getElementById('password-reg').value
        let value2 = document.getElementById('verify-pass').value

        //password length
        if(value1.length >= 8){
            document.getElementById('pass-length').classList.replace('pass-fail', 'pass-success')
            passRequirementsAmount++
        }
        else document.getElementById('pass-length').classList.replace('pass-success', 'pass-fail')
        for(let i = 0; i < value1.length; i++){
            if(!isNaN(value1.charAt(i))) numberAmount++
            else if(value1.charAt(i) === value1.charAt(i).toUpperCase()) upperCaseAmount++
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
        if(value1 === value2){
            document.getElementById('pass-match').classList.replace('pass-fail', 'pass-success')
            passRequirementsAmount++
        }
        else document.getElementById('pass-match').classList.replace('pass-success', 'pass-fail')
        //enable register-btn
        if(passRequirementsAmount === 4){
            setIsPasswordSecure(true)
        }
        else setIsPasswordSecure(false)
    }

    const fieldsValidation = () => {
        let name = document.getElementById('name')
        let email = document.getElementById('email')

        if(!name.value){
            name.classList.add('fail')
        }
        else name.classList.remove('fail')
        if(!email.value.includes('@')){
            email.classList.add('fail')
        }
        else email.classList.remove('fail')
    }

    if(!open) return null
    return(
        <div className="register-modal">
            <div className="modal-background"></div>
            <div className="register">
                <AiOutlineCloseCircle className='modal-close' onClick={onClose}/>
                <div className="field">
                    <label htmlFor='name'>Name</label>
                    <input type="text" name='name' id='name' />
                </div>
                <div className="field">
                    <label htmlFor='email'>email</label>
                    <input type="text" name='email' id='email' />
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
                <button id='register-btn' disabled={!isPasswordSecure} onClick={() => fieldsValidation()}>Join SantArt</button>
            </div>
        </div>
    )
}