import React, { useState } from 'react'
import './formContact.css'
import logo from "../../assets/img/SantArtlogo.png";
import { useForm } from '../../customHooks/useForm';
import { FiCornerDownLeft } from 'react-icons/fi';



export const FormContac_1 = () => {

    const [formValues, handleInputChange, reset, setValues] = useForm({
        name: '',
        email: '',
        message: '',
    });
    const [errorEmail, seterrorEmail] = useState({
        active: false
    })
    const { active } = errorEmail;
    const { name, email, message } = formValues;

    const handleForm = (e) => {
        e.preventDefault()
        if (email.trim().length === 0) {
            seterrorEmail(err => ({ ...err, active: true }))
        }
        else {
            seterrorEmail(err => ({ ...err, active: false }))
        }
        reset()
    }
    return (
        <div className='container__formContac'>


            <div className='formContac_Principal'>
                <div className='formContac_Principal_img'>
                    <img src={logo} height="70rem" alt="imgUser" />
                </div>

                <div className='formContac_form' >
                    <h1>Contact us</h1>
                    <form onSubmit={handleForm}>
                        <label>Name</label>
                        <input
                            name='name'
                            value={name}
                            onChange={handleInputChange}
                            autoComplete='off'
                            type='text'>


                        </input>

                        <label>Email</label>
                        <input
                            name='email'
                            value={email}
                            onChange={handleInputChange}
                            autoComplete='off'
                            type='email'>
                        </input>
                        <div className={active ? 'messageError' : 'notMessageError'}>Email Required</div>

                        <label>Messege</label>
                        <textarea
                            name='message'
                            value={message}
                            onChange={handleInputChange}
                            autoComplete='off'
                            type='text'>
                        </textarea>

                        <button type='submit'>Send</button>

                    </form>
                </div>
            </div>


        </div>
    )
}
