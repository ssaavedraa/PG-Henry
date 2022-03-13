import React from "react";
import "./MyProfile.css";
import { useState } from "react";
import NavPanel from "../NavPanel/NavPanel";
import AddArtists from "../AddArtists/AddArtists";
import Sales from "../Sales/Sales";
import img from "../../../assets/img/profile.png";
import useAuth from "../../../customHooks/useAuth";

const MyProfile = () => {

  const [isEmailEdit, setIsEmailEdit] = useState(false)
  const [isPassEdit, setIsPassEdit] = useState(false)
  const [isPasswordSecure, setIsPasswordSecure] = useState(false)
  const {user} = useAuth()

  const emailChange = ['Old email', 'New email', 'Verify new email']

  const handleEmailChange = (e) => {
    setIsEmailEdit(!isEmailEdit)
    if(!isEmailEdit)e.target.classList.replace('normal','cancel')
    else e.target.classList.replace('cancel', 'normal')
  }

  const handlePassChange = (e) => {
    setIsPassEdit(!isPassEdit)
    if(!isPassEdit)e.target.classList.replace('normal','cancel')
    else e.target.classList.replace('cancel', 'normal')
  }

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
    }
    else setIsPasswordSecure(false)
  }

  return (
    <>
      <div className="admin-box">
        <NavPanel />
        <div className="component-box">
          <h2>Admin panel</h2>
          <div className="user-info">
            <img src={img} className="img-profile" alt="profile"/>
            <p>{user.role}</p>
            <p>{`${user.firstName} ${user.lastName}`}</p>
            <div className="user-data">
              <div className="user-buttons">
                <button className="normal" onClick={e => handleEmailChange(e)} >{!isEmailEdit ? 'Change Email' : 'Cancel email change'}</button>
                <button className="normal" onClick={handlePassChange} >{!isPassEdit ? 'Change Password' : 'Cancel password change'}</button>
                <button>Discard changes</button>
                <button disabled={true}>Save changes</button>
              </div>
              <div className="user-fields">
                <label htmlFor="firstName"> First Name</label>
                <input type="text" name="firstName" id="firstName" defaultValue={user.firstName} />
              </div>
              <div className="user-fields">
                <label htmlFor="firstName"> Last Name</label>
                <input type="text" name="firstName" id="firstName" defaultValue={user.lastName}
                />
              </div>
              {
                isPassEdit && (
                  <div className="password-fields">
                    <div className="user-fields">
                      <label htmlFor='old-password'> Old password</label>
                      <input type="text" name='old-password' id='old-passWord' />
                    </div>
                    <div className="user-fields">
                        <label htmlFor='password'>Password</label>
                        <input type="password" name='new-password' id='new-password' onChange={(e) => passwordValidation()} />
                    </div>
                    <div className="user-fields">
                        <label htmlFor='verify-pass'>Verify password</label>
                        <input type="password" name='verify-pass' id='verify-pass' onChange={(e) => passwordValidation()} />
                    </div>
                    <div className="password-reqs">
                        <p>Password requirements:</p>
                        <ul>
                            <li className='pass-fail' id='pass-length'>At least 8 characters</li>
                            <li className='pass-fail' id='pass-letters'>A mixture of uppercase and lowercase letter</li>
                            <li className='pass-fail' id='pass-numbers'>A mixture of letters and numbers</li>
                            <li className='pass-fail' id='pass-match'>Passwords should match</li>
                        </ul>
                    </div>
                  </div>
                  )
              }
              {
                isEmailEdit && emailChange.map(field => {
                  let dashedField = field.toLowerCase().split(' ').join('-')
                  return(
                    <div className="user-fields">
                      <label htmlFor={dashedField}> {field}</label>
                      <input type="password" name={dashedField} id={dashedField} />
                    </div>
                  )
                })
              }
            </div>
          </div>
        </div> 
      </div>
    </>
  );
};

export default MyProfile;
