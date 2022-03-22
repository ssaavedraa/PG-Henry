
import React from 'react'
import './aboutDev.css'
import { dataAbout } from './dataAbout'

export const AboutDev = () => {


    const dataAbout1 = dataAbout.sort(() => Math.random() - 0.5)
   
    return (
        <div className='aboutPrincipal'>
            <h1>About us</h1>

            <div className='aboutPrincipal-div1'>

                {
                    dataAbout1?.map(user => (
                        <div key={user.id} className='cardAbout'>
                            <div className='content-img'>
                                <img src={user.img} />
                            </div>
                            <div className='icom_logo'>
                                <h4>{user.name}</h4>
                            </div>
                            <div className='icom_logo'>
                                <i className="fa fa-github" aria-hidden="true"></i>
                                <a href={user.gitHub} target='_blank'> Ssaavedraa</a>
                            </div>
                            <div className='icom_logo'>
                                <i className="fa fa-envelope" aria-hidden="true"></i>
                                <p>{user.mail}</p>
                            </div>

                            {
                                (user.linkedin.length === 0)
                                    ?
                                    ''
                                    :
                                    <div className='icom_logo'>
                                        <i className="fa fa-linkedin" aria-hidden="true"></i>
                                        <a href={user.linkedin} target='_blank'>{user.linName}</a>
                                    </div>
                            }


                        </div>
                    ))
                }



            </div>
        </div>
    )
}
