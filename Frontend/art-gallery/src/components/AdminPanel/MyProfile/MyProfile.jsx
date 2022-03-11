import React from "react";
import "./MyProfile.css";
import { useState } from "react";
import NavPanel from "../NavPanel/NavPanel";
import img from "../../../assets/img/profile.png";
import useAuth from "../../../customHooks/useAuth";

const MyProfile = () => {

  const [isEmailEdit, setIsEmailEdit] = useState(false)
  const [isPassEdit, setIsPassEdit] = useState(false)
  const {user} = useAuth()

  const emailChange = ['Old email', 'New email', 'Verify new email']
  const passChange = ['Old password', 'New password', 'Verify new password']

  const handleEmailChange = () => {
    setIsEmailEdit(!isEmailEdit)
  }

  const handlePassChange = () => {
    setIsPassEdit(!isPassEdit)
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
                <button onClick={handleEmailChange} >{!isEmailEdit ? 'Change Email' : 'Cancel email change'}</button>
                <button onClick={handlePassChange} >{!isPassEdit ? 'Change Password' : 'Cancel password change'}</button>
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
                isEmailEdit && emailChange.map(field => {
                  let dashedField = field.toLowerCase().split(' ').join('-')
                  return(
                    <div className="user-fields">
                      <label htmlFor={dashedField}> {field}</label>
                      <input type="text" name={dashedField} id={dashedField} />
                    </div>
                  )
                })
              }
              {
                isPassEdit && passChange.map(field => {
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
