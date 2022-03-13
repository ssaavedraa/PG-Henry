import React, { useEffect, useState } from "react"
import './addUser.css'


import NavPanel from "../NavPanel/NavPanel";

import ModalBtn from "./ModalAddAdmin/ModalBtn";
import { useDispatch, useSelector } from "react-redux";
import { getUserAdmin, orderBySort, orderBySortType } from "../../../redux/actions/actions";




export const AddUser = () => {


  const dispatch = useDispatch();
  const state = useSelector((state) => state);
  useEffect(() => {
    dispatch(getUserAdmin())

  }, [])


  const [openModal1, setOpenModal1] = useState(false);
  const [dataMsj, setDataMsj] = useState({
    mensaje: '',
    id: 0
  });

  const handleRemoveAdmin = (data1, id) => {
    setDataMsj(data => ({ ...data, mensaje: data1, id: id }))
    setOpenModal1(true)
  }
  const handleSort = (e) => {
    e.preventDefault();
    dispatch(orderBySort(e.target.value))
  }
  const handleSortType = (e) => {
    e.preventDefault();
    dispatch(orderBySortType(e.target.value))
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
              <div className="panel-title"><h1>User</h1></div>
              <div className="panel-admin">

                <div className="panel-interno--">

                  <div className="panel-admin-interno1">
                    <h4>Administrator</h4>

                    <div>
                      <label>Ordenador por</label>
                      <select className="nav-select-1" value={'0'} onChange={(e) => handleSortType(e)}>
                        <option value="0">Order ⇵:</option>
                        <option value="email">Email</option>
                        <option value="firstName">FirstName</option>
                        <option value="id">Id</option>
                      </select>
                    </div>

                    <div>
                      <label>Sort By Name</label>
                      <select className="nav-select-1" value={'0'} onChange={(e) => handleSort(e)} >
                        <option value="0">Order ⇵:</option>
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

                              <button disabled={ele.isBanned} onClick={() => handleRemoveAdmin('reset', ele.id)}>Reset Password</button>
                              <button disabled={ele.isBanned} onClick={() => handleRemoveAdmin('remove', ele.id)}>Remove Admin</button>
                              {
                                ele.isBanned ?
                                  <button onClick={() => handleRemoveAdmin('unban', ele.id)}>UnBan User</button>

                                  :
                                  <button onClick={() => handleRemoveAdmin('ban', ele.id)}>Ban User</button>
                              }
                              {ele.isBanned ?
                                <h2 className="h2-banned">
                                  Is banned</h2>
                                :
                                ''
                              }
                              <ModalBtn openModal={openModal1} setOpenModal={setOpenModal1} data={dataMsj} />
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
                    <h4>Register Usuario</h4>

                    <div>
                      <label>Ordenador por</label>
                      <select className="nav-select-1" value={'0'} onChange={(e) => handleSortType(e)}>
                        <option value="0">Order ⇵:</option>
                        <option value="email">Email</option>
                        <option value="firstName">FirstName</option>
                        <option value="id">Id</option>
                      </select>
                    </div>

                    <div className="panel-button">
                      <label>Sort By Name</label>
                      <select className="nav-select-1" value={'0'} onChange={(e) => handleSort(e)}>
                        <option value="0">Order ⇵:</option>
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
                              <button disabled={ele.isBanned} onClick={() => handleRemoveAdmin('reset', ele.id)}>Reset Password</button>
                              <button disabled={ele.isBanned} onClick={() => handleRemoveAdmin('add', ele.id)}>Add Admin</button>

                              {
                                ele.isBanned ?
                                  <button onClick={() => handleRemoveAdmin('unban', ele.id)}>UnBan User</button>

                                  :
                                  <button onClick={() => handleRemoveAdmin('ban', ele.id)}>Ban User</button>
                              }
                              {ele.isBanned ?
                                <h2 className="h2-banned">
                                  Is banned</h2>
                                :
                                ''
                              }
                              <ModalBtn openModal={openModal1} setOpenModal={setOpenModal1} data={dataMsj} />
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

