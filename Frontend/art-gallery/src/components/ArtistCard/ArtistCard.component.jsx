import React from "react";
import './ArtistCard.css'

export default function ArtistCard({id, img, name, location}){
    return(
        <div className="artist-card">
            <img className='artist-img' src={img} alt={id} />
            <h3>{name}</h3>
            <p>{location}</p>
        </div>
    )
}