import React from "react";
import './ArtistCard.css'

export default function ArtistCard({id, img, name, location}){

   
    return(
        <div className="artist-card">
            <div className="artist-img">
                <img src={img} alt={id} />
            </div>
            <div className="artist-data">
                <h3>{name}</h3>
                <p>{location}</p>
               
            </div>
        </div>
    )
}