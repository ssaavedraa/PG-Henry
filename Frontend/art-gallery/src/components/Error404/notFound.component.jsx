import React from 'react'
import './notFound.css'

import { useState } from 'react'

export default function NotFound(){

    const [count, setCount] = useState(3)

    const countdown = setTimeout(() => {
        setCount(count - 1)
    }, 1000);

    setTimeout(() => {
        clearTimeout(countdown)
        window.location.assign('/')
    }, 3000);

    return(
        <div className='error404-container'>
            <h1>Oops...</h1>
            <h2>Error 404 page not found</h2>
            <p>You will be redirected to our home page in {count} seconds</p>
        </div>
    )
}