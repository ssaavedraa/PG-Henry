import React, { useEffect, useState } from "react"
import './addUser.css'

import NavPanel from "../NavPanel/NavPanel";

import { useDispatch, useSelector } from "react-redux";
import { banUser, getUserAdmin, giveUserAdmin, orderBySort, orderBySortType, removeUser, resetPasswordUser, unBanUser } from "../../../redux/actions/actions";
import Swal from "sweetalert2";






export const AddUser = () => {


  const dispatch = useDispatch();
  const state = useSelector((state) => state);
  useEffect(() => {
    dispatch(getUserAdmin())

  }, [])

  const handleSort = (e) => {
    e.preventDefault();
    dispatch(orderBySort(e.target.value))
  }
  const handleSortType = (e) => {
    e.preventDefault();
    dispatch(orderBySortType(e.target.value))
  }

 const  confirm = (name, id) => {

   

    const confirmationAdd = Swal.mixin({
      customClass: {
        confirmButton: "btnSweet success",
        cancelButton: "btnSweet danger",
      },
      buttonsStyling: false,
    });

    confirmationAdd.fire({
      title: 'Are you sure?',
      icon: 'warning',
      showCancelButton: true,
      confirmButtonText: 'Yes, update!',
      cancelButtonText: "No, cancel!",
    }).then((result) => {
      if (result.isConfirmed) {

        if (name === 'remove') {
          dispatch( (removeUser(id))) 
          Swal.fire(
            'Updated!',
            'Your entry has been updated.',
            'success'
          ) 
        } else if (name === 'add'){
          dispatch(giveUserAdmin(id)) 
          Swal.fire(
            'Updated!',
            'Your entry has been updated.',
            'success'
          ) 
          
        }else if (name === 'ban'){
          dispatch(banUser(id)) 
          Swal.fire(
            'Updated!',
            'Your entry has been updated.',
            'success'
          ) 
          
        }else if (name === 'unban'){
          dispatch(unBanUser(id)) 
          Swal.fire(
            'Updated!',
            'Your entry has been updated.',
            'success'
          ) 
          
        }else if (name === 'reset'){
          dispatch(resetPasswordUser(id))  
          Swal.fire(
            'Updated!',
            'Your entry has been updated.',
            'success'
          ) 
        }      
      }

    })
  }


  if (!state) {
    return <h2>Loading</h2>
  }
  return (
    <>
      <div className="addUser-admin-box">

        <div className="addUser-component-box">

          {/* <div className="addUser-tittle-box"><h2>Admin Panel</h2>
          </div> */}

          <div className="container-div">

            <div className="addUser-nav">
              <NavPanel />
            </div>

            <div className="addUser-content">
              
              <div className="panel-admin">
                <h1>Users</h1>

                <div className="panel-interno--">

                  <div className="panel-admin-interno1">
                    <h4>Administrators</h4>

                    <div>
                      <label>Order by:</label>
                      <select className="nav-select-1" value={'0'} onChange={(e) => handleSortType(e)}>
                        <option value="0">...</option>
                        <option value="email">Email</option>
                        <option value="firstName">FirstName</option>
                        <option value="id">Id</option>
                      </select>
                    </div>

                    <div className="panel-button">
                      <label>Sort By Name:</label>
                      <select className="nav-select-1" value={'0'} onChange={(e) => handleSort(e)} >
                        <option value="0">...</option>
                        <option value="ASC">A-Z</option>
                        <option value="DESC">Z-A</option>
                      </select>
                    </div>


                  </div>
                  <div className="panel-admin-interno2">
                    <div className="interno2-div1">
                      <ul>
                        <li>Id</li>
                        <li>First Name</li>
                        <li>Email</li>
                      </ul>

                    </div>

                    <div className="interno2-div2">
                      {
                        (state.userAdmin?.map(ele => (
                          ele.role === 'admin' ?
                            <div className="div-admin" key={ele.id}>
                              <h4>{ele.id}</h4>
                              <p>{ele.firstName}</p>
                              <p>{ele.email}</p>

                              <button className="color-reset" disabled={ele.isBanned} onClick={() => confirm('reset', ele.id)}>Reset Password</button>
                              <button className="color-remove" disabled={ele.isBanned} onClick={() => confirm('remove', ele.id)}>Remove Admin</button>
                              {
                                ele.isBanned ?
                                  <button className="color-admin" onClick={() => confirm('unban', ele.id)}>UnBan User</button>

                                  :
                                  <button className="color-unban" onClick={() => confirm('ban', ele.id)}>Ban User</button>
                              }
                              {ele.isBanned ?
                                <h2 className="h2-banned">
                                  Is banned</h2>
                                :
                                ''
                              }

                            </div>
                            :
                            ''
                        )))
                      }
                    </div>
                  </div>
                </div>

                {/* ////////////////////////////////////////////////// */}

                <div className="panel-interno-- panelinterno2">

                  <div className="panel-admin-interno1">
                    <h4>Registered users</h4>

                    <div>
                      <label>Order by:</label>
                      <select className="nav-select-1" value={'0'} onChange={(e) => handleSortType(e)}>
                        <option value="0">...</option>
                        <option value="email">Email</option>
                        <option value="firstName">FirstName</option>
                        <option value="id">Id</option>
                      </select>
                    </div>

                    <div className="panel-button">
                      <label>Sort By Name</label>
                      <select className="nav-select-1" value={'0'} onChange={(e) => handleSort(e)}>
                        <option value="0">...</option>
                        <option value="ASC">A-Z</option>
                        <option value="DESC">Z-A</option>
                      </select>
                    </div>


                  </div>
                  <div className="panel-admin-interno2">
                    <div className="interno2-div1">
                      <ul>
                        <li>Id</li>
                        <li>First Name</li>
                        <li>Email</li>
                      </ul>

                    </div>
                    <div className="interno2-div2">

                      {
                        (state.userAdmin?.map(ele => (
                          ele.role === 'user' ?
                            <div className="div-admin" key={ele.id}>
                              <h4>{ele.id}</h4>
                              <p>{ele.firstName}</p>
                              <p>{ele.email}</p>
                              <button className="color-reset" disabled={ele.isBanned} onClick={() => confirm('reset', ele.id)}>Reset Password</button>
                              <button className="color-add" disabled={ele.isBanned} onClick={() => confirm('add', ele.id)}>Add Admin</button>

                              {
                                ele.isBanned ?
                                  <button className="color-admin" onClick={() => confirm('unban', ele.id)}>UnBan User</button>

                                  :
                                  <button className="color-unban" onClick={() => confirm('ban', ele.id)}>Ban User</button>
                              }
                              {ele.isBanned ?
                                <h2 className="h2-banned">
                                  Is banned</h2>
                                :
                                ''
                              }

                            </div>
                            :
                            ''
                        )))
                      }

                    </div>
                  </div>
                </div>
                {/* }}}}}}}}}}}}}}}}}}}}}}}}}}}}} */}
              </div>
            </div>

          </div>

        </div>
      </div>

    </>
  );

}

