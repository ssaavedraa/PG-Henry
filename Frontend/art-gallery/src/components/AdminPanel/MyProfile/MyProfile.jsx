import React from "react";
import "./MyProfile.css";
import { useState, useEffect } from "react";
import NavPanel from "../NavPanel/NavPanel";
import img from "../../../assets/img/profile.png";
import useAuth from "../../../customHooks/useAuth";
import axios from "axios";

const MyProfile = () => {

  const [isEmailEdit, setIsEmailEdit] = useState(false)
  const [isPassEdit, setIsPassEdit] = useState(false)
  const [isPasswordSecure, setIsPasswordSecure] = useState(false);
  const [password, setPassword] = useState("");
  const [verifyPassword, setVerifyPassword] = useState("");
  const [oldPassword, setOldPassword] = useState("");
  const { user } = useAuth();
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [applyChanges, setApplyChanges] = useState(true);

  /* const emailChange = ['Old email', 'New email', 'Verify new email']

  const handleEmailChange = (e) => {
    setIsEmailEdit(!isEmailEdit)
    if(!isEmailEdit)e.target.classList.replace('normal','cancel')
    else e.target.classList.replace('cancel', 'normal')
  }; */

  const handlePassChange = (e) => {
    setIsPassEdit(!isPassEdit)
    if(!isPassEdit)e.target.classList.replace('normal','cancel')
    else e.target.classList.replace('cancel', 'normal')
  };

  useEffect(() => {
    if (isPassEdit) {
      passwordValidation()
    }
  }, [password, verifyPassword]);

  useEffect(() => {
    setFirstName(user.firstName)
    setLastName(user.lastName)
  }, [user, setFirstName, setLastName]);

  useEffect(() => {
    if (isPassEdit) {
      if (isPasswordSecure) {
        setApplyChanges(false)
      } else {
        setApplyChanges(true)
      }
    } else {
        if (firstName !== user.firstName || lastName !== user.lastName) {
          setApplyChanges(false)
        } else {
          setApplyChanges(true)
      }
    }
  }, [firstName, lastName, isPasswordSecure]);

  const passwordValidation = () => {
    let passRequirementsAmount = 0
    const isUpperCase = (string) => /[A-Z ]+/.test(string);
    const stringContainsNumber = (string) => /\d/.test(string);

    let pass1 = password;
    let pass2 = verifyPassword;

    //password length
    if(pass1.length >= 8){
        document.getElementById('pass-length').classList.replace('pass-fail', 'pass-success')
        passRequirementsAmount++
    }
    else document.getElementById('pass-length').classList.replace('pass-success', 'pass-fail')
    ///password uppercase
    if(isUpperCase(pass1)){
        document.getElementById('pass-letters').classList.replace('pass-fail', 'pass-success')
        passRequirementsAmount++
    }
    else document.getElementById('pass-letters').classList.replace('pass-success', 'pass-fail')
    ///password numbers
    if(stringContainsNumber(pass1)){
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
  };
  
  const firstNameChange = (e) => {
    setFirstName(e.target.value)
  };

  const lastNameChange = (e) => {
    setLastName(e.target.value)
  };

  const oldPasswordChange = (e) => {
    setOldPassword(e.target.value)
  };

  const passwordChange = (e) => {
    setPassword(e.target.value)
  };

  const verifyPasswordChange = (e) => {
    setVerifyPassword(e.target.value)
  };

  const handleChanges = async () => {
    if (isPassEdit && isPasswordSecure) {
      try {
        const { data: { status, message } } = await axios.put("user/changePassword", { password, oldPassword })
        if (status === "error") {
          alert(`${message}`)
        } else {
          alert("Changes saved correctly")
        }
      } catch (err) {
        console.log(err)
      }
    }
    if (firstName !== user.firstName || lastName !== user.lastName) {
      try {
        await axios.put("/user/changeName", { firstName, lastName });
        window.location.reload();
      } catch (err) {
        console.log(err)
      }
    }
    discard();
  };

  const discard = () => {
    setFirstName(user.firstName);
    setLastName(user.lastName);
    setOldPassword("");
    setPassword("");
    setVerifyPassword("");
  };

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
               {/*  <button className="normal" onClick={e => handleEmailChange(e)} >{!isEmailEdit ? 'Change Email' : 'Cancel email change'}</button> */}
                <button className="normal" onClick={handlePassChange} >{!isPassEdit ? 'Change Password' : 'Cancel password change'}</button>
                <button onClick={discard}>Discard changes</button>
                <button disabled={applyChanges} onClick={() => handleChanges()}>Save changes</button>
              </div>
              <div className="user-fields">
                <label htmlFor="firstName"> First Name</label>
                <input type="text" name="firstName" id="firstName" value={firstName} onChange={(e) => firstNameChange(e)}/>
              </div>
              <div className="user-fields">
                <label htmlFor="firstName"> Last Name</label>
                <input type="text" name="firstName" id="firstName" value={lastName} onChange={(e) => lastNameChange(e)}/>
              </div>
              {
                isPassEdit && (
                  <div className="password-fields">
                    <div className="user-fields">
                      <label htmlFor='old-password'> Old password</label>
                      <input type="password" name='old-password' id='old-passWord' value={oldPassword} onChange={(e) => oldPasswordChange(e)}/>
                    </div>
                    <div className="user-fields">
                        <label htmlFor='password'>Password</label>
                        <input type="password" name='new-password' id='new-password' value={password} onChange={(e) => passwordChange(e)} />
                    </div>
                    <div className="user-fields">
                        <label htmlFor='verify-pass'>Verify password</label>
                        <input type="password" name='verify-pass' id='verify-pass' value={verifyPassword} onChange={(e) => verifyPasswordChange(e)} />
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
              {/* {
                isEmailEdit && emailChange.map(field => {
                  let dashedField = field.toLowerCase().split(' ').join('-')
                  return(
                    <div className="user-fields">
                      <label htmlFor={dashedField}> {field}</label>
                      <input type="password" name={dashedField} id={dashedField} />
                    </div>
                  )
                })
              } */}
            </div>
          </div>
        </div> 
      </div>
    </>
  );
};

export default MyProfile;