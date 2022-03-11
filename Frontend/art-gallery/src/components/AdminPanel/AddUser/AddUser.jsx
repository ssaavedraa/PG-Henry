import React, { useState } from "react"
import './addUser.css'


import NavPanel from "../NavPanel/NavPanel";
import ModalAddAdmin from "./ModalAddAdmin/ModalAddAdmin";
import ModalBtn from "./ModalAddAdmin/ModalBtn";



export const AddUser = () => {

  const [openModal, setOpenModal] = useState(false);
  const [openModal1, setOpenModal1] = useState(false);
  return (
    <>

      <div className="addUser-admin-box">

        <div className="addUser-component-box">

          <div className="addUser-tittle-box"><h2>Admin Panel</h2>
          </div>

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

                    <div className="order-input">
                      <label>Ordenador por</label>
                      <input
                        type='text'
                      ></input>
                    </div>

                    <div>
                      <label>Sort By Name</label>
                      <select className="nav-select-1" >
                        <option value="0">Order ⇵:</option>
                        <option value="A-Z">A-Z</option>
                        <option value="Z-A">Z-A</option>
                      </select>
                    </div>
                    <ModalAddAdmin openModal={openModal} setOpenModal={setOpenModal} />
                    <button onClick={() => setOpenModal(true)}>Add Admin</button>
                  </div>
                  <div className="panel-admin-interno2">
                    <div className="interno2-div1">
                      <ul>
                        <li>Id</li>
                        <li>First Name</li>
                        <li>Email</li>
                      </ul>

                    </div>
                    <ModalBtn openModal={openModal1} setOpenModal={setOpenModal1}/>
                    <div className="interno2-div2">
                      <h4>4</h4>
                      <p>Santiago Reyes</p>
                      <p>SantiagoReyes@gmail.com</p>
                      <button onClick={() => setOpenModal1(true)}>Switch Roles</button>
                      <button onClick={() => setOpenModal1(true)}>Ban User</button>
                      <button onClick={() => setOpenModal1(true)}>Reset Password</button>
                    </div>



                  </div>
                </div>

                {/* ////////////////////////////////////////////////// */}

                <div className="panel-interno--">

                  <div className="panel-admin-interno1">
                    <h4>Register Usuario</h4>

                    <div className="order-input">
                      <label>Ordenador por</label>
                      <input
                        type='text'
                      ></input>
                    </div>

                    <div className="panel-button">
                      <label>Sort By Name</label>
                      <select className="nav-select-1" >
                        <option value="0">Order ⇵:</option>
                        <option value="A-Z">A-Z</option>
                        <option value="Z-A">Z-A</option>
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
                      <h4>4</h4>
                      <p>Santiago Reyes</p>
                      <p>SantiagoReyes@gmail.com</p>
                      {/* <button>Change Ride</button> */}

                      <button onClick={() => setOpenModal1(true)}>Delete</button>
                      <button onClick={() => setOpenModal1(true)}>Reset Password</button>
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

