import React, { useState } from 'react'
import './formContactArtist.css'
import logo from "../../assets/img/SantArtlogo.png";
import { useForm } from '../../customHooks/useForm';
import { validate } from './validate';
import axios from "axios";



export const FormContacArtist = () => {

    const [formValues, handleInputChange, reset] = useForm({
        name: '',
        email: '',
        message: '',
        phone: '',
        hometown: '',
        portfolio: ''
    });
    const [errorState, seterrorState] = useState({
        error: {},
        active: false
    })

    const { name, email, message, phone, hometown, portfolio } = formValues;

    const handleForm = async (e) => {
        e.preventDefault()
        let error = (validate(formValues))

        if (!Object.keys(error).length) {

            const response = await axios.post("/contact/contactArtist", {
                name,
                email
            });
            if (response.data.status === 'ok') {
                seterrorState(err => ({ ...err, error: {}, active: true }))
            }
           

        } else {
            seterrorState(err => ({ ...err, error }))

        }


        reset()
    }

    return (
        <div className='container__FormContacArtist'>


            <div className='FormContacArtist_Principal'>
                <div className='FormContacArtist_Principal_img'>
                    <img src={logo} height="70rem" alt="imgUser" />
                </div>

                <div className='FormContacArtist_form' >
                    {
                        (errorState.active)
                            ?
                            <h1>Message sent...<span><i className="fa fa-paper-plane-o move" aria-hidden="true"></i>
                            </span></h1>
                            :
                            <h1>Contact us</h1>
                    }
                    <form onSubmit={handleForm}>
                        <label>Name</label>
                        <input
                            name='name'
                            value={name}
                            onChange={handleInputChange}
                            autoComplete='off'
                            type='text'>
                        </input>
                        <div className={!errorState.error.name ? 'notMessageError' : 'messageError'}>Name Required</div>

                        <label>Phone</label>
                        <input
                            name='phone'
                            value={phone}
                            onChange={handleInputChange}
                            autoComplete='off'
                            type='text'>
                        </input>
                        <div className={!errorState.error.phone ? 'notMessageError' : 'messageError'}>Phone Required</div>

                        <label>Hometown</label>
                        <input
                            name='hometown'
                            value={hometown}
                            onChange={handleInputChange}
                            autoComplete='off'
                            type='text'>
                        </input>
                        <div className={!errorState.error.hometown ? 'notMessageError' : 'messageError'}>Hometown Required</div>

                        <label>Portfolio Link</label>
                        <input
                            name='portfolio'
                            value={portfolio}
                            onChange={handleInputChange}
                            autoComplete='off'
                            type='text'>
                        </input>
                        <div className={!errorState.error.portfolio ? 'notMessageError' : 'messageError'}>Portfolio Required</div>


                        <label>Email</label>
                        <input
                            name='email'
                            value={email}
                            onChange={handleInputChange}
                            autoComplete='off'
                            type='email'>
                        </input>
                        <div className={!errorState.error.email ? 'notMessageError' : 'messageError'}>Email Required</div>

                        <label>Messege</label>
                        <textarea
                            name='message'
                            value={message}
                            onChange={handleInputChange}
                            autoComplete='off'
                            type='text'>
                        </textarea>
                        <div className={!errorState.error.message ? 'notMessageError' : 'messageError'}>Message Required</div>

                        <button className={errorState.active ? 'disbleColor' : ''} disabled={errorState.active} type='submit'>Send</button>

                    </form>
                </div>
            </div>


        </div>
    )
}
