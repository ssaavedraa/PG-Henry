import React from 'react'
import './slider.scss'


export const Slider = () => {
  return (
    <section className='slider'>
        <h2 className="slider__title">Your Image</h2>
        <div className="controls">
            <div className="controls__item">
                <i className="arrow prev"></i>
            </div>
            <div className="controls__item">
                <i className="arrow next"></i>
            </div>           
        </div>
        <div className="slider__container">
        <img src="https://definicion.mx/wp-content/uploads/2015/02/Artista.jpg'" alt="Slider" />
                
        
        
        </div>
    </section>
  )
}
