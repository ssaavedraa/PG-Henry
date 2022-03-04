import React from "react"
import './UnderConstruction.css'
import under from'../../assets/img/under.png'
import { Link } from "react-router-dom"


const UnderConstruction = ()=>{  



    return (
      <>        
        <div className="under-back">
          <div className="under-box">
              <h1>UPS...  THIS PAGE IS</h1>
              <img src={under} alt="under" height="500px" width="500px" />
              
           
          </div>
          </div>
          
        
      </>
    );

}

export default UnderConstruction;